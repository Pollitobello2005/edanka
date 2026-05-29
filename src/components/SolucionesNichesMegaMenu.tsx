'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Stethoscope, Building2, Truck, ArrowRight, Code2, Zap } from 'lucide-react';
import Link from 'next/link';

const nichos = [
  {
    id: 'clinicas-esteticas',
    label: 'Clínicas Estéticas',
    icon: Stethoscope,
    href: '/soluciones/clinicas-esteticas',
    sub: 'Agenda automática & atención 24/7',
    section: 'industria',
  },
  {
    id: 'inmobiliarias',
    label: 'Inmobiliarias',
    icon: Building2,
    href: '/soluciones/inmobiliarias',
    sub: 'No pierdas ni un solo lead',
    section: 'industria',
  },
  {
    id: 'logistica',
    label: 'Logística',
    icon: Truck,
    href: '/soluciones/logistica',
    sub: 'Coordinación en tiempo real',
    section: 'industria',
  },
  {
    id: 'desarrollo-medida',
    label: 'Desarrollo a medida',
    icon: Code2,
    href: '/soluciones/desarrollo-medida',
    sub: 'Integraciones y software personalizado',
    section: 'servicios',
  },
  {
    id: 'automatizaciones',
    label: 'Automatizaciones',
    icon: Zap,
    href: '/soluciones/automatizaciones',
    sub: 'Flujos y procesos sin intervención manual',
    section: 'servicios',
  },
];

export default function SolucionesNichesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className="gooey-nav-item"
      style={{ listStyle: 'none', position: 'relative' }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {/* Trigger */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
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
        Soluciones
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
            position: 'absolute',
            inset: 0,
            borderRadius: '999px',
            background: 'var(--primary)',
            zIndex: 0,
          }}
        />
      )}

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            onMouseEnter={show}
            onMouseLeave={hide}
            style={{
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '320px',
              background: '#ffffff',
              border: '1px solid rgba(4,65,140,0.10)',
              borderRadius: '16px',
              boxShadow: '0 24px 60px rgba(4,65,140,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              padding: '10px',
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

            {/* Header — industria */}
            <p style={{
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '8px 10px 6px',
            }}>
              Por industria
            </p>

            {/* Niche rows — industria */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {nichos.filter(n => n.section === 'industria').map((nicho) => {
                const Icon = nicho.icon;
                const isHov = hovered === nicho.id;
                return (
                  <Link
                    key={nicho.id}
                    href={nicho.href}
                    onMouseEnter={() => setHovered(nicho.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: isHov ? 'rgba(4,65,140,0.06)' : 'transparent',
                      transition: 'background 140ms ease',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: isHov ? 'rgba(4,65,140,0.12)' : 'rgba(4,65,140,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'background 140ms ease',
                    }}>
                      <Icon size={18} strokeWidth={1.8} color="#04418c" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '13.5px', fontWeight: 600, color: isHov ? '#04418c' : '#0F0F0F', lineHeight: 1.2, transition: 'color 140ms ease' }}>
                        {nicho.label}
                      </p>
                      <p style={{ fontSize: '11.5px', color: '#9CA3AF', marginTop: '2px', lineHeight: 1.3 }}>
                        {nicho.sub}
                      </p>
                    </div>
                    <ArrowRight size={14} strokeWidth={2} color={isHov ? '#04418c' : '#D1D5DB'} style={{ flexShrink: 0, transition: 'color 140ms ease' }} />
                  </Link>
                );
              })}
            </div>

            {/* Divider + Servicios section */}
            <div style={{ margin: '10px 0 4px', borderTop: '1px solid #F3F4F6' }} />
            <p style={{
              fontSize: '10.5px',
              fontWeight: 700,
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '6px 10px 4px',
            }}>
              Servicios
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {nichos.filter(n => n.section === 'servicios').map((nicho) => {
                const Icon = nicho.icon;
                const isHov = hovered === nicho.id;
                return (
                  <Link
                    key={nicho.id}
                    href={nicho.href}
                    onMouseEnter={() => setHovered(nicho.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      background: isHov ? 'rgba(4,65,140,0.06)' : 'transparent',
                      transition: 'background 140ms ease',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '10px',
                      background: isHov ? 'rgba(4,65,140,0.12)' : 'rgba(4,65,140,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'background 140ms ease',
                    }}>
                      <Icon size={18} strokeWidth={1.8} color="#04418c" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '13.5px', fontWeight: 600, color: isHov ? '#04418c' : '#0F0F0F', lineHeight: 1.2, transition: 'color 140ms ease' }}>
                        {nicho.label}
                      </p>
                      <p style={{ fontSize: '11.5px', color: '#9CA3AF', marginTop: '2px', lineHeight: 1.3 }}>
                        {nicho.sub}
                      </p>
                    </div>
                    <ArrowRight size={14} strokeWidth={2} color={isHov ? '#04418c' : '#D1D5DB'} style={{ flexShrink: 0, transition: 'color 140ms ease' }} />
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div style={{ marginTop: '8px', padding: '10px 12px 4px', borderTop: '1px solid #F3F4F6' }}>
              <Link
                href="/agenda-reunion"
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: '12.5px', color: '#04418c', fontWeight: 600, textDecoration: 'none',
                }}
              >
                <span>¿Tu necesidad no está aquí? Hablemos</span>
                <ArrowRight size={13} strokeWidth={2} color="#04418c" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
