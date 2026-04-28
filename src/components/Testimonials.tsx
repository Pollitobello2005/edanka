'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Antes perdíamos llamadas constantemente y no teníamos forma de saberlo. Con Edanka, en la primera semana vimos que nos perdíamos el 23% de los contactos. Eso se traduce en dinero real.',
    author: 'Director Comercial',
    company: 'Empresa de logística · 45 empleados · Guadalajara',
  },
  {
    quote: 'Nuestro equipo de soporte estaba todo en WhatsApp personal. Era un caos. Ahora todo está centralizado, grabado y medido. El cambio fue inmediato y sin fricción.',
    author: 'Gerente de Operaciones',
    company: 'Empresa retail · 120 empleados · CDMX',
  },
  {
    quote: 'Llevábamos 8 años con Telmex. Migrar nos daba miedo. Edanka lo hizo todo, nosotros solo encendimos las computadoras el lunes y funcionó. Increíble.',
    author: 'CEO',
    company: 'Clínica privada · 25 empleados · Monterrey',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop((e as any).matches ?? mq.matches);
    setIsDesktop(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange as any);
    else mq.addListener(onChange as any);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange as any);
      else mq.removeListener(onChange as any);
    };
  }, []);

  // Autoplay only on desktop: advance every 4s
  useEffect(() => {
    if (!isDesktop) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isDesktop]);

  const t = testimonials[index];

  return (
    <section
      id="casos"
      className="section-shell section-surface-white relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="text-[#0F0F0F] font-medium leading-tight section-title mx-auto max-w-3xl">
            Resultados <span style={{ color: 'var(--primary)' }}>reales, no promesas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto card bg-white"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#E5E7EB] testimonial-avatar" />
            </div>

            <div>
              <div className="testimonial-quote-decor">“</div>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-title)' }}>
                {t.quote}
              </p>
              <div className="mt-4">
                <p className="font-semibold text-sm" style={{ color: 'var(--color-text-title)' }}>{t.author}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-body)' }}>{t.company}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                style={{ width: 8, height: 8, borderRadius: 999, background: i === index ? 'var(--primary)' : 'var(--color-border)' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
