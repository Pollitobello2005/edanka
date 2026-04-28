'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    initials: 'GO',
    quote: 'Nuestro equipo de soporte estaba todo en WhatsApp personal. Era un caos. Ahora todo está centralizado, grabado y medido. El cambio fue inmediato y sin fricción.',
    author: 'Gerente de Operaciones',
    company: 'Empresa retail · 120 empleados · CDMX',
  },
  {
    initials: 'DV',
    quote: 'Implementamos en 3 días. El equipo de soporte estuvo con nosotros en cada paso. No esperábamos esa rapidez.',
    author: 'Director de Ventas',
    company: 'Empresa logística · 85 empleados · GDL',
  },
  {
    initials: 'GC',
    quote: 'Las métricas en tiempo real cambiaron cómo tomamos decisiones. Antes adivinas, ahora sabes.',
    author: 'Gerente Comercial',
    company: 'Empresa servicios · 200 empleados · MTY',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
          className="mx-auto"
          style={{
            maxWidth: '1100px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white"
              style={{
                borderRadius: '14px',
                border: '0.5px solid rgba(229,231,235,0.95)',
                padding: '1.5rem',
                boxShadow: 'none',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  fontSize: '32px',
                  lineHeight: 1,
                  fontFamily: 'Georgia, Times New Roman, serif',
                  color: '#519cb5',
                  marginBottom: '0.75rem',
                }}
              >
                “
              </div>

              <p
                style={{
                  color: 'var(--color-text-body)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {testimonial.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(229,231,235,1)' }} />
                <div style={{ display: 'flex', gap: '2px', color: '#519cb5', fontSize: '14px', lineHeight: 1 }}>
                  {'★★★★★'}
                </div>
                <div style={{ flex: 1, height: '1px', background: 'rgba(229,231,235,1)' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '999px',
                    background: '#d8eaf1',
                    color: '#2d6a82',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    flexShrink: 0,
                  }}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <p style={{ color: 'var(--color-text-title)', fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.35 }}>
                    {testimonial.author}
                  </p>
                  <p style={{ color: 'var(--color-text-body)', fontSize: '0.75rem', lineHeight: 1.35, marginTop: '0.125rem' }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
