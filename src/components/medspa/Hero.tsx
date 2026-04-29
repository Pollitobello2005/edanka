'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Calendar, Users } from 'lucide-react';

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
  { label: 'Llamadas este mes', value: 48291, suffix: '', icon: Phone, color: '#1A3A8F' },
  { label: 'Citas agendadas', value: 1240, suffix: '', icon: Calendar, color: '#00AAEC' },
  { label: 'Pacientes nuevos', value: 312, suffix: '', icon: Users, color: '#00AAEC' },
];

const floatingStats = [
  { label: 'Llamadas perdidas', value: '0', sub: 'registradas hoy' },
  { label: 'Uptime garantizado', value: '99.99%', sub: 'SLA incluido' },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="gradient-orb"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #1A3A8F 0%, transparent 70%)',
          top: '-100px',
          left: '-150px',
          opacity: 0.18,
          animation: 'pulse-slow 8s ease-in-out infinite',
        }}
      />
      <div
        className="gradient-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #00AAEC 0%, transparent 70%)',
          bottom: '-100px',
          right: '-100px',
          opacity: 0.12,
          animation: 'pulse-slow 10s ease-in-out infinite 2s',
        }}
      />

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

      <div className="max-w-7xl mx-auto px-6 w-full py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="badge-glow">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: 'linear-gradient(135deg,#1A3A8F,#00AAEC)' }}
                />
                Solución para Clínicas y MedSpas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black text-[#0D1526] leading-tight mb-6"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              ¿Cuántas <span className="gradient-text">citas pierdes</span> al día por no contestar el teléfono?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#5A6A85', maxWidth: '520px' }}
            >
              Centraliza todas las llamadas de tu clínica en una sola plataforma.
              Tu equipo atiende desde cualquier dispositivo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-medium mb-8 flex items-center gap-2 flex-wrap"
              style={{ color: '#1A3A8F' }}
            >
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                <span>Partners de</span>
                <Image src="/logos/net2phone.svg" alt="net2phone" width={100} height={28} className="h-7 w-auto" />
              </span>
              <span style={{ color: 'rgba(13,21,38,0.2)' }}>|</span>
              <span>Implementación en 72 hrs</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/agenda-reunion"
                className="btn-primary px-7 py-3.5 text-base font-semibold flex items-center gap-2 rounded-lg"
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
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div
              className="relative rounded-2xl p-6 w-full max-w-md"
              style={{
                background: 'rgba(13,21,38,0.04)',
                border: '1px solid rgba(13,21,38,0.1)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(13,21,38,0.05)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: '#5A6A85' }}>Panel de clínica</p>
                  <p className="text-[#0D1526] font-semibold text-base">Resumen en tiempo real</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #00AAEC' }} />
                  <span className="text-xs text-[#00AAEC] font-medium">En vivo</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {dashboardMetrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className="rounded-xl p-3"
                      style={{ background: 'rgba(13,21,38,0.04)', border: '1px solid rgba(13,21,38,0.06)' }}
                    >
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                        style={{ background: `${m.color}22` }}
                      >
                        <Icon size={14} style={{ color: m.color }} />
                      </div>
                      <p className="text-[#0D1526] font-bold text-base leading-none mb-1">
                        <CountUp target={m.value} suffix={m.suffix} />
                      </p>
                      <p className="text-xs leading-tight" style={{ color: '#5A6A85' }}>{m.label}</p>
                    </div>
                  );
                })}
              </div>

              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(13,21,38,0.03)', border: '1px solid rgba(13,21,38,0.05)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium" style={{ color: '#5A6A85' }}>Citas agendadas (últimas 7h)</span>
                  <span className="text-xs text-[#00AAEC] font-semibold">↑ 18%</span>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[20, 35, 45, 80, 50, 90, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.07, ease: 'easeOut' }}
                      className="flex-1 rounded-t-sm origin-bottom"
                      style={{
                        height: `${h}%`,
                        background: i === 5
                          ? 'linear-gradient(180deg, #1A3A8F, #00AAEC)'
                          : 'rgba(26,58,143,0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                className="absolute rounded-xl px-4 py-3"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(26,58,143,0.3)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(26,58,143,0.1)',
                  bottom: i === 0 ? '-24px' : undefined,
                  top: i === 1 ? '-20px' : undefined,
                  left: i === 0 ? '-36px' : undefined,
                  right: i === 1 ? '-36px' : undefined,
                  animation: `float-delayed ${6 + i * 2}s ease-in-out infinite ${i}s`,
                  zIndex: 10,
                }}
              >
                <p className="font-black text-xl leading-none mb-0.5 gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-[#0D1526]">{stat.label}</p>
                <p className="text-xs" style={{ color: '#5A6A85' }}>{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FFFFFF)' }}
      />
    </section>
  );
}
