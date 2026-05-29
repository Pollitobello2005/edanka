'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto cuesta?',
    a: 'Depende de tu operación y lo que necesitas resolver. No tenemos paquetes fijos porque cada empresa es diferente. En la consultoría gratuita analizamos tu caso y te damos un estimado claro. Sin letra chica.',
  },
  {
    q: '¿Ya tengo Telmex/Axtel, puedo migrar sin cortar el servicio?',
    a: 'Sí. Hacemos la migración en paralelo — tu operación no se detiene ni un día. La mayoría de nuestros clientes migraron sin que sus equipos notaran el cambio.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'El promedio es 72 horas para las soluciones de VoIP y comunicación. Las implementaciones con IA o automatización dependen del alcance — te lo decimos exactamente en la consultoría.',
  },
  {
    q: '¿Necesito un equipo técnico interno?',
    a: 'No. Nosotros nos encargamos de todo: instalación, configuración, capacitación y soporte. Tu equipo solo necesita saber usar el teléfono o la computadora.',
  },
  {
    q: '¿Qué pasa si no funciona para mi empresa?',
    a: 'Antes de cualquier contrato hacemos el diagnóstico. Si no vemos cómo generarte valor real, te lo decimos directo — no perdemos tu tiempo ni el nuestro.',
  },
];

function FAQItem({
  q,
  a,
  index,
  defaultOpen = false,
}: {
  q: string;
  a: string;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07 }}
      className={index >= 3 ? "hidden md:block" : ""}
      style={{
        borderBottom: '1px solid rgba(229,231,235,0.9)',
        background: open ? 'rgba(4,65,140,0.03)' : 'transparent',
        borderRadius: open ? '10px' : '0',
        marginBottom: open ? '2px' : '0',
        transition: 'background 200ms ease, border-radius 200ms ease',
      }}
    >
      {/* Entire row is clickable */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left py-3 px-4 md:py-3.5 md:px-4"
        aria-expanded={open}
        style={{
          cursor: 'pointer',
          background: 'none',
          border: 'none',
        }}
      >
        <span
          className="text-sm md:text-[15px] font-medium md:font-semibold"
          style={{
            color: open ? 'var(--primary)' : 'var(--color-text-title)',
            transition: 'color 200ms ease',
            lineHeight: 1.35,
          }}
        >
          {q}
        </span>

        {/* Chevron — rotates 90° when open */}
        <ChevronRight
          size={18}
          strokeWidth={2.2}
          style={{
            flexShrink: 0,
            color: open ? 'var(--primary)' : 'var(--color-text-label)',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 240ms cubic-bezier(0.16,1,0.3,1), color 200ms ease',
          }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="text-sm text-gray-600 px-4 pb-3 md:pb-3.5 pt-0"
              style={{
                lineHeight: 1.75,
                maxWidth: '680px',
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-8 md:py-16 section-surface-muted relative">
      <div className="max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="text-[#0F0F0F] font-medium leading-tight text-2xl md:text-[32px] md:leading-[1.1] text-center mx-auto">
            Preguntas <span style={{ color: 'var(--primary)' }}>frecuentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            background: '#fff',
            borderRadius: '16px',
            border: '1px solid rgba(229,231,235,0.95)',
            padding: '0.25rem 0.75rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              q={faq.q}
              a={faq.a}
              defaultOpen={i === 0} /* First question open by default */
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}