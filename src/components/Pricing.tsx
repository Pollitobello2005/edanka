'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Analizamos tu operación',
    description: 'Una llamada de 30 minutos con nuestro equipo. Entendemos cómo funciona tu empresa, cuántas líneas necesitas y qué workflows debes automatizar.',
  },
  {
    number: '02',
    title: 'Configuramos todo por ti',
    description: 'Nuestro equipo técnico prepara la plataforma con tu marca, extensiones, IVR y reglas de negocio. Tú no tienes que hacer nada técnico.',
  },
  {
    number: '03',
    title: 'Tu equipo opera en la nube',
    description: 'Lunes de mañana, tu equipo enciende la computadora y ya funciona. Sin caos, sin instalaciones, sin días perdidos.',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="como-funciona"
      className="section-shell section-surface-muted relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight section-title">
            Así de simple es{' '}
            <span className="text-brand">empezar</span>
          </h2>
          <p className="mt-4 body-copy max-w-xl mx-auto" style={{ color: 'var(--color-text-body)' }}>
            Tres pasos. Sin tecnicismos. Sin complicaciones.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, i) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="card flex flex-col items-start cursor-pointer transition-all duration-200"
                  style={{ borderTop: '2px solid #e5e7eb', paddingTop: '20px' }}
                >
                  <div className="block mb-3 text-[12px] font-semibold uppercase tracking-[0.05em]" style={{ color: 'var(--primary)' }}>
                    {step.number}
                  </div>

                  <h3 className="text-[#0F0F0F] font-medium text-[17px] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#6b7280' }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
