'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 lg:py-[120px] section-surface-white"
      style={{ background: '#0f172a' }}
    >
      {/* Clean CTA — white background, ample padding */}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-rule mx-auto mb-6" />

          <h2 className="font-medium leading-tight mb-4 section-title mx-auto max-w-4xl" style={{ color: '#ffffff' }}>
            Agenda una demo de <span style={{ color: '#60a5fa', fontSize: 'clamp(3.5rem, 6vw, 4rem)', lineHeight: 0.92 }}>20 minutos</span>{' '}
            <span style={{ color: '#ffffff' }}>sin compromiso</span>
          </h2>

          <p className="body-copy mb-3" style={{ color: '#94a3b8' }}>
            Cuéntanos tu operación y te mostramos exactamente cómo Edanka encaja en tu empresa.
          </p>

          <div className="flex items-center justify-center gap-2 mb-10">
            <Clock size={20} strokeWidth={1.5} color="#94a3b8" />
            <span className="text-sm font-medium" style={{ color: '#94a3b8' }}>
              Te respondemos en menos de 2 horas
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agenda-reunion"
              className="px-8 py-4 text-base font-medium flex items-center justify-center gap-2 rounded-[8px]"
              style={{ minWidth: '200px', background: '#ffffff', color: '#0f172a', border: 'none', boxShadow: 'none' }}
            >
              Solicitar demo
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/523344863113?text=Hola, quiero más información sobre Edanka"
              target="_blank"
              rel="noreferrer"
                className="btn-ghost px-7 py-3.5 text-base font-medium flex items-center gap-2 rounded-lg"
              style={{ minWidth: '200px', borderColor: '#ffffff', color: '#ffffff' }}
            >
              <MessageCircle size={20} strokeWidth={1.5} color="#ffffff" />
              WhatsApp
            </a>
          </div>

          {/* Social proof nudge */}
          <p className="text-sm mt-6" style={{ color: '#64748b' }}>
            Ahora +500 empresas que ya migraron con nosotros
          </p>
        </motion.div>
      </div>
    </section>
  );
}
