'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Bot, Zap, Code2, TrendingUp, CheckCircle } from 'lucide-react';
import TextType from './TextType';

/* ─── Mini CountUp ─────────────────────────────────────────────── */
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

/* ─── Dashboard tabs data ───────────────────────────────────────── */
type TabKey = 'llamadas' | 'ia' | 'automatizacion';

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: 'llamadas', label: 'Llamadas', icon: <Phone size={13} strokeWidth={2} /> },
  { key: 'ia', label: 'IA', icon: <Bot size={13} strokeWidth={2} /> },
  { key: 'automatizacion', label: 'Automatización', icon: <Zap size={13} strokeWidth={2} /> },
];

/* ─── Service pills ─────────────────────────────────────────────── */
const pills = [
  { label: 'VoIP Empresarial', icon: <Phone size={13} strokeWidth={2} /> },
  { label: 'Agentes de IA',   icon: <Bot  size={13} strokeWidth={2} /> },
  { label: 'Automatización',  icon: <Zap  size={13} strokeWidth={2} /> },
  { label: 'Software a medida', icon: <Code2 size={13} strokeWidth={2} /> },
];

/* ─── Dashboard Panel: Llamadas ─────────────────────────────────── */
function TabLlamadas() {
  return (
    <div>
      {/* Main metric + sparkline */}
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0,0,0,0.38)' }}>
          Llamadas este mes
        </p>
        <div className="flex items-baseline gap-3">
          <h3 className="text-4xl font-extrabold tracking-tight text-[#0F0F0F] leading-none">
            <CountUp target={48291} />
          </h3>
          <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            ↑ 12.4%
          </span>
        </div>

        {/* Sparkline */}
        <div className="w-full h-12 mt-3 relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 60">
            <defs>
              <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#04418c" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#04418c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,45 C 50,40 80,10 120,25 C 160,40 200,55 240,15 C 280,-15 320,30 360,5 C 380,-5 390,-2 400,2"
              fill="none" stroke="#04418c" strokeWidth="2.5" strokeLinecap="round"
            />
            <path
              d="M 0,45 C 50,40 80,10 120,25 C 160,40 200,55 240,15 C 280,-15 320,30 360,5 C 380,-5 390,-2 400,2 L 400,60 L 0,60 Z"
              fill="url(#spark-grad)"
            />
            <circle cx="400" cy="2" r="3.5" fill="#04418c" stroke="#fff" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Sub-metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0,0,0,0.4)' }}>Agentes activos</p>
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-[#0F0F0F]"><CountUp target={47} /></p>
            <div className="flex -space-x-1.5 ml-1">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#04418c', border: '1.5px solid #fff' }}>SG</span>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#00AAEC', border: '1.5px solid #fff' }}>ML</span>
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: '#00D1FF', border: '1.5px solid #fff' }}>DR</span>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0,0,0,0.4)' }}>Satisfacción</p>
          <p className="text-xl font-bold text-[#0F0F0F]"><CountUp target={98} suffix="%" /></p>
        </div>
      </div>

      {/* Active call widget */}
      <div className="p-4 rounded-2xl" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px -5px rgba(0,0,0,0.05)' }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #04418c 0%, #00AAEC 100%)' }}>
              AR
            </div>
            <div>
              <p className="text-xs font-bold text-[#0F0F0F] leading-none mb-0.5">Alejandro Ruiz</p>
              <p className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Llamada VoIP Activa
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">02:41</span>
        </div>
        {/* Audio wave */}
        <div className="flex items-center justify-center gap-0.5 h-7">
          {[2, 4, 7, 3, 5, 8, 4, 6, 9, 3, 5, 7, 4, 6, 8, 2, 4, 7, 3, 5].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [4, h * 2.8, 4] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06, ease: 'easeInOut' }}
              className="w-[2.5px] rounded-full"
              style={{ background: '#04418c', opacity: 0.85 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Panel: IA ───────────────────────────────────────── */
function TabIA() {
  return (
    <div>
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0,0,0,0.38)' }}>
          Mensajes atendidos por IA hoy
        </p>
        <div className="flex items-baseline gap-3">
          <h3 className="text-4xl font-extrabold tracking-tight text-[#0F0F0F] leading-none">
            <CountUp target={847} />
          </h3>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            ↑ 23.1%
          </span>
        </div>
      </div>

      {/* Conversation list */}
      <div className="space-y-2 mb-4">
        {[
          { initials: 'MG', name: 'María García', msg: '¿Cuánto cuesta el plan básico?', time: 'hace 2m', resolved: true },
          { initials: 'RL', name: 'Roberto López', msg: 'Necesito factura de enero', time: 'hace 8m', resolved: true },
          { initials: 'TH', name: 'Tienda Hermanos', msg: 'Problema con mi pedido #4421', time: 'hace 12m', resolved: false },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: 'linear-gradient(135deg, #04418c 0%, #00AAEC 100%)' }}>
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-[#0F0F0F] leading-none mb-0.5">{c.name}</p>
              <p className="text-[10px] text-gray-500 truncate">{c.msg}</p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[9px] text-gray-400">{c.time}</span>
              {c.resolved
                ? <CheckCircle size={12} className="text-emerald-500" />
                : <span className="w-2 h-2 rounded-full bg-amber-400" />
              }
            </div>
          </div>
        ))}
      </div>

      {/* Stats footer */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-2xl text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-xl font-bold text-[#0F0F0F]">94%</p>
          <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>Resueltas sin humano</p>
        </div>
        <div className="p-3 rounded-2xl text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-xl font-bold text-[#0F0F0F]">{"<"}1 min</p>
          <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>Tiempo de respuesta</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Panel: Automatización ──────────────────────────── */
function TabAutomatizacion() {
  const flows = [
    { name: 'Seguimiento de cotizaciones', runs: 312, status: 'activo' as const },
    { name: 'Recordatorio de pago', runs: 87, status: 'activo' as const },
    { name: 'Alta de cliente nuevo', runs: 54, status: 'activo' as const },
    { name: 'Reporte semanal a gerencia', runs: 4, status: 'activo' as const },
  ];

  return (
    <div>
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(0,0,0,0.38)' }}>
          Flujos activos
        </p>
        <div className="flex items-baseline gap-3">
          <h3 className="text-4xl font-extrabold tracking-tight text-[#0F0F0F] leading-none">
            23
          </h3>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            corriendo ahora
          </span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {flows.map((f, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-[#0F0F0F] truncate">{f.name}</p>
            </div>
            <span className="text-[10px] font-bold text-gray-400 shrink-0">{f.runs.toLocaleString('es-MX')} ejecuciones</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-2xl text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-xl font-bold text-[#0F0F0F]"><CountUp target={1248} /></p>
          <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>Tareas automáticas hoy</p>
        </div>
        <div className="p-3 rounded-2xl text-center" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
          <p className="text-xl font-bold text-[#0F0F0F]">38h</p>
          <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'rgba(0,0,0,0.4)' }}>Horas ahorradas / sem</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────── */
export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey>('llamadas');

  return (
    <section className="relative flex items-center overflow-hidden pt-16 section-surface-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 w-full py-10 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-[530px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(4, 65, 140, 0.07)',
                  color: '#04418c',
                  border: '1px solid rgba(4, 65, 140, 0.15)',
                }}
              >
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#04418c]" style={{ animation: 'blink 1.4s infinite' }} />
                Agencia de tecnología para PyMEs · México
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-[#0F0F0F] leading-tight mb-5 text-3xl md:text-[44px] md:leading-[1.04]"
              style={{ maxWidth: '520px' }}
            >
              Tu empresa, operando como si tuvieras{' '}
              <span className="text-brand italic">el doble de equipo</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="body-copy mb-6 text-sm md:text-[1.05rem] leading-normal md:leading-[1.65]"
              style={{ maxWidth: '460px', color: 'var(--color-text-body)' }}
            >
              Implementamos VoIP empresarial, agentes de IA, automatización y software a medida —
              todo diseñado para tu operación, no para una empresa genérica.
            </motion.p>

            {/* Service pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-2 mb-8 md:flex md:flex-wrap"
            >
              {pills.map((p) => (
                <motion.span
                  key={p.label}
                  whileHover={{ y: -2, background: 'rgba(4,65,140,0.05)', borderColor: 'rgba(4,65,140,0.2)' }}
                  className="flex items-center justify-center md:inline-flex gap-1.5 text-xs font-medium px-3 py-1 md:py-1.5 rounded-full cursor-default transition-colors duration-250"
                  style={{
                    background: 'rgba(0,0,0,0.04)',
                    color: '#374151',
                    border: '1px solid rgba(0,0,0,0.07)',
                  }}
                >
                  <span style={{ color: '#04418c' }}>{p.icon}</span>
                  {p.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-3 mb-3 w-full"
            >
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="w-full md:w-auto">
                <Link
                  href="/agenda-reunion"
                  className="btn-primary text-base font-semibold flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  Agendar diagnóstico gratis
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="w-full md:w-auto">
                <a
                  href="https://wa.me/523348663113"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-6 py-3 text-base font-medium flex items-center justify-center gap-2 rounded-lg w-full md:w-auto"
                >
                  <MessageCircle size={18} strokeWidth={1.5} color="#6b7280" />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Microcopy — friction reducer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-xs mb-5"
              style={{ color: 'var(--color-text-label)' }}
            >
              Sin compromiso · Solo 15 min · Esta semana hay lugar
            </motion.p>

            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-medium flex items-center gap-2 flex-wrap"
              style={{ color: 'var(--color-text-label)' }}
            >
              <TrendingUp size={14} style={{ color: '#04418c' }} />
              <span style={{ color: '#04418c' }}>+500 empresas en México</span>
              <span>·</span>
              <span>Implementación en 72 horas</span>
            </motion.p>
          </div>

          {/* ── Right: Dashboard mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center self-center"
          >
            <div
              className="relative w-full max-w-md overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.90)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '24px',
                boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02)',
                padding: '24px',
              }}
            >
              {/* Window controls */}
              <div className="flex items-center justify-between mb-5 pb-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F56' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27C93F' }} />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Activo</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-5 p-1 rounded-xl" style={{ background: 'rgba(0,0,0,0.04)' }}>
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className="flex-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold py-1.5 px-2 rounded-lg transition-all duration-200"
                    style={
                      activeTab === t.key
                        ? { background: '#fff', color: '#04418c', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }
                        : { background: 'transparent', color: 'rgba(0,0,0,0.45)' }
                    }
                  >
                    {t.icon}
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Tab content with animated transition */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {activeTab === 'llamadas' && <TabLlamadas />}
                {activeTab === 'ia' && <TabIA />}
                {activeTab === 'automatizacion' && <TabAutomatizacion />}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
