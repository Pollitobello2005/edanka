'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Analizamos el flujo de llamadas',
    description: 'Entendemos cómo funciona la recepción de tu clínica, cuántas llamadas reciben y los horarios pico.',
    note: 'Llamada de diagnóstico gratis',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configuramos todo',
    description: 'Preparamos el menú automático, los mensajes de bienvenida y las extensiones. Tú no tocas nada técnico.',
    note: 'Nuestro equipo se encarga',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Tu equipo opera en 72 horas',
    description: 'Sin instalar cables ni comprar teléfonos nuevos. Descargan la app o acceden desde la web y listo.',
    note: 'Cero tiempo de inactividad',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="como-funciona"
      className="py-24 relative"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(26,58,143,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="badge-glow mx-auto mb-5 w-fit">Implementación rápida</p>
          <h2
            className="font-black text-[#0D1526] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Así de simple es{' '}
            <span className="gradient-text">empezar</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute top-10 left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent 5%, rgba(26,58,143,0.2) 20%, rgba(0,170,236,0.2) 80%, transparent 95%)',
              top: '36px',
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="edanka-card p-6 flex flex-col items-start"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'rgba(13,21,38,0.04)',
                        border: '1px solid rgba(13,21,38,0.08)',
                      }}
                    >
                      <span
                        className="font-black text-xl gradient-text"
                        style={{ lineHeight: 1 }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(26,58,143,0.15)' }}
                    >
                      <Icon size={16} style={{ color: '#00AAEC' }} />
                    </div>
                  </div>

                  <h3 className="text-[#0D1526] font-bold text-lg mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A6A85' }}>
                    {step.description}
                  </p>

                  <div
                    className="mt-auto px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(16,185,129,0.1)',
                      color: '#00AAEC',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    ✓ {step.note}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
