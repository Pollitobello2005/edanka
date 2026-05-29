'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const SESSION_KEY = 'voxai_exit_popup_shown';

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const ctaClickedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < 768) return; // Desktop only
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href="/agenda-reunion"]') || target.closest('a[href*="wa.me"]')) {
        ctaClickedRef.current = true;
      }
    };
    document.addEventListener('click', handleCTAClick);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20 && !ctaClickedRef.current && !sessionStorage.getItem(SESSION_KEY)) {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, '1');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleCTAClick);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-[#0A1628]/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white text-slate-800 rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl z-10 border border-slate-100"
          >
            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
              <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 inline-block mb-4">
                ¡Espera! No te vayas sin tu diagnóstico
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3">
                ¿Tu sistema de comunicación te hace perder clientes?
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Agenda un diagnóstico gratuito de 15 minutos. Te daremos un plan concreto para optimizar tus canales, sin compromiso alguno.
              </p>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/agenda-reunion"
                  onClick={close}
                  className="w-full btn-primary py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
                >
                  Agendar diagnóstico gratis
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={close}
                  className="w-full text-xs text-slate-400 hover:text-slate-600 transition-colors py-2"
                >
                  No, gracias, prefiero seguir perdiendo llamadas
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}