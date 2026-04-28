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
      className="py-28 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(26,58,143,0.18) 0%, rgba(0,170,236,0.08) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.5), rgba(0,170,236,0.5), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="badge-glow mx-auto mb-6 w-fit">Sin compromiso</p>

          <h2
            className="font-black text-[#0D1526] leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            Demo de 20 minutos — te mostramos{' '}
            <span className="gradient-text">exactamente cuántas llamadas</span>{' '}
            estás perdiendo hoy
          </h2>

          <div className="flex items-center justify-center gap-2 mb-10">
            <Clock size={15} style={{ color: '#00AAEC' }} />
            <span className="text-sm font-medium" style={{ color: '#00AAEC' }}>
              Respondemos en menos de 2 horas
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agenda-reunion"
              className="btn-primary px-8 py-4 text-base font-semibold flex items-center justify-center gap-2 rounded-xl"
              style={{ minWidth: '200px' }}
            >
              Solicitar demo
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/523344863113?text=Hola, quiero más información sobre Edanka para mi clínica"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-8 py-4 text-base font-medium flex items-center justify-center gap-2 rounded-xl"
              style={{ minWidth: '200px' }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
