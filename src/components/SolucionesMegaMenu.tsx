'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Users, Bot, Layers, MessageSquare, Video, Mail, BarChart3, Calendar, ChevronDown } from 'lucide-react';

const solutions = [
  {
    id: 'ucaas',
    label: 'UCaaS',
    tagline: 'Unified Communications as a Service',
    description: 'Una plataforma para centralizar toda tu comunicación empresarial.',
    icon: Layers,
    color: '#04418c',
    colorLight: 'rgba(4,65,140,0.06)',
    features: [
      { icon: Phone, text: 'Telefonía VoIP & PBX en la nube' },
      { icon: Video, text: 'Videollamadas empresariales' },
      { icon: MessageSquare, text: 'Mensajería empresarial' },
      { icon: Layers, text: 'Integración con Microsoft Teams y CRMs' },
    ],
  },
  {
    id: 'contact-center',
    label: 'Contact Center',
    tagline: 'uContact · Omnicanal',
    description: 'Atención al cliente omnicanal pensada para call centers y soporte.',
    icon: Users,
    color: '#04418c',
    colorLight: 'rgba(4,65,140,0.06)',
    features: [
      { icon: Phone, text: 'Llamadas, WhatsApp, Chat & Email' },
      { icon: BarChart3, text: 'Monitoreo y analíticas en tiempo real' },
      { icon: Users, text: 'Gestión de agentes' },
      { icon: Layers, text: 'Automatización de flujos' },
    ],
  },
  {
    id: 'ai-agents',
    label: 'Agentes de IA',
    tagline: 'IA conversacional para llamadas',
    description: 'Agentes que contestan llamadas, dan información y agendan citas automáticamente.',
    icon: Bot,
    color: '#04418c',
    colorLight: 'rgba(4,65,140,0.06)',
    features: [
      { icon: Phone, text: 'Atención 24/7 por llamada' },
      { icon: Bot, text: 'Respuestas inteligentes con IA' },
      { icon: Calendar, text: 'Agendamiento automático de citas' },
      { icon: Mail, text: 'Captura y calificación de leads' },
    ],
  },
];

export default function SolucionesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#solucion');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <li
      className="gooey-nav-item relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ listStyle: 'none' }}
    >
      {/* Nav trigger */}
      <a
        href="#solucion"
        onClick={handleClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '0.7rem 1rem',
          borderRadius: '999px',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1,
          color: open ? '#ffffff' : '#6b7280',
          transition: 'color 180ms ease',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Productos
        <ChevronDown
          size={13}
          strokeWidth={2}
          style={{
            transition: 'transform 220ms ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </a>

      {/* Active pill background */}
      {open && (
        <span
          style={{
            content: '',
            position: 'absolute',
            inset: 0,
            borderRadius: '999px',
            background: 'var(--primary)',
            opacity: 1,
            transform: 'scale(1)',
            zIndex: 0,
          }}
        />
      )}

      {/* Mega menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '720px',
              background: '#ffffff',
              border: '1px solid rgba(4,65,140,0.10)',
              borderRadius: '16px',
              boxShadow: '0 24px 60px rgba(4,65,140,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              padding: '20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              zIndex: 100,
            }}
          >
            {/* Arrow */}
            <div style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)',
              width: '12px',
              height: '12px',
              background: '#ffffff',
              border: '1px solid rgba(4,65,140,0.10)',
              borderRight: 'none',
              borderBottom: 'none',
            }} />

            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              const isHovered = hoveredSolution === idx;
              
              let productPath = '/products/ucaas';
              if (sol.id === 'contact-center') productPath = '/products/ucontact';
              if (sol.id === 'ai-agents') productPath = '/products/agentes-ia';

              return (
                <Link
                  key={sol.id}
                  href={productPath}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHoveredSolution(idx)}
                  style={{
                    display: 'block',
                    padding: '16px',
                    borderRadius: '12px',
                    background: isHovered ? sol.colorLight : 'transparent',
                    border: `1px solid ${isHovered ? 'rgba(4,65,140,0.14)' : 'transparent'}`,
                    transition: 'background 160ms ease, border-color 160ms ease',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: isHovered ? 'rgba(4,65,140,0.12)' : 'rgba(4,65,140,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    transition: 'background 160ms ease',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} strokeWidth={1.8} color="#04418c" />
                  </div>

                  {/* Title & tagline */}
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#0F0F0F', lineHeight: 1.2, marginBottom: '2px' }}>
                    {sol.label}
                  </p>
                  <p style={{ fontSize: '11px', color: '#04418c', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.01em' }}>
                    {sol.tagline}
                  </p>
                  <p style={{ fontSize: '12.5px', color: '#6B7280', lineHeight: 1.55, marginBottom: '12px' }}>
                    {sol.description}
                  </p>

                  {/* Feature bullets */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', listStyle: 'none', padding: 0, margin: 0 }}>
                    {sol.features.map((feat) => {
                      const FIcon = feat.icon;
                      return (
                        <li key={feat.text} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                          <FIcon size={12} strokeWidth={2} color="#04418c" style={{ flexShrink: 0 }} />
                          <span style={{ fontSize: '12px', color: '#374151' }}>{feat.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </Link>
              );
            })}

            {/* Footer CTA */}
            <div style={{
              gridColumn: '1 / -1',
              marginTop: '4px',
              paddingTop: '14px',
              borderTop: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <p style={{ fontSize: '12.5px', color: '#9CA3AF' }}>
                ¿No sabes cuál se adapta mejor a tu negocio?
              </p>
              <a
                href="/agenda-reunion"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  color: '#04418c',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: '1px solid rgba(4,65,140,0.2)',
                  transition: 'background 160ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(4,65,140,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Solicitar demo →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
