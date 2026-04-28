
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pains = [
  {
    title: 'Llamadas que se pierden y nadie sabe cuántas',
    description: 'Cada llamada sin respuesta es un cliente que se va con la competencia. Sin visibilidad, no puedes mejorar.',
  },
  {
    title: 'Tu equipo remoto trabaja con WhatsApp personal sin control',
    description: 'Conversaciones de trabajo en dispositivos personales, sin respaldo, sin historial y sin supervisión.',
  },
  {
    title: 'No puedes medir qué pasa en ventas y soporte',
    description: 'Sin métricas reales, tomas decisiones a ciegas. No sabes qué equipo rinde, qué scripts funcionan.',
  },
  {
    title: 'Tu Telmex/Axtel te cobra más y te da menos cada año',
    description: 'Contratos forzados, infraestructura obsoleta, soporte lento. Pagas por servicio que ya no está a la altura.',
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="problema"
      className="section-shell section-surface-white relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight section-title">
            Tu empresa ya creció —{' '}
            <span className="gradient-text">tu sistema de comunicación, no</span>
          </h2>
          <p className="mt-4 body-copy max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Cada día que pasa con herramientas desconectadas, pierdes oportunidades reales de negocio.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pains.map((pain, i) => {
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group card cursor-pointer transition-all duration-200 ${i % 2 === 0 ? 'md:mt-10' : 'md:mt-0'}`}
                style={{ position: 'relative', overflow: 'visible' }}
              >
                <span className="block absolute top-4 right-4 text-[56px] font-bold leading-none text-[#f3f4f6] select-none pointer-events-none" style={{ zIndex: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="pr-16">
                  <h3 className="text-[#0F0F0F] font-medium text-[16px] mb-2 leading-snug">
                  {pain.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                  {pain.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
