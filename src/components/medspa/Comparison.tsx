'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Llamadas no contestadas',
    edanka: 'Cero llamadas perdidas sin registro',
    competitorNote: 'Pacientes que llaman y cuelgan',
  },
  {
    feature: 'Experiencia al paciente',
    edanka: 'Recepción profesional desde el día 1',
    competitorNote: 'WhatsApp personal sin control',
  },
  {
    feature: 'Crecimiento',
    edanka: 'Escala cuando abres sucursal',
    competitorNote: 'Instalación nueva cada vez',
  },
  {
    feature: 'Atención al cliente',
    edanka: 'Soporte directo en México',
    competitorNote: 'Call center genérico',
  },
];

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="comparacion"
      className="py-24 relative"
      style={{ background: '#F5F7FA' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.3), transparent)' }}
      />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="badge-glow mx-auto mb-5 w-fit">Comparativa</p>
          <h2
            className="font-black text-[#0D1526] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            La diferencia entre{' '}
            <span className="gradient-text">llenar tu agenda</span>{' '}
            y perder citas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(13,21,38,0.06)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div
              className="py-4 px-6 hidden md:block"
              style={{ background: 'rgba(13,21,38,0.03)' }}
            >
              <span className="text-sm font-semibold" style={{ color: '#5A6A85' }}>
                Impacto en Clínica
              </span>
            </div>
            <div
              className="py-4 px-6 col-edanka relative"
              style={{ background: 'rgba(26,58,143,0.08)' }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-black tracking-tight gradient-text">
                  Con Edanka
                </span>
              </div>
            </div>
            <div
              className="py-4 px-6"
              style={{ background: 'rgba(13,21,38,0.02)' }}
            >
              <span className="text-sm font-semibold text-center block" style={{ color: '#5A6A85' }}>
                Sin Edanka
              </span>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                borderTop: '1px solid rgba(13,21,38,0.04)',
                background: i % 2 === 0 ? 'rgba(13,21,38,0.01)' : 'transparent',
              }}
            >
              <div className="py-4 px-6 flex items-center md:border-r border-transparent md:border-[rgba(13,21,38,0.02)]">
                <span className="text-sm font-medium" style={{ color: '#0D1526' }}>
                  {row.feature}
                </span>
              </div>

              <div
                className="py-4 px-6 flex flex-col items-center justify-center gap-2 text-center"
                style={{ background: 'rgba(26,58,143,0.05)' }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.15)' }}
                >
                  <Check size={14} style={{ color: '#00AAEC' }} strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#0D1526' }}>
                  {row.edanka}
                </span>
              </div>

              <div className="py-4 px-6 flex flex-col items-center justify-center gap-2 text-center">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(239,68,68,0.12)' }}
                >
                  <X size={14} style={{ color: '#EF4444' }} strokeWidth={2.5} />
                </div>
                <span className="text-sm leading-tight" style={{ color: '#5A6A85' }}>
                  {row.competitorNote}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
