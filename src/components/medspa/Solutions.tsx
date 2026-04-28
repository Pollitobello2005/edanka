'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Headphones, Smartphone, Mic, Activity } from 'lucide-react';

const benefits = [
  {
    icon: Headphones,
    title: 'Menú automático que filtra llamadas por servicio',
    description: '"Para agendar cita marque 1, para hablar con recepción marque 2". Descongestiona a tu equipo inmediatamente.',
  },
  {
    icon: Smartphone,
    title: 'Tu equipo atiende desde celular o computadora',
    description: 'Si la recepcionista no está en el escritorio, puede contestar desde su celular con la app de Edanka.',
  },
  {
    icon: Mic,
    title: 'Grabación de llamadas para capacitar recepción',
    description: 'Escucha cómo tu equipo vende los tratamientos y capacita a las nuevas recepcionistas con ejemplos reales.',
  },
  {
    icon: Activity,
    title: 'Reportes de llamadas perdidas en tiempo real',
    description: 'Ve al instante quién llamó, a qué hora y devuélvele la llamada para recuperar esa cita antes de que llame a otra clínica.',
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="solucion"
      className="py-24 relative"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.4), rgba(0,170,236,0.4), transparent)' }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(26,58,143,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="badge-glow mx-auto mb-5 w-fit">La solución</p>
          <h2
            className="font-black text-[#0D1526] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Un sistema de comunicación a la{' '}
            <span className="gradient-text">altura de tu clínica</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="edanka-card group p-6 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(26,58,143,0.2), rgba(0,170,236,0.1))' }}
                >
                  <Icon
                    size={22}
                    style={{
                      color: '#00AAEC',
                      filter: 'drop-shadow(0 0 6px rgba(26,58,143,0.5))',
                    }}
                  />
                </div>

                <h3 className="text-[#0D1526] font-bold text-base mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A6A85' }}>
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
