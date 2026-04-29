'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, TrendingUp, Users } from 'lucide-react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = Math.round(value).toLocaleString('es-MX') + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const dashboardMetrics = [
  { label: 'Llamadas este mes', value: 48291, suffix: '', icon: Phone },
  { label: 'Agentes activos', value: 47, suffix: '', icon: Users },
  { label: 'Satisfacción', value: 98, suffix: '%', icon: TrendingUp },
];

const floatingStats = [
  { label: 'Llamadas procesadas', value: '100K+', sub: 'este mes' },
  { label: 'Uptime garantizado', value: '99.99%', sub: 'SLA incluido' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 section-surface-white"
    >
      {/* Clean hero — no background gradients */}

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.15); opacity: 0.22; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 w-full py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="max-w-[520px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-label)' }}>
                <span className="inline-block w-[6px] h-[6px] rounded-full" style={{ background: 'var(--primary)', animation: 'blink 1.4s infinite' }} />
                <span style={{ color: 'var(--color-text-body)' }}>Tecnología de net2phone</span>
              </div>
            </motion.div>

            {/* H1 */}
              <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black text-[#0F0F0F] leading-tight mb-6 hero-title"
              style={{
                  maxWidth: '520px',
              }}
            >
              Deja de perder{' '}
              <span className="text-brand italic">clientes</span>{' '}
              por problemas de comunicación
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-copy mb-6 max-text-width"
              style={{ maxWidth: '480px', color: 'var(--color-text-body)' }}
            >
              Centraliza llamadas, equipos y atención al cliente en una sola plataforma.
              Sin hardware. Sin complicaciones.
            </motion.p>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-medium mb-8 flex items-center gap-2 flex-wrap"
              style={{ color: '#519cb5' }}
            >
              <span>+500 empresas en México</span>
              <span style={{ color: 'var(--color-text-label)' }}>·</span>
              <span>Implementación en 72 horas</span>
            </motion.p>

            {/* CTAs */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/agenda-reunion"
                className="btn-primary text-base font-semibold flex items-center gap-2"
              >
                Solicitar demo
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/523344863113"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-7 py-3.5 text-base font-medium flex items-center gap-2 rounded-lg"
              >
                <MessageCircle size={20} strokeWidth={1.5} color="#6b7280" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center self-center"
          >
            {/* Main dashboard card */}
            <div
              className="relative w-full max-w-md"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                boxShadow: 'none',
                padding: '28px',
              }}
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: '#5A6A85' }}>Panel de control</p>
                  <p className="text-[#0F0F0F] font-semibold text-base">Resumen en tiempo real</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#519cb5]" />
                  <span className="text-xs text-[#519cb5] font-medium">En vivo</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {dashboardMetrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className="card p-3"
                    >
                      <Icon size={20} strokeWidth={1.5} color="#6b7280" />
                      <p className="text-[#0F0F0F] font-bold text-base leading-none mb-1">
                        <CountUp target={m.value} suffix={m.suffix} />
                      </p>
                      <p className="text-xs leading-tight" style={{ color: '#9CA3AF' }}>{m.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mini chart bars */}
              <div
                className="card p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium" style={{ color: '#9CA3AF' }}>Llamadas últimas 7 horas</span>
                  <span className="text-xs text-[#519cb5] font-semibold">↑ 12%</span>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[35, 55, 45, 70, 60, 85, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.07, ease: 'easeOut' }}
                      className="flex-1 rounded-t-sm origin-bottom"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? '#519cb5' : 'rgba(81,156,181,0.25)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards removed for minimal hero */}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
    </section>
  );
}
