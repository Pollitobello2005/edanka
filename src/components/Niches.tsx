'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Stethoscope, Building2, Truck, TrendingUp, Target, DollarSign, Users } from 'lucide-react';

const nichos = [
  {
    rank: 1,
    nombre: 'Clínicas Estéticas',
    icon: Stethoscope,
    descripcion: 'Cada llamada perdida es una cita sin ingresar. El volumen de agenda diaria convierte cada falla de comunicación en pérdida directa.',
    tags: ['Velocidad de cierre: Muy Alta', 'Conversión: Muy Alta'],
    impacto: 'Crítico',
    prospeccion: 'Muy Alta',
    dolor: 'Pérdida de ingresos directa por citas no atendidas',
    color: '#04418c',
    colorBg: 'rgba(4,65,140,0.05)',
    colorBorder: 'rgba(4,65,140,0.14)',
    badgeBg: 'rgba(4,65,140,0.08)',
    highlight: true,
  },
  {
    rank: 2,
    nombre: 'Inmobiliarias',
    icon: Building2,
    descripcion: 'Un lead de bienes raíces vale miles de pesos. No contestar a tiempo equivale a perder una comisión completa.',
    tags: ['Velocidad de cierre: Alta', 'Conversión: Alta'],
    impacto: 'Alto',
    prospeccion: 'Alta',
    dolor: 'Pérdida de patrimonio de leads de alto valor',
    color: '#04418c',
    colorBg: 'rgba(4,65,140,0.03)',
    colorBorder: 'rgba(4,65,140,0.09)',
    badgeBg: 'rgba(4,65,140,0.05)',
    highlight: false,
  },
  {
    rank: 3,
    nombre: 'Logística',
    icon: Truck,
    descripcion: 'Las fallas de comunicación disparan costos operativos: retardos, rutas erróneas y clientes sin actualización en tiempo real.',
    tags: ['Velocidad de cierre: Media', 'Conversión: Media-Alta'],
    impacto: 'Alto',
    prospeccion: 'Media',
    dolor: 'Costos operativos por fallos de coordinación',
    color: '#04418c',
    colorBg: 'rgba(4,65,140,0.03)',
    colorBorder: 'rgba(4,65,140,0.09)',
    badgeBg: 'rgba(4,65,140,0.05)',
    highlight: false,
  },
];

const metricasCols = [
  { key: 'velocidad', label: 'Velocidad de Cierre', icon: TrendingUp },
  { key: 'conversion', label: 'Conversión', icon: Target },
  { key: 'impacto', label: 'Impacto Financiero', icon: DollarSign },
  { key: 'prospeccion', label: 'Facilidad de Prospección', icon: Users },
];

const metricsData: Record<string, Record<string, { value: string; level: number }>> = {
  'Clínicas Estéticas': {
    velocidad: { value: 'Muy Alta', level: 5 },
    conversion: { value: 'Muy Alta', level: 5 },
    impacto: { value: 'Crítico', level: 5 },
    prospeccion: { value: 'Muy Alta', level: 5 },
  },
  'Inmobiliarias': {
    velocidad: { value: 'Alta', level: 4 },
    conversion: { value: 'Alta', level: 4 },
    impacto: { value: 'Alto', level: 4 },
    prospeccion: { value: 'Alta', level: 4 },
  },
  'Logística': {
    velocidad: { value: 'Media', level: 3 },
    conversion: { value: 'Media-Alta', level: 3.5 },
    impacto: { value: 'Alto', level: 4 },
    prospeccion: { value: 'Media', level: 3 },
  },
};

function LevelDots({ level }: { level: number }) {
  const total = 5;
  const filled = Math.round(level);
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: i < filled ? '#04418c' : 'rgba(4,65,140,0.15)',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function Niches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="nichos"
      className="section-shell"
      style={{ background: '#FAFBFC' }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-rule mx-auto mb-5" />
          <h2 className="font-medium text-[#0F0F0F] leading-tight section-title">
            Casos de éxito{' '}
            <span style={{ color: 'var(--primary)' }}>por industria</span>
          </h2>
          <p className="mt-4 body-copy max-w-xl mx-auto" style={{ color: '#6B7280' }}>
            Los tres nichos donde VOXAI genera el mayor impacto, más rápido y con mayor retorno.
          </p>
        </motion.div>

        {/* Nicho cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {nichos.map((nicho, i) => {
            const Icon = nicho.icon;
            const metrics = metricsData[nicho.nombre];
            return (
              <motion.div
                key={nicho.nombre}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: nicho.highlight ? '#04418c' : '#ffffff',
                  border: `1px solid ${nicho.highlight ? 'transparent' : nicho.colorBorder}`,
                  borderRadius: '16px',
                  padding: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Rank badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: nicho.highlight ? 'rgba(255,255,255,0.15)' : nicho.badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: nicho.highlight ? '#ffffff' : '#04418c',
                }}>
                  #{nicho.rank}
                </div>

                {/* Icon */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: nicho.highlight ? 'rgba(255,255,255,0.15)' : nicho.badgeBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}>
                  <Icon size={22} strokeWidth={1.8} color={nicho.highlight ? '#ffffff' : '#04418c'} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: nicho.highlight ? '#ffffff' : '#0F0F0F',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}>
                  {nicho.nombre}
                </h3>

                {/* Pain description */}
                <p style={{
                  fontSize: '13.5px',
                  lineHeight: 1.65,
                  color: nicho.highlight ? 'rgba(255,255,255,0.78)' : '#6B7280',
                  marginBottom: '20px',
                }}>
                  {nicho.descripcion}
                </p>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {metricasCols.map((col) => {
                    const MetIcon = col.icon;
                    const m = metrics[col.key];
                    return (
                      <div key={col.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MetIcon size={12} strokeWidth={2} color={nicho.highlight ? 'rgba(255,255,255,0.6)' : '#9CA3AF'} />
                          <span style={{ fontSize: '12px', color: nicho.highlight ? 'rgba(255,255,255,0.65)' : '#9CA3AF', whiteSpace: 'nowrap' }}>
                            {col.label}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ display: 'flex', gap: '3px' }}>
                            {Array.from({ length: 5 }).map((_, di) => (
                              <span
                                key={di}
                                style={{
                                  width: '6px',
                                  height: '6px',
                                  borderRadius: '50%',
                                  background: di < Math.round(m.level)
                                    ? (nicho.highlight ? '#ffffff' : '#04418c')
                                    : (nicho.highlight ? 'rgba(255,255,255,0.2)' : 'rgba(4,65,140,0.15)'),
                                  flexShrink: 0,
                                }}
                              />
                            ))}
                          </div>
                          <span style={{
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: nicho.highlight ? '#ffffff' : '#04418c',
                            minWidth: '68px',
                            textAlign: 'right',
                          }}>
                            {m.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Dolor tag */}
                <div style={{
                  marginTop: '20px',
                  paddingTop: '16px',
                  borderTop: nicho.highlight ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(4,65,140,0.10)',
                }}>
                  <p style={{
                    fontSize: '11.5px',
                    color: nicho.highlight ? 'rgba(255,255,255,0.55)' : '#9CA3AF',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    Dolor principal
                  </p>
                  <p style={{
                    fontSize: '12.5px',
                    color: nicho.highlight ? 'rgba(255,255,255,0.9)' : '#374151',
                    fontWeight: 500,
                    lineHeight: 1.45,
                  }}>
                    {nicho.dolor}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href="/agenda-reunion"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
          >
            ¿Tu negocio está en estos nichos? Hablemos →
          </a>
          <p style={{ marginTop: '12px', fontSize: '13px', color: '#9CA3AF' }}>
            Sin compromiso · Implementación en 72 hrs
          </p>
        </motion.div>

      </div>
    </section>
  );
}
