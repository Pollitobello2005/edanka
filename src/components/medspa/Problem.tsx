'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneOff, UserX, BarChart2, MessageSquare } from 'lucide-react';

const pains = [
  {
    title: 'Llamadas en horario pico que nadie contesta',
    description: 'Pacientes llamando al mismo tiempo y nadie toma el teléfono. Un tratamiento de $1,500 que se fue a la competencia.',
  },
  {
    title: 'Recepcionista saturada = mala experiencia desde el primer contacto',
    description: 'Atendiendo pacientes presenciales, cobrando y tratando de contestar el teléfono. Es imposible dar un buen servicio así.',
  },
  {
    title: 'No sabes cuántas citas perdiste este mes',
    description: 'Al no tener registro, no sabes cuántas oportunidades reales de venta se escaparon por no contestar a tiempo.',
  },
  {
    title: 'WhatsApp personal de tu equipo sin control ni registro',
    description: 'Tu equipo agendando por su WhatsApp personal. No hay respaldo, si se van, se llevan a los pacientes.',
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="problema"
      className="relative section-shell"
      style={{ background: 'var(--color-edanka-muted)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,58,143,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="badge-glow mx-auto mb-5 w-fit">El problema real</p>
          <h2
            className="font-black text-[#0D1526] leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            Tu clínica llena de equipo de punta —{' '}
            <span className="gradient-text">pero pierdes pacientes por el teléfono</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pains.map((pain, i) => {
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8"
                style={{ border: '1px solid var(--color-border)', background: 'transparent' }}
              >
                <div style={{ position: 'absolute', right: 16, top: 12, fontSize: 72, color: 'rgba(15,15,15,0.04)', fontWeight: 700 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="text-[#0F0F0F] font-medium text-[18px] mb-2 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                  {pain.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
