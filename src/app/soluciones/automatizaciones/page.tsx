'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, MessageCircle } from 'lucide-react';

/* ─── Premium Code Typewriter Component ─────────────────────────────────── */
function CodeTypewriter() {
  const codeLines = [
    '// VoXAI Workflows — automatiza en segundos',
    'const workflow = new Workflow({ event: "call.missed" });',
    '',
    'await workflow.trigger({',
    '  delaySeconds: 0,',
    '  action: async (call) => {',
    '    await call.sendWhatsApp("¡Hola! En breve te llamamos.");',
    '    await crm.createTask({',
    '      title: "Llamada perdida de " + call.from,',
    '      priority: "high"',
    '    });',
    '  }',
    '});'
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(() => {
        setTypedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const lineText = codeLines[currentLine];
    if (currentChar < lineText.length) {
      const timeout = setTimeout(() => {
        setTypedLines(prev => {
          const next = [...prev];
          next[currentLine] = lineText.substring(0, currentChar + 1);
          return next;
        });
        setCurrentChar(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="font-mono text-[13px] leading-relaxed text-[#e6edf3] p-5 md:p-6 select-none h-full overflow-hidden flex flex-col justify-start">
      {typedLines.map((line, idx) => {
        const safeLine = line || '';
        const isComment = safeLine.trim().startsWith('//');
        return (
          <div key={idx} className="min-h-[1.5rem] whitespace-pre flex items-center">
            {isComment ? (
              <span className="text-[#8b949e]">{safeLine}</span>
            ) : (
              <span>
                {safeLine.split(/(\s+)/).map((part, pIdx) => {
                  if (part === 'const' || part === 'new' || part === 'await' || part === 'async') {
                    return <span key={pIdx} className="text-[#ff7b72] font-semibold">{part}</span>;
                  }
                  if (part.includes('"')) {
                    return <span key={pIdx} className="text-[#a5d6ff]">{part}</span>;
                  }
                  if (part === 'trigger' || part === 'sendWhatsApp' || part === 'createTask') {
                    return <span key={pIdx} className="text-[#d2a8ff]">{part}</span>;
                  }
                  return <span key={pIdx} className="text-[#e6edf3]">{part}</span>;
                })}
              </span>
            )}
            {idx === currentLine && currentChar < (codeLines[currentLine]?.length || 0) && (
              <span className="inline-block w-1.5 h-3.5 bg-[#1F6FEB] ml-0.5 animate-pulse" />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Hand-Crafted Minimalist SVG Icons (20px, 1.5px stroke, color #1F6FEB) ── */
function GitBranchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1F6FEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const features = [
  {
    icon: GitBranchIcon,
    title: 'Flujos de llamada inteligentes',
    description: 'Define reglas condicionales: si un agente no contesta en X segundos, la llamada pasa al siguiente o activa un agente de IA automáticamente.',
  },
  {
    icon: BellIcon,
    title: 'Notificaciones automáticas',
    description: 'Disparadores por evento: confirmación de cita, recordatorio de pago, alerta de entrega o seguimiento post-llamada sin intervención humana.',
  },
  {
    icon: BotIcon,
    title: 'Bots de primer contacto',
    description: 'Un agente de IA recibe la llamada, recopila datos clave del cliente y crea el ticket o registro en tu CRM antes de transferir la llamada.',
  },
  {
    icon: ClockIcon,
    title: 'Automatización de reportes',
    description: 'Reportes diarios, semanales o mensuales consolidados y enviados a tu Slack, correo o CRM automáticamente. Cero exportaciones manuales.',
  },
];

const resultados = [
  { value: '-70%', label: 'Tareas manuales', sub: 'Eliminadas con automatización' },
  { value: '2–4 sem', label: 'MVP ultra-rápido', sub: 'Extremadamente rápido' },
  { value: 'Económico', label: 'Inversión accesible', sub: 'Desarrollo de MVP muy económico' },
];

const checklist = [
  'Flujos de llamada con lógica condicional',
  'Notificaciones automáticas (SMS, WhatsApp, Email)',
  'Bots de primer contacto integrados con IA',
  'Integración bidireccional con tu CRM actual',
  'Reportes automáticos por email o Slack',
  'Escalación inteligente de llamadas críticas',
  'Monitoreo activo de operación y soporte post-entrega',
];

export default function AutomatizacionesPage() {
  useEffect(() => {
    document.title = 'Automatizaciones | VOXAI';
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#0F172A] font-sans relative overflow-hidden" style={{ background: '#FFFFFF', color: '#0F172A' }}>
      
      {/* CSS Imports and Pulsing Dot and Font Styles */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.1/index.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .font-mono {
          font-family: 'Geist Mono', 'Courier New', Courier, monospace !important;
        }
        .font-sans {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }
        
        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #10B981;
          border-radius: 50%;
          position: relative;
        }
        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #10B981;
          border-radius: 50%;
          animation: pulse 1.6s infinite ease-in-out;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>

      <Navbar />

      {/* ─── Hero Section ─── */}
      <section 
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E2E8F0]"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col items-start max-w-[540px]">
            {/* Eyebrow badge */}
            <div 
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[12px] border mb-6 transition-all duration-150"
              style={{
                background: '#F1F5F9',
                borderColor: '#E2E8F0',
              }}
            >
              <span className="pulse-dot shrink-0" />
              <span className="text-[13px] font-semibold tracking-wide" style={{ color: '#1F6FEB' }}>
                Automatizaciones
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.2] tracking-tight mb-5">
              <span className="font-light block mb-2" style={{ color: '#64748B' }}>
                Las tareas repetitivas
              </span>
              <span className="font-bold block" style={{ color: '#0F172A' }}>
                no deberían consumir a tu equipo.
              </span>
            </h1>

            {/* Sub */}
            <p className="text-[14px] leading-[1.6] mb-8 max-w-[420px]" style={{ color: '#475569' }}>
              Automatiza flujos de llamadas, notificaciones, recordatorios y reportes. Diseñamos y entregamos tu MVP de automatización de forma extremadamente rápida y económica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <Link 
                href="/agenda-reunion" 
                className="px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-[12px] text-white hover:brightness-110 active:brightness-95 transition-all duration-150 w-full sm:w-auto"
                style={{
                  background: '#1F6FEB',
                }}
              >
                Hablar con un experto
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/523348663113" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-[12px] border text-[#0F172A] hover:bg-slate-50 active:bg-slate-100 transition-all duration-150 w-full sm:w-auto"
                style={{
                  borderColor: '#E2E8F0',
                }}
              >
                <MessageCircle size={17} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Code block window */}
          <div className="w-full flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-[480px] rounded-[12px] border border-[#21262D] backdrop-blur-md overflow-hidden transition-all duration-150"
              style={{
                background: '#0D1117',
                height: '320px',
              }}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#21262D] bg-[#090D13]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#30363D]" />
                </div>
                <span className="text-[13px] font-mono text-slate-500 font-medium">voxai.config.js</span>
              </div>
              
              {/* Code content */}
              <CodeTypewriter />
            </div>
          </div>

        </div>
      </section>

      {/* ─── Stats Row ─── */}
      <section 
        className="py-10 border-b border-[#E2E8F0]"
        style={{
          background: '#F8FAFC',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 md:max-w-4xl mx-auto">
            {resultados.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.2] mb-1" style={{ color: '#1F6FEB' }}>
                  {r.value}
                </p>
                <p className="text-[13px] font-semibold tracking-wide" style={{ color: '#0F172A' }}>
                  {r.label}
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: '#475569' }}>
                  {r.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lo que construimos (Bento Grid) ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header left-aligned */}
          <div className="text-left mb-12 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight leading-[1.2]" style={{ color: '#0F172A' }}>
              Qué automatizamos para ti
            </h2>
            <p className="text-[14px] leading-[1.6]" style={{ color: '#475569' }}>
              Desde flujos simples hasta procesos complejos con múltiples canales. Sin fricción, de forma extremadamente rápida.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              // Bento layout: items 0 and 3 take 2/3 width, items 1 and 2 take 1/3 width
              const colSpan = (i === 0 || i === 3) ? 'md:col-span-2' : 'md:col-span-1';
              return (
                <div 
                  key={f.title} 
                  className={`rounded-[12px] border border-[#E2E8F0] p-6 md:p-8 flex flex-col justify-between transition-colors duration-[150ms] ease-out hover:border-[#1F6FEB] group cursor-default ${colSpan}`}
                  style={{
                    background: '#F8FAFC',
                  }}
                >
                  <div className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-[12px] border border-[#E2E8F0] bg-white flex items-center justify-center mb-6 group-hover:border-[#1F6FEB] transition-colors duration-[150ms]">
                      <Icon />
                    </div>
                    <h3 className="text-[15px] font-bold mb-3 tracking-wide" style={{ color: '#0F172A' }}>
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-[1.6]" style={{ color: '#475569' }}>
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Todo Incluido Section ─── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Checklist */}
            <div className="max-w-[480px]">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 tracking-tight leading-[1.2]" style={{ color: '#0F172A' }}>
                Todo incluido desde el día uno
              </h2>
              <ul className="flex flex-col gap-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#1F6FEB' }} />
                    <span className="text-[14px]" style={{ color: '#475569' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Premium Light Card */}
            <div 
              className="rounded-[12px] border p-8 md:p-10 flex flex-col justify-between"
              style={{
                background: '#F8FAFC',
                borderColor: '#E2E8F0',
              }}
            >
              <div>
                {/* Decorative code line */}
                <div className="font-mono text-[11px] text-slate-400 mb-6 select-none opacity-80 uppercase tracking-widest">
                  voxai --configure --workflow-engine
                </div>

                <h3 className="text-xl font-bold mb-4 tracking-tight leading-[1.2]" style={{ color: '#0F172A' }}>
                  ¿Listo para liberar a tu equipo?
                </h3>
                <p className="text-[14px] leading-[1.6] mb-8" style={{ color: '#475569' }}>
                  Cuéntanos qué tareas o flujos te gustaría automatizar. Diseñamos y desarrollamos tu MVP de automatización de forma extremadamente rápida y económica.
                </p>
              </div>

              <div>
                <Link 
                  href="/agenda-reunion" 
                  className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-white px-6 py-3 rounded-[12px] hover:brightness-110 active:brightness-95 transition-all duration-150 w-full sm:w-auto"
                  style={{
                    background: '#1F6FEB',
                  }}
                >
                  Agendar sesión técnica
                  <ArrowRight size={16} />
                </Link>
                <p className="text-[13px] mt-3" style={{ color: '#475569' }}>
                  Resultados visibles en la primera semana · Demo en vivo
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
