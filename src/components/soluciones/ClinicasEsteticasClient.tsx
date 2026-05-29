'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Stethoscope,
  Phone,
  Calendar,
  BarChart3,
  Bot,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  AlertCircle,
  Shield,
  UserCheck,
  TrendingUp,
} from 'lucide-react';

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Disable on touch/mobile for performance
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf: number;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    const COUNT = 45;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    let mouse = { x: -9999, y: -9999 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = { x: -9999, y: -9999 }; };
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < COUNT; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140) { p.x -= dx * 0.01; p.y -= dy * 0.01; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(4,65,140,0.18)';
        ctx.fill();

        for (let j = i + 1; j < COUNT; j++) {
          const q = particles[j];
          const dx2 = p.x - q.x, dy2 = p.y - q.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(4,65,140,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

// ─── Interactive Phone Mockup ─────────────────────────────────────────────────
function InteractivePhone() {
  const [phase, setPhase] = useState<'incoming' | 'vibrating' | 'answered' | 'confirmed'>('incoming');
  const [screenFlash, setScreenFlash] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Spring entrance
    const t0 = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t0);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      // incoming → flash → vibrate → answered → confirmed → reset
      await delay(1200);
      setScreenFlash(true);
      await delay(300);
      setScreenFlash(false);
      setPhase('vibrating');
      await delay(800);
      setPhase('answered');
      await delay(1800);
      setPhase('confirmed');
      await delay(2200);
      setPhase('incoming');
    };

    const run = () => sequence();
    run();
    const interval = setInterval(run, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ filter: 'drop-shadow(0 30px 60px rgba(4,65,140,0.20))' }}
    >
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 -z-10 blur-3xl rounded-full scale-110"
        style={{ background: 'radial-gradient(ellipse, rgba(27,79,216,0.20) 0%, transparent 70%)' }}
      />

      <div
        className={`relative w-[260px] h-[520px] rounded-[44px] bg-[#0A0F1E] border-[8px] border-[#1A2035] overflow-hidden flex flex-col ${phase === 'vibrating' ? 'animate-phone-vibrate' : ''}`}
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset' }}
      >
        {/* Screen flash overlay */}
        <div
          className="absolute inset-0 z-50 bg-white pointer-events-none transition-opacity duration-200"
          style={{ opacity: screenFlash ? 0.12 : 0 }}
        />

        {/* Notch */}
        <div className="absolute top-0 inset-x-0 flex justify-center z-20 pt-1">
          <div className="w-24 h-5 bg-[#0A0F1E] rounded-b-2xl flex items-center justify-center gap-1.5">
            <div className="w-8 h-1 bg-[#1A2035] rounded-full" />
            <div className="w-2 h-2 rounded-full bg-[#1A2035]" />
          </div>
        </div>

        {/* Screen */}
        <div className="flex-1 pt-10 px-5 pb-6 flex flex-col relative">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:18px_18px] opacity-20 z-0" />

          {/* Status bar */}
          <div className="flex justify-between items-center text-[9px] text-slate-500 relative z-10 mb-4">
            <span>9:41</span>
            <span>▐▐▐▊</span>
          </div>

          {/* Content area */}
          <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">

            {(phase === 'incoming' || phase === 'vibrating') && (
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border border-slate-700"
                  style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0a1526 100%)' }}
                >
                  <Phone size={22} className="text-slate-300" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#00AAEC] mb-1">Llamada entrante</p>
                  <p className="text-lg font-bold text-white leading-tight">Clínica Glow MX</p>
                  <p className="text-[10px] text-slate-400 mt-1">Tratamiento: Hilos Tensores</p>
                </div>

                {/* Ripple rings */}
                <div className="relative flex items-center justify-center mt-1">
                  <div className="absolute w-14 h-14 rounded-full border border-[#04418c]/30 animate-ring-1" />
                  <div className="absolute w-20 h-20 rounded-full border border-[#04418c]/15 animate-ring-2" />
                  <div className="absolute w-28 h-28 rounded-full border border-[#04418c]/08 animate-ring-3" />
                </div>
              </div>
            )}

            {phase === 'answered' && (
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#04418c] flex items-center justify-center">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#00AAEC] mb-1">Agente IA activo</p>
                  <p className="text-sm font-bold text-white">"Buscando disponibilidad..."</p>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 bg-[#00AAEC] rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {phase === 'confirmed' && (
              <div className="flex flex-col items-center gap-3">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', boxShadow: '0 0 24px rgba(34,197,94,0.2)' }}
                >
                  <CheckCircle2 size={28} className="text-[#22C55E]" />
                </div>
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#22C55E] mb-1">Completado</p>
                  <p className="text-lg font-black text-white">Cita confirmada ✓</p>
                  <p className="text-[10px] text-slate-400 mt-1 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    Sincronizado con CRM
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-around relative z-10 pt-4 border-t border-[#1A2035]">
            <div className="flex flex-col items-center gap-1">
              <div
                className="w-11 h-11 rounded-full bg-red-500/90 flex items-center justify-center shadow-lg"
                style={{ boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}
              >
                <Phone size={16} className="text-white" style={{ transform: 'rotate(135deg)' }} />
              </div>
              <span className="text-[8px] text-slate-500">Rechazar</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${phase === 'confirmed' ? 'bg-[#22C55E]' : 'bg-[#22C55E] animate-pulse-btn'}`}
                style={{ boxShadow: '0 4px 12px rgba(34,197,94,0.35)' }}
              >
                <Phone size={16} className="text-white" />
              </div>
              <span className="text-[8px] text-slate-500">
                {phase === 'confirmed' ? 'En llamada' : 'Contestar'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────
function ScrollProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setPct((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[9999] transition-all duration-75"
      style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #04418c, #00AAEC)' }}
    />
  );
}

// ─── Custom Cursor ────────────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const tick = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.12;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${trail.current.x}px`;
        ringRef.current.style.top = `${trail.current.y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!visible) return null;
  return (
    <>
      <div ref={dotRef} className="fixed w-1.5 h-1.5 bg-[#04418c] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={ringRef} className="fixed w-8 h-8 border border-[#04418c]/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}

// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<Element | null>, opts?: { once?: boolean; rootMargin?: string }) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (opts?.once) observer.unobserve(el);
        }
      },
      { rootMargin: opts?.rootMargin ?? '-60px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, opts?.once, opts?.rootMargin]);
  return inView;
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = '', delay: d = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    let start: number | null = null;
    const duration = 2000;

    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = p * (2 - p);
      setCount(Math.floor(ease * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    const t = setTimeout(() => { raf = requestAnimationFrame(step); }, d);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [inView, target, d]);

  return (
    <div ref={ref} className="font-black text-5xl md:text-6xl tracking-tight text-white">
      {count}{suffix}
    </div>
  );
}

// ─── Typewriter Headline ──────────────────────────────────────────────────────
function StaggeredHeadline() {
  const firstLine = 'Transforma cada llamada en una cita.';
  const secondLine = 'Comunicación Unificada para Clínicas de Estética.';
  const words = firstLine.split(' ');
  const [typed, setTyped] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let active = true;
    const startDelay = words.length * 80 + 400;

    const t0 = setTimeout(() => {
      let idx = 0;
      let currentText = '';
      
      const typeNextChar = () => {
        if (!active) return;
        if (idx < secondLine.length) {
          currentText += secondLine[idx];
          setTyped(currentText);
          idx++;
          setTimeout(typeNextChar, 40);
        } else {
          setTimeout(() => {
            if (active) setCursor(false);
          }, 1600);
        }
      };

      typeNextChar();
    }, startDelay);

    return () => {
      active = false;
      clearTimeout(t0);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1
      className="font-black text-white leading-[1.2] mb-8 tracking-tight flex flex-col gap-2 md:gap-3"
      style={{ fontSize: 'clamp(1.9rem, 4.8vw, 3.6rem)', letterSpacing: '-0.03em' }}
    >
      <div className="block font-normal text-white/75">
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block opacity-0 translate-y-4 animate-word-in mr-2 md:mr-3"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {w}
          </span>
        ))}
      </div>
      <div className="text-white font-bold block min-h-[1.2em] mt-1 md:mt-2">
        {typed}
        {cursor && (
          <span className="inline-block w-[3px] h-[0.85em] bg-white ml-[2px] align-middle animate-blink" />
        )}
      </div>
    </h1>
  );
}

// ─── Ripple hook ──────────────────────────────────────────────────────────────
function useRipple() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const d = Math.max(btn.clientWidth, btn.clientHeight);
    const r = d / 2;
    const rect = btn.getBoundingClientRect();
    circle.style.cssText = `
      position:absolute;width:${d}px;height:${d}px;
      left:${e.clientX - rect.left - r}px;top:${e.clientY - rect.top - r}px;
      background:rgba(255,255,255,0.28);border-radius:50%;
      transform:scale(0);animation:ripple-anim 0.55s linear;pointer-events:none;
    `;
    const old = btn.querySelector('.rpl');
    if (old) old.remove();
    circle.classList.add('rpl');
    btn.appendChild(circle);
  }, []);
}

// ─── SVG Draw Check ───────────────────────────────────────────────────────────
function SVGCheck({ delay: d }: { delay: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, rootMargin: '-10px' });
  return (
    <svg ref={ref} className="w-5 h-5 flex-shrink-0 text-[#04418c]" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" style={{
        strokeDasharray: 30,
        strokeDashoffset: inView ? 0 : 30,
        transition: `stroke-dashoffset 0.55s ease-out ${d}ms`
      }} />
    </svg>
  );
}

// ─── Features Section (Bento Grid) ───────────────────────────────────────────
function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, rootMargin: '-60px' });

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-3 text-[#1F6FEB]">TECNOLOGÍA ENTERPRISE</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1526] tracking-tight mb-4">Todo lo que necesita tu clínica</h2>
          <p className="text-sm text-[#5A6A85] max-w-md mx-auto leading-relaxed">
            Una plataforma diseñada para el volumen, la urgencia y la atención personalizada que exige el sector estético.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: Nunca pierdas una llamada (2/3 width) */}
          <div
            className={`rounded-[12px] border border-[#1A1F2E] p-7 md:p-8 flex flex-col justify-between transition-colors duration-[150ms] ease-out hover:border-[#1F6FEB] group bg-[#0D1117] md:col-span-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div>
              <div className="w-10 h-10 rounded-[12px] bg-[#111622] border border-[#1a1f2e] flex items-center justify-center mb-5 group-hover:border-[#1F6FEB] transition-colors duration-[150ms] text-[#1F6FEB]">
                <Phone size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2.5 tracking-tight">Nunca pierdas una llamada</h3>
              <p className="text-[13px] leading-relaxed text-slate-400">
                Enrutamiento inteligente y desbordamiento automático. Si una línea está ocupada, el siguiente agente recibe la llamada al instante.
              </p>
            </div>
            
            {/* Mini visual flow routing */}
            <div className="mt-5 p-4 rounded-[12px] border border-white/[0.04] bg-[#05080F] flex flex-col sm:flex-row items-center justify-between gap-3 overflow-hidden select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F6FEB] animate-pulse" />
                <span className="text-[11px] font-mono text-slate-300 font-semibold tracking-tight">Llamada Entrante</span>
              </div>
              <span className="hidden sm:block text-slate-600 text-xs font-mono">──▶</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[11px] font-mono text-slate-400 tracking-tight">Línea Ocupada</span>
              </div>
              <span className="hidden sm:block text-slate-600 text-xs font-mono">──▶</span>
              <div className="flex items-center gap-2 bg-[#1F6FEB]/10 px-2 py-1 rounded border border-[#1F6FEB]/20 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-emerald-400 font-bold tracking-tight">IA Activa ✓</span>
              </div>
            </div>
          </div>

          {/* Card 2: Agendamiento automático 24/7 (1/3 width) */}
          <div
            className={`rounded-[12px] border border-[#1A1F2E] p-7 md:p-8 flex flex-col justify-between transition-colors duration-[150ms] ease-out hover:border-[#1F6FEB] group bg-[#0D1117] md:col-span-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div>
              <div className="w-10 h-10 rounded-[12px] bg-[#111622] border border-[#1a1f2e] flex items-center justify-center mb-5 group-hover:border-[#1F6FEB] transition-colors duration-[150ms] text-[#1F6FEB]">
                <Calendar size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2.5 tracking-tight">Agendamiento 24/7</h3>
              <p className="text-[13px] leading-relaxed text-slate-400">
                Agentes de IA que responden, informan sobre tratamientos y agendan citas en tiempo real incluso fuera de horario de oficina.
              </p>
            </div>
          </div>

          {/* Card 3: Panel de métricas en tiempo real (1/3 width) */}
          <div
            className={`rounded-[12px] border border-[#1A1F2E] p-7 md:p-8 flex flex-col justify-between transition-colors duration-[150ms] ease-out hover:border-[#1F6FEB] group bg-[#0D1117] md:col-span-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div>
              <div className="w-10 h-10 rounded-[12px] bg-[#111622] border border-[#1a1f2e] flex items-center justify-center mb-5 group-hover:border-[#1F6FEB] transition-colors duration-[150ms] text-[#1F6FEB]">
                <BarChart3 size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2.5 tracking-tight">Panel de métricas</h3>
              <p className="text-[13px] leading-relaxed text-slate-400">
                Visualiza llamadas activas, tiempo de espera, citas confirmadas y la satisfacción de tus pacientes desde un solo dashboard.
              </p>
            </div>
          </div>

          {/* Card 4: IA para pre-calificación (2/3 width) */}
          <div
            className={`rounded-[12px] border border-[#1A1F2E] p-7 md:p-8 flex flex-col justify-between transition-colors duration-[150ms] ease-out hover:border-[#1F6FEB] group bg-[#0D1117] md:col-span-2 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              <div className="w-10 h-10 rounded-[12px] bg-[#111622] border border-[#1a1f2e] flex items-center justify-center mb-5 group-hover:border-[#1F6FEB] transition-colors duration-[150ms] text-[#1F6FEB]">
                <Bot size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2.5 tracking-tight">IA para pre-calificación</h3>
              <p className="text-[13px] leading-relaxed text-slate-400">
                El agente de IA detecta el tratamiento de interés, recopila los datos principales, califica al prospecto y lo canaliza de forma óptima.
              </p>
            </div>

            {/* Prompt/Response mockup */}
            <div className="mt-5 p-3 rounded-[12px] border border-white/[0.04] bg-[#05080F] flex flex-col gap-2 font-mono text-[10px] select-none text-slate-400">
              <div className="flex gap-2">
                <span className="text-red-500 font-semibold shrink-0">Paciente:</span>
                <span>"Quiero agendar cita de Botox para mañana a las 4"</span>
              </div>
              <div className="flex gap-2 text-emerald-400 font-semibold">
                <span className="shrink-0">VoXAI IA:</span>
                <span>"¡Cita reservada con éxito! Sincronizando agenda..."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pain Section (Antes / Después Rows) ─────────────────────────────────────
function PainRow({ icon: Icon, title, originalDesc, benefitDesc }: { icon: any; title: string; originalDesc: string; benefitDesc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-[12px] border border-white/[0.06] bg-[#0D1117] hover:border-[#1F6FEB]/30 hover:bg-[#111622] transition-all duration-200 gap-6 group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start md:items-center gap-5 flex-1 w-full">
        <div className="w-11 h-11 rounded-[12px] bg-red-500/10 border border-red-500/15 flex items-center justify-center text-red-500 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/15 transition-colors duration-200 shrink-0">
          <Icon size={20} strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-white mb-1 tracking-tight">{title}</h3>
          <p className="text-[13px] leading-relaxed text-slate-400 select-none min-h-[40px] md:min-h-[auto] transition-all duration-200">
            {hovered ? benefitDesc : originalDesc}
          </p>
        </div>
      </div>
      
      <div className="shrink-0 w-full md:w-auto flex justify-end">
        <span 
          className={`inline-flex items-center justify-center text-[11px] font-bold px-3 py-1.5 rounded-full border transition-all duration-200 w-32 ${
            hovered 
              ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
              : 'text-red-500 bg-red-500/10 border-red-500/20'
          }`}
        >
          {hovered ? 'Con VoXAI' : 'Sin VoXAI'}
        </span>
      </div>
    </div>
  );
}

function PainSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, rootMargin: '-60px' });

  const pains = [
    { 
      icon: Phone, 
      title: 'Línea ocupada', 
      originalDesc: 'Si no contestas en el primer minuto, el prospecto regresa a Google y agenda con tu competencia directa.', 
      benefitDesc: 'Canales ilimitados en la nube: Tus pacientes siempre obtienen respuesta al instante y nunca escuchan tono de ocupado.'
    },
    { 
      icon: Clock, 
      title: 'Recepcionista en cita', 
      originalDesc: 'Cuando tu equipo está ocupado atendiendo en recepción, el teléfono sigue sonando sin que nadie tome control.', 
      benefitDesc: 'Desbordamiento inteligente: El agente de IA responde y agenda citas de forma automática mientras tu equipo atiende presencialmente.'
    },
    { 
      icon: AlertCircle, 
      title: 'Agenda desorganizada', 
      originalDesc: 'Registros manuales que provocan choques de horarios, personal estresado y pacientes molestos.', 
      benefitDesc: 'Sincronización automática: Las citas se guardan y confirman directo en tu CRM, sin errores ni sobreposiciones de horarios.'
    },
  ];

  return (
    <section className="py-24 bg-[#05080F] border-t border-white/[0.04] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-3 text-red-500">¿RECONOCES ESTO?</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">El verdadero costo de perder llamadas</h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            La mala comunicación destruye la experiencia de tus pacientes antes de que crucen tu puerta.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {pains.map((p, i) => (
            <div
              key={p.title}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <PainRow icon={p.icon} title={p.title} originalDesc={p.originalDesc} benefitDesc={p.benefitDesc} />
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-800 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-block text-xs font-bold text-[#1F6FEB] bg-[#1F6FEB]/10 px-4 py-2 rounded-full border border-[#1F6FEB]/20">
            VOXAI resuelve los tres. En 72 horas.
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Credibility Section ──────────────────────────────────────────────────────
function CredibilitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, rootMargin: '-60px' });

  const cols = [
    { icon: Shield, title: 'Partner oficial net2phone', sub: 'Infraestructura enterprise con respaldo internacional.' },
    { icon: UserCheck, title: 'Datos alojados en México', sub: 'Cumplimiento absoluto de la ley LFPDPPP.' },
    { icon: MessageCircle, title: 'Soporte humano en español', sub: 'Atención directa de lunes a sábado desde Guadalajara.' },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-3 gap-10">
          {cols.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`flex flex-col items-center text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#04418c]/06 border border-[#04418c]/10 flex items-center justify-center mb-4 text-[#04418c]">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-bold text-[#0D1526] mb-1.5">{c.title}</h3>
                <p className="text-xs text-[#5A6A85] leading-relaxed max-w-[220px]">{c.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section (New Social Proof Block) ──────────────────────────
function TestimonialsSection() {
  const reviews = [
    {
      initials: 'DS',
      name: 'Diana Sánchez',
      role: 'Directora Médica',
      clinic: 'Clinique Glow GDL',
      text: '"Desde que implementamos VoXAI, no hemos perdido una sola llamada. Las citas se agendan automáticamente en nuestro CRM y el equipo está mucho más relajado."',
    },
    {
      initials: 'AM',
      name: 'Dra. Andrea Mendoza',
      role: 'Fundadora',
      clinic: 'DermaMed Estética',
      text: '"La pre-calificación por IA ha sido una maravilla. Los pacientes llegan con la información clara y confirmados, lo que ha aumentado nuestras ventas en un 35%."',
    },
    {
      initials: 'RP',
      name: 'Regina Pérez',
      role: 'Coordinadora de Operaciones',
      clinic: 'Aesthetica Guadalajara',
      text: '"El desbordamiento automático salvó nuestra recepción. Si estamos ocupadas con un paciente, la llamada es atendida al instante. El soporte es impecable."',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-3 text-[#1F6FEB]">CASOS DE ÉXITO</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D1526] tracking-tight mb-4">Lo que dicen las dueñas de clínicas</h2>
          <p className="text-sm text-[#5A6A85] max-w-md mx-auto leading-relaxed">
            Líderes del sector estético en Guadalajara que transformaron su comunicación y su rentabilidad con VoXAI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div 
              key={r.name}
              className="p-8 rounded-[12px] border border-[#1A1F2E] bg-[#0D1117] flex flex-col justify-between h-full hover:border-[#1F6FEB]/30 transition-all duration-200"
            >
              <div>
                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-base">★</span>
                  ))}
                </div>
                {/* Testimonial Text */}
                <p className="text-[13px] leading-relaxed text-slate-300 mb-6 italic min-h-[50px]">
                  {r.text}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.04] pt-5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1F6FEB]/10 border border-[#1F6FEB]/20 flex items-center justify-center text-xs font-bold text-[#1F6FEB] shrink-0 uppercase tracking-wider">
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-white leading-none mb-1">{r.name}</h4>
                    <p className="text-[11px] text-slate-400">{r.role} · <span className="text-[#00AAEC] font-semibold">{r.clinic}</span></p>
                  </div>
                </div>
                {/* Source tag */}
                <span className="text-[9px] font-mono font-bold tracking-tight text-slate-500 uppercase bg-white/[0.02] px-2 py-1 rounded border border-white/[0.04] shrink-0">
                  Google Reviews
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp Float ─────────────────────────────────────────────
function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTooltip(true), 8000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[990] flex flex-col items-end gap-2">
      {tooltip && !hovered && (
        <div className="bg-slate-900 text-white text-[11px] font-semibold px-3 py-2 rounded-xl shadow-xl border border-slate-700/60 flex items-center gap-2 animate-tooltip-in whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          💬 ¿Tienes dudas? Escríbenos
        </div>
      )}
      <a
        href="https://wa.me/523348663113?text=Hola,%20quiero%20más%20información%20sobre%20Voxai"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-wa-pulse"
        onMouseEnter={() => setHovered(true)}
      >
        <MessageCircle size={28} className="text-white fill-white" />
      </a>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ClinicasEsteticasClient() {
  const ripple = useRipple();
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, rootMargin: '-60px' });

  const checklist = [
    'Telefonía VoIP y PBX en la nube',
    'IVR personalizado para tu clínica',
    'Grabación de llamadas para auditorías',
    'Integración con tu CRM o agenda',
    'Agente de IA para consultas y citas',
    'Panel de supervisión en tiempo real',
    'Soporte dedicado incluido',
  ];

  return (
    <main className="min-h-screen bg-white text-[#0D1526] relative" style={{ scrollBehavior: 'smooth' }}>
      {/* ── Global Styles ────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }

        /* Scrollbar hide */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }

        /* Word-in animation */
        @keyframes word-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-word-in {
          animation: word-in 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        /* Cursor blink */
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        /* Phone vibrate */
        @keyframes phone-vibrate {
          0%,100% { transform: translateX(0) rotate(0); }
          15%     { transform: translateX(-5px) rotate(-1.5deg); }
          30%     { transform: translateX(5px) rotate(1.5deg); }
          45%     { transform: translateX(-4px) rotate(-1deg); }
          60%     { transform: translateX(4px) rotate(1deg); }
          75%     { transform: translateX(-2px) rotate(-0.5deg); }
        }
        .animate-phone-vibrate { animation: phone-vibrate 0.55s ease-in-out; }

        /* Ripple rings */
        @keyframes ring-expand {
          0%   { transform: scale(0.6); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-ring-1 { animation: ring-expand 2s ease-out infinite; }
        .animate-ring-2 { animation: ring-expand 2s ease-out 0.5s infinite; }
        .animate-ring-3 { animation: ring-expand 2s ease-out 1s infinite; }

        /* Button pulse */
        @keyframes pulse-btn {
          0%, 100% { box-shadow: 0 4px 12px rgba(34,197,94,0.35); }
          50%       { box-shadow: 0 4px 24px rgba(34,197,94,0.6); }
        }
        .animate-pulse-btn { animation: pulse-btn 2s ease-in-out infinite; }

        /* WhatsApp pulse */
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(16,185,129,0.35); }
          50%       { box-shadow: 0 4px 32px rgba(16,185,129,0.6); }
        }
        .animate-wa-pulse { animation: wa-pulse 4s ease-in-out infinite; }

        /* Tooltip fade-in */
        @keyframes tooltip-in {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-tooltip-in { animation: tooltip-in 0.4s ease-out forwards; }

        /* Shimmer border on CTA card */
        @keyframes spin-border {
          to { transform: rotate(360deg); }
        }
        .shimmer-wrap {
          position: relative;
          border-radius: 24px;
          padding: 2px;
          background: #04418c;
          overflow: hidden;
          z-index: 1;
        }
        .shimmer-wrap::before {
          content: '';
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background: conic-gradient(from 0deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%);
          animation: spin-border 3.5s linear infinite;
          z-index: -1;
        }
        .shimmer-inner {
          background: #04418c;
          border-radius: 22px;
          padding: 38px;
        }

        /* Feature card hover */
        .feature-card {
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s;
        }
        .feature-card:hover {
          transform: translateY(-7px);
          border-color: rgba(4,65,140,0.10);
          box-shadow: 0 20px 40px -10px rgba(4,65,140,0.08) !important;
        }
        .feature-card:hover .icon-spin {
          transform: rotate(10deg);
          background: rgba(4,65,140,0.09);
        }
        .icon-spin { transition: transform 0.35s ease, background 0.35s ease; }

        /* Pain card hover */
        .pain-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pain-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.05);
        }

        /* Ripple on buttons */
        .rpl-btn { position: relative; overflow: hidden; }
        @keyframes ripple-anim {
          to { transform: scale(4); opacity: 0; }
        }

        /* Mobile hero image position */
        @media (max-width: 768px) {
          .hero-img { object-position: center top !important; }
        }
      ` }} />

      <ScrollProgressBar />
      <CustomCursor />

      <Navbar darkHero />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden">

        {/* Background image */}
        <Image
          src="/estetica.png"
          alt=""
          fill
          priority
          className="hero-img object-cover"
          style={{ zIndex: 0, objectPosition: 'center right' }}
        />

        {/* Dynamic Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            backgroundColor: 'rgba(5, 8, 15, 0.55)'
          }}
        />

        {/* Particles above overlay */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          <ParticleCanvas />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative" style={{ zIndex: 3 }}>
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">

            {/* Left */}
            <div className="flex flex-col items-start">
              {/* Live badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 opacity-0 translate-y-3 animate-word-in"
                style={{
                  animationDelay: '80ms',
                  animationFillMode: 'forwards',
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.20)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Stethoscope size={12} strokeWidth={2.5} color="#ffffff" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Solución para Clínicas Estéticas
                </span>
              </div>

              <StaggeredHeadline />

              <p
                className="text-base md:text-lg text-white/70 leading-relaxed mb-9 max-w-md opacity-0 translate-y-3 animate-word-in"
                style={{ animationDelay: '640ms', animationFillMode: 'forwards' }}
              >
                Centraliza toda la comunicación de tu clínica, agenda citas automáticamente con IA y supervisa cada interacción desde un solo panel.
              </p>

              <div
                className="flex flex-wrap gap-3 opacity-0 translate-y-3 animate-word-in w-full md:w-auto"
                style={{ animationDelay: '780ms', animationFillMode: 'forwards' }}
              >
                <Link
                  href="/agenda-reunion"
                  className="rpl-btn btn-primary py-3.5 px-7 font-bold text-sm rounded-full flex items-center gap-2 w-full md:w-auto justify-center"
                  onClick={ripple}
                >
                  Solicitar demo gratuita
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/523348663113"
                  target="_blank"
                  rel="noreferrer"
                  className="rpl-btn py-3.5 px-7 font-semibold text-sm rounded-full flex items-center gap-2 w-full md:w-auto justify-center"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff', backdropFilter: 'blur(8px)' }}
                  onClick={ripple}
                >
                  <MessageCircle size={16} strokeWidth={1.8} />
                  WhatsApp
                </a>
              </div>

              {/* Social Proof Avatares */}
              <div
                className="flex items-center gap-3.5 mt-8 opacity-0 translate-y-3 animate-word-in"
                style={{ animationDelay: '880ms', animationFillMode: 'forwards' }}
              >
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#1F6FEB] border-2 border-[#0A1628] flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">MA</span>
                  <span className="w-8 h-8 rounded-full bg-[#30363D] border-2 border-[#0A1628] flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">SF</span>
                  <span className="w-8 h-8 rounded-full bg-[#00AAEC] border-2 border-[#0A1628] flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">LC</span>
                </div>
                <span className="text-xs text-white/70 font-medium">47 clínicas en México ya lo usan</span>
              </div>
            </div>

            {/* Right: Phone */}
            <div
              className="flex justify-center items-center mt-12 lg:mt-0 opacity-0 translate-y-6 animate-word-in"
              style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
            >
              <div 
                className="transition-all duration-700"
                style={{ 
                  transform: 'rotate(-3deg)',
                  filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.5))'
                }}
              >
                <InteractivePhone />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain ─────────────────────────────────────────────────────── */}
      <PainSection />

      {/* ── Metrics (Stats Section) ──────────────────────────────────── */}
      <section 
        ref={resultsRef} 
        className="py-24 text-white relative overflow-hidden"
        style={{
          backgroundColor: '#06101F',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] opacity-10" style={{ background: '#00AAEC' }} />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[100px] opacity-06" style={{ background: '#04418c' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] gap-y-10 md:gap-y-0">
            {[
              { target: 0, suffix: '', sub: 'Llamadas sin atender', note: 'con desbordamiento automático', delay: 0 },
              { target: 40, suffix: '%', sub: 'Más citas agendadas', note: 'en las primeras 4 semanas', delay: 100 },
              { target: 72, suffix: 'h', sub: 'De implementación', note: 'sin hardware, sin técnicos', delay: 200 },
            ].map((m, i) => (
              <div
                key={i}
                className={`text-center flex flex-col items-center justify-center px-6 md:px-10 transition-all duration-700 ${resultsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <AnimatedCounter target={m.target} suffix={m.suffix} delay={m.delay} />
                <p className="text-sm font-bold text-slate-200 mt-3">{m.sub}</p>
                <p className="text-xs text-slate-500 mt-1 max-w-[180px]">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────── */}
      <FeaturesSection />

      {/* ── Testimonials (Social Proof) ─────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Credibility ──────────────────────────────────────────────── */}
      <CredibilitySection />

      {/* ── Checklist + CTA (Todo Incluido) ─────────────────────────── */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] mb-3 text-[#1F6FEB]">COBERTURA COMPLETA</p>
              <h2 className="text-3xl font-extrabold text-[#0D1526] tracking-tight mb-8">Todo incluido desde el día uno</h2>
              <ul className="flex flex-col gap-4">
                {checklist.map((item, idx) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <SVGCheck delay={idx * 110} />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shimmer-wrap shadow-[0_30px_60px_rgba(4,65,140,0.15)]">
              <div className="shimmer-inner text-white flex flex-col justify-between min-h-[360px]">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <TrendingUp size={22} strokeWidth={1.5} color="#fff" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-4">¿Listo para llenar tu agenda sin esfuerzo?</h3>
                  <p className="text-xs leading-relaxed text-white/65 mb-8 max-w-sm">
                    En 72 horas tu clínica puede tener una línea VoIP activa, IA contestando llamadas y un panel de control que nunca habías tenido.
                  </p>
                </div>
                <div>
                  <Link
                    href="/agenda-reunion"
                    className="rpl-btn block w-full text-center bg-white text-[#04418c] py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
                    onClick={ripple}
                  >
                    Agendar reunión gratis
                    <ArrowRight size={15} />
                  </Link>
                  <p className="text-[10px] text-white/40 mt-3 text-center">Sin contratos de permanencia · Sin hardware</p>
                  <p className="text-[11px] text-[#6E7681] mt-2.5 text-center font-semibold">
                    Solo quedan 3 spots disponibles este mes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── WhatsApp Float ───────────────────────────────────────────── */}
      <WhatsAppFloat />
    </main>
  );
}
