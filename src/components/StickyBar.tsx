'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 600px (past hero)
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-[#0A1628] h-12 flex items-center justify-between px-6 shadow-lg border-t border-white/5 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Left: label — hidden on mobile */}
      <span className="hidden sm:block text-xs font-medium text-white/60">
        ¿Listo para el diagnóstico?
      </span>

      {/* Right: CTA button — centered on mobile */}
      <div className="flex sm:justify-end justify-center w-full sm:w-auto">
        <Link
          href="/agenda-reunion"
          className="text-xs font-bold px-4 py-2 rounded-full text-white bg-gradient-to-r from-[#00AAEC] to-[#04418c] flex items-center gap-1.5 shadow-md transition-transform hover:scale-[1.03]"
        >
          Agendar gratis
          <ArrowRight size={12} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}