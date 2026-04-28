'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { label: 'Soluciones', href: '#solucion' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#precios' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(13,21,38,0.06)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Image
              src="/iconoedanka.png"
              alt="Edanka"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-[#0F0F0F] font-bold text-xl tracking-tight">
              Edanka
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#6B7280' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A56DB')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/agenda-reunion"
              className="btn-primary px-5 py-2.5 text-sm rounded-lg font-semibold"
            >
              Solicitar demo
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[#0F0F0F] p-2"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} color="#6b7280" /> : <Menu size={20} strokeWidth={1.5} color="#6b7280" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 px-6 py-6 flex flex-col gap-4"
            style={{
              background: 'rgba(255,255,255,0.98)',
              borderBottom: '1px solid rgba(13,21,38,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#0F0F0F] font-medium text-base py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/agenda-reunion"
              className="btn-primary py-3 text-center text-sm font-semibold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
