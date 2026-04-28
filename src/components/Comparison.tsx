'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisons = [
  {
    feature: 'Configurado en 72 hrs',
    edanka: true,
    competitor: false,
    competitorNote: 'Semanas de instalación',
  },
  {
    feature: 'Soporte directo en México',
    edanka: true,
    competitor: false,
    competitorNote: 'Call center genérico',
  },
  {
    feature: 'Pagas solo lo que usas',
    edanka: true,
    competitor: false,
    competitorNote: 'Contratos forzados',
  },
  {
    feature: 'Escala con tu empresa',
    edanka: true,
    competitor: false,
    competitorNote: 'Infraestructura fija',
  },
  {
    feature: 'App móvil incluida',
    edanka: true,
    competitor: false,
    competitorNote: 'Costo adicional',
  },
  {
    feature: 'Reportes en tiempo real',
    edanka: true,
    competitor: false,
    competitorNote: 'Reportes manuales',
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="comparacion"
      className="section-shell section-surface-white relative"
    >
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight section-title mx-auto max-w-3xl">
            Por qué{' '}
            <span className="gradient-text">Edanka · net2phone</span>{' '}
            y no tu operador actual
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block overflow-hidden card p-0"
        >
          <div className="grid grid-cols-[1.55fr_1fr_1fr]" style={{ background: 'transparent' }}>
            <div className="px-6 py-5">
              <span className="label-copy font-semibold" style={{ color: '#374151', fontSize: '14px' }}>Característica</span>
            </div>
            <div className="px-6 py-5 border-l border-[#E5E7EB]">
              <span className="label-copy font-black" style={{ color: '#9ca3af' }}>Operador tradicional</span>
            </div>
            <div className="px-6 py-5 border-l border-[#E5E7EB] col-edanka">
              <span className="label-copy font-black" style={{ color: 'var(--primary)' }}>Edanka</span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="grid grid-cols-[1.55fr_1fr_1fr]"
              style={{ background: i % 2 === 0 ? '#FFFFFF' : 'var(--color-edanka-muted)' }}
            >
              <div className="px-6 py-5 flex items-center">
                  <span style={{ color: '#374151', fontSize: '14px' }}>{row.feature}</span>
              </div>
              <div className="px-6 py-5 flex items-center gap-3 border-l border-[#E5E7EB]">
                <span aria-hidden="true" style={{ color: '#9CA3AF', fontSize: '18px', fontWeight: 600 }}>—</span>
                  <span className="text-sm leading-tight" style={{ color: 'var(--color-text-body)' }}>{row.competitorNote}</span>
              </div>
              <div className="px-6 py-5 flex items-center justify-center gap-3 border-l border-[#E5E7EB] col-edanka">
                <span style={{ color: '#16a34a', fontSize: '13px', fontWeight: 400 }}>Incluido</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="md:hidden grid gap-4">
          {comparisons.map((row) => (
            <div key={row.feature} className="card bg-white cursor-pointer transition-all duration-200">
              <p className="text-sm font-semibold text-[#0F0F0F] mb-4">{row.feature}</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between gap-3 rounded-[10px] bg-[#F9FAFB] px-4 py-3">
                  <span className="text-xs font-semibold label-copy text-[#9CA3AF]">Operador tradicional</span>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#9CA3AF', fontSize: '18px' }}>—</span>
                    <span className="text-sm text-[#6B7280]">{row.competitorNote}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-[10px] bg-[#f0f7ff] px-4 py-3">
                  <span className="text-xs font-semibold label-copy text-[#9CA3AF]">Edanka</span>
                  <div className="flex items-center gap-2">
                    <span style={{ color: '#16a34a', fontSize: '13px' }}>Incluido</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 text-sm"
          style={{ color: '#6B7280' }}
        >
          ¿Sigues pagando por lo que no usas?{' '}
          <Link href="/agenda-reunion" className="gradient-text font-semibold cursor-pointer hover:opacity-80 transition-opacity">
            Habla con nosotros →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
