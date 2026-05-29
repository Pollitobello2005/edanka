'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, BarChart2, FileCheck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="como-funciona"
      className="hidden md:block py-10 md:py-20 bg-white w-full"
    >
      <div
        className="max-w-7xl mx-auto px-6"
        ref={ref}
      >

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-[72px]"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight text-2xl md:text-[32px] md:leading-[1.1] text-center max-w-[600px] mx-auto">
            Así <span style={{ color: 'var(--primary)' }}>funciona</span>
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Sin reuniones largas. Sin procesos complicados.
          </p>
        </motion.div>

        {/* ── Steps — explicit layout, responsive ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 relative"
        >
          {/* Dashed line behind icons (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[84px] left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] border-t-2 border-dashed border-blue-200 pointer-events-none z-0"
          />

          {/* ── Step 01 ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <span className="text-3xl md:text-[36px] font-bold text-blue-600 font-heading mb-3 leading-none">01</span>
            <div className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-blue-100 flex items-center justify-center mb-5 shrink-0 shadow-[0_0_0_6px_#fff]" style={{ boxShadow: '0 0 0 6px #fff' }}>
              <Phone className="w-6 h-6 md:w-[26px] md:h-[26px] text-blue-700" strokeWidth={1.8} />
            </div>
            <h3 className="text-[#111827] font-semibold text-base md:text-[20px] mb-2 font-heading leading-snug">Nos cuentas tu operación</h3>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-[260px]">Una llamada de 15 minutos. Tú hablas, nosotros escuchamos. Sin presentaciones, sin ventas.</p>
          </motion.div>

          {/* ── Step 02 ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <span className="text-3xl md:text-[36px] font-bold text-blue-600 font-heading mb-3 leading-none">02</span>
            <div className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-blue-100 flex items-center justify-center mb-5 shrink-0 shadow-[0_0_0_6px_#fff]" style={{ boxShadow: '0 0 0 6px #fff' }}>
              <BarChart2 className="w-6 h-6 md:w-[26px] md:h-[26px] text-blue-700" strokeWidth={1.8} />
            </div>
            <h3 className="text-[#111827] font-semibold text-base md:text-[20px] mb-2 font-heading leading-snug">Analizamos qué estás perdiendo</h3>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-[260px]">Revisamos llamadas, procesos y herramientas. Te mostramos en números lo que se puede mejorar.</p>
          </motion.div>

          {/* ── Step 03 ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <span className="text-3xl md:text-[36px] font-bold text-blue-600 font-heading mb-3 leading-none">03</span>
            <div className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full bg-blue-100 flex items-center justify-center mb-5 shrink-0 shadow-[0_0_0_6px_#fff]" style={{ boxShadow: '0 0 0 6px #fff' }}>
              <FileCheck className="w-6 h-6 md:w-[26px] md:h-[26px] text-blue-700" strokeWidth={1.8} />
            </div>
            <h3 className="text-[#111827] font-semibold text-base md:text-[20px] mb-2 font-heading leading-snug">Te entregamos un plan concreto</h3>
            <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-[260px]">Un diagnóstico real con pasos claros. Sin compromiso de compra. Sin letra chica.</p>
          </motion.div>

        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10 md:mt-16 w-full"
        >
          <Link
            href="/agenda-reunion"
            className="btn-primary text-base font-semibold flex items-center justify-center gap-2 w-full md:w-auto"
            style={{
              padding: '14px 36px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #00AAEC 0%, #04418c 100%)',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 10px 32px rgba(0,170,236,0.28)',
              transition: 'transform 150ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.025)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Agendar diagnóstico gratis
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}