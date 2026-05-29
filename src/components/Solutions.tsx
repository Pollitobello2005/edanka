'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop2, Activity, Mic, Layers } from 'lucide-react';

const benefits = [
  {
    icon: Laptop2,
    title: 'Atienden desde cualquier dispositivo',
    description: 'Tu equipo opera desde la oficina, casa o en tránsito. Misma experiencia, sin fricción, en móvil o computadora.',
  },
  {
    icon: Activity,
    title: 'Supervisas llamadas en tiempo real',
    description: 'Panel en vivo con métricas por agente. Escucha, susurra o toma la llamada cuando lo necesites.',
  },
  {
    icon: Mic,
    title: 'Grabas conversaciones para capacitar',
    description: 'Historial completo de cada llamada. Usa las mejores para entrenar a nuevos agentes desde el día uno.',
  },
  {
    icon: Layers,
    title: 'Escalas líneas sin llamar a un técnico',
    description: 'Agrega líneas, extensiones o usuarios en segundos desde el portal. Sin visitas, sin contratos nuevos.',
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="solucion"
      className="py-8 md:py-16 section-surface-muted relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight text-2xl md:text-[32px] md:leading-[1.1] text-center max-w-[600px] mx-auto">
            Una plataforma que tu equipo
            <br />
            <span className="gradient-text">usa desde el día uno</span>
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Sin curvas de aprendizaje largas, sin hardware costoso, sin esperas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(4,65,140,0.15)', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
                className={`card group cursor-pointer transition-all duration-300 p-4 md:p-7 ${(i === 1 || i === 2) ? 'hidden md:block' : ''}`}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8 mb-3 text-gray-500 shrink-0 transition-colors group-hover:text-blue-600" strokeWidth={1.5} />

                <h3 className="text-[#0F0F0F] text-sm md:text-[18px] font-semibold md:font-medium mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-xs md:text-[14px] leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
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
