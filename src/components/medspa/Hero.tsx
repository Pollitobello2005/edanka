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
                href="https://wa.me/523348663113"
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
            {/* Main dashboard card (Apple UI/UX style) */}
            <div
              className="relative w-full max-w-md overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '24px',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)',
                padding: '24px',
              }}
            >
              {/* Window controls (Mac style) */}
              <div className="flex items-center justify-between mb-6 pb-2" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F56' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27C93F' }} />
                  <span className="text-[10px] font-semibold tracking-wider uppercase ml-3" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                    Console OS · Live
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Activo</span>
                </div>
              </div>

              {/* Main Call Metric & Sparkline */}
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                  Llamadas este mes
                </p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-4xl font-extrabold tracking-tight text-[#0D1526] leading-none">
                    <CountUp target={48291} />
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    ↑ 12.4%
                  </span>
                </div>

                {/* Smooth Elegant SVG Sparkline */}
                <div className="w-full h-12 mt-4 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 60">
                    <defs>
                      <linearGradient id="sparkline-grad-med" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1A3A8F" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#1A3A8F" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,45 C 50,40 80,10 120,25 C 160,40 200,55 240,15 C 280,-15 320,30 360,5 C 380,-5 390,-2 400,2"
                      fill="none"
                      stroke="#1A3A8F"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 0,45 C 50,40 80,10 120,25 C 160,40 200,55 240,15 C 280,-15 320,30 360,5 C 380,-5 390,-2 400,2 L 400,60 L 0,60 Z"
                      fill="url(#sparkline-grad-med)"
                    />
                    <circle cx="400" cy="2" r="3.5" fill="#1A3A8F" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl" style={{ background: 'rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.04)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                    Citas agendadas
                  </p>
                  <p className="text-xl font-bold text-[#0D1526]"><CountUp target={1240} /></p>
                </div>

                <div className="p-4 rounded-2xl" style={{ background: 'rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.04)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(0, 0, 0, 0.4)' }}>
                    Pacientes nuevos
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-[#0D1526]"><CountUp target={312} /></p>
                    <div className="flex -space-x-1.5 ml-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#1A3A8F', border: '1.5px solid #FFFFFF' }}>MC</span>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#00AAEC', border: '1.5px solid #FFFFFF' }}>PT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Call Widget (Super realistic iPhone / Meta aesthetic) */}
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #00AAEC 100%)' }}>
                      DR
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0D1526] leading-none mb-0.5">Daniela Ríos</p>
                      <p className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Llamada VoIP Activa
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    01:15
                  </span>
                </div>

                {/* Clean audio wave animation */}
                <div className="flex items-center justify-center gap-0.5 h-7">
                  {[3, 5, 8, 4, 6, 9, 3, 5, 7, 4, 6, 8, 2, 4, 7, 3, 5, 8, 4, 6].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [4, h * 2.8, 4],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.06,
                        ease: 'easeInOut',
                      }}
                      className="w-[2.5px] rounded-full"
                      style={{
                        background: '#1A3A8F',
                        opacity: 0.85,
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
