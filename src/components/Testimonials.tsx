'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    initials: 'RT',
    quote: 'Antes cada vendedor atendía desde su celular y no había forma de saber qué pasaba. Ahora todas las llamadas quedan grabadas y puedo escucharlas cuando quiero. En dos semanas ya sabíamos dónde se caían las ventas.',
    author: 'Ricardo T. · Director Comercial',
    company: 'Distribuidora de materiales · 45 empleados · Monterrey',
  },
  {
    initials: 'SM',
    quote: 'Calculamos que perdíamos entre 8 y 10 llamadas diarias porque no había quién contestara. Con el enrutamiento automático eso desapareció. El primer mes ya se pagó solo.',
    author: 'Sofía M. · Gerente de Operaciones',
    company: 'Clínica dental · 3 sucursales · Guadalajara',
  },
  {
    initials: 'AV',
    quote: 'Trabajamos con agentes en tres ciudades distintas y parecía imposible coordinarnos. Hoy todos entran a la misma plataforma, vemos métricas en tiempo real y los clientes ni notan que somos remotos.',
    author: 'Andrés V. · CEO',
    company: 'Agencia de cobranza · 60 agentes · CDMX',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="casos"
      className="py-8 md:py-16 section-surface-white relative"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="text-[#0F0F0F] font-medium leading-tight text-2xl md:text-[32px] md:leading-[1.1] text-center mx-auto max-w-3xl">
            Resultados <span style={{ color: 'var(--primary)' }}>reales, no promesas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{
            maxWidth: '1100px',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.initials}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(4,65,140,0.15)', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}
              className={`flex flex-col bg-white p-4 md:p-7 cursor-default transition-all duration-300 ${index > 0 ? 'hidden md:block' : ''}`}
              style={{
                borderRadius: '16px',
                border: '1px solid rgba(229,231,235,0.95)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  fontSize: '32px',
                  lineHeight: 1,
                  fontFamily: 'Georgia, Times New Roman, serif',
                  color: '#04418c',
                  marginBottom: '0.75rem',
                }}
              >
                “
              </div>

              <p
                className="text-xs md:text-[14px]"
                style={{
                  color: 'var(--color-text-body)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {testimonial.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(229,231,235,1)' }} />
                <div style={{ display: 'flex', gap: '2px', color: '#04418c', fontSize: '14px', lineHeight: 1 }}>
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
                    background: '#e6eefc',
                    color: '#04418c',
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

        {/* Mobile only helper text */}
        <div className="block md:hidden text-center mt-6 text-xs text-gray-500 font-semibold">
          ★★★★★ +500 empresas confían en VOXAI
        </div>
      </div>
    </section>
  );
}
