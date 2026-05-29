'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Video, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Check, 
  Smartphone, 
  Laptop, 
  ShieldCheck, 
  TrendingDown, 
  Zap, 
  Users, 
  Database, 
  Volume2,
  Lock,
  Headphones,
  Award
} from 'lucide-react';



// ─── Main Page Component ─────────────────────────────────────────────────────
export default function UCAASPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pbxFeatures = [
    {
      icon: Phone,
      title: 'Conmutador en la nube',
      desc: 'Centraliza toda tu telefonía empresarial en una plataforma elástica e inteligente sin costos físicos.',
      color: '#00AAEC',
      bg: 'rgba(0, 170, 236, 0.08)',
    },
    {
      icon: Laptop,
      title: 'App Móvil y Web',
      desc: 'Lleva tu extensión telefónica empresarial contigo en tu celular, tablet o laptop sin fricción.',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.08)',
    },
    {
      icon: Video,
      title: 'Videollamadas HD',
      desc: 'Salas virtuales integradas para organizar videoconferencias y colaborar con clientes en segundos.',
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.08)',
    },
    {
      icon: Users,
      title: 'Integración con CRM',
      desc: 'Conecta tu conmutador con Salesforce, HubSpot, Zoho o desarrollo a medida para ver quién llama.',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.08)',
    },
    {
      icon: Volume2,
      title: 'Grabación de llamadas',
      desc: 'Monitorea el desempeño de tu equipo y respalda cada conversación para auditorías y capacitación.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.08)',
    },
    {
      icon: Zap,
      title: 'IVR / Recepcionista Digital',
      desc: 'Distribuye llamadas al departamento correcto automáticamente con menús interactivos de voz.',
      color: '#3B82F6',
      bg: 'rgba(59, 130, 246, 0.08)',
    },
    {
      icon: Activity,
      title: 'Supervisión en vivo',
      desc: 'Panel de control en tiempo real para escuchar llamadas activas y asistir agentes de inmediato.',
      color: '#EF4444',
      bg: 'rgba(239, 68, 68, 0.08)',
    },
    {
      icon: Database,
      title: 'Métricas y reportes',
      desc: 'Estadísticas clave sobre llamadas atendidas, perdidas y tiempos de respuesta de tu equipo.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.08)',
    },
  ];

  const benefits = [
    {
      title: 'Activación Rápida y Simple',
      desc: 'Configuración en 72 horas en la nube. Realizamos la portabilidad de tus números actuales de manera transparente, sin interrumpir tu operación diaria ni un solo minuto.',
    },
    {
      title: 'Seguridad, Respaldo y Soporte',
      desc: 'Garantía absoluta respaldada por la red global enterprise de net2phone. Además, cuentas con ingenieros de soporte dedicados en español desde Guadalajara.',
    },
    {
      title: 'Ahorro Radical Operativo',
      desc: 'Hasta 40% de reducción en costos mensuales eliminando hardware obsoleto, cableado físico, mantenimientos costosos y contratos leoninos tradicionales.',
    },
    {
      title: 'Una Solución Fácil de Usar',
      desc: 'Portal de administración intuitivo. Agrega extensiones, cambia colas de llamadas o revisa grabaciones con dos clics. Sin esperas técnicas de semanas.',
    },
  ];

  const faqs = [
    {
      q: '¿Qué es UCaaS y cómo ayuda a mi negocio?',
      a: 'UCaaS (Comunicaciones Unificadas como Servicio) centraliza llamadas, mensajería, videoconferencias y apps de productividad en una sola suite en la nube. Reemplaza conmutadores físicos caros por una solución que corre en computadoras, celulares y teléfonos IP Yealink, ahorrando costos y conectando equipos remotos.',
    },
    {
      q: '¿Puedo conservar mis números telefónicos actuales?',
      a: '¡Por supuesto! Nosotros nos encargamos de todo el proceso de portabilidad numérica de forma 100% gratuita. Tus clientes seguirán llamando a los mismos números de siempre sin que note ningún corte en el servicio.',
    },
    {
      q: '¿Qué necesito instalar o comprar para empezar?',
      a: 'Absolutamente nada de hardware. VOXAI UCaaS corre directamente desde tu navegador web, app móvil o aplicación de escritorio. Si deseas utilizar teléfonos físicos de escritorio, te enviamos teléfonos IP autoconfigurables que solo conectas a internet y están listos.',
    },
    {
      q: '¿Cómo funciona la integración con net2phone?',
      a: 'VOXAI es partner oficial de net2phone. Esto significa que nuestro software de comunicaciones y agentes de IA corren sobre la infraestructura robusta y la red global de voz de net2phone, garantizando un Uptime del 99.99% y calidad de voz HD internacional.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0D1526]">
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(0,170,236,0.08), transparent 35%), radial-gradient(circle at bottom left, rgba(4,65,140,0.06), transparent 30%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold bg-[#04418c]/06 text-[#04418c] border border-[#04418c]/10">
              <Sparkles size={12} />
              VOXAI Unite · UCaaS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] text-[#0D1526] tracking-tight mb-5">
              Eleva tus <br />
              <span className="bg-gradient-to-r from-[#00AAEC] to-[#04418c] bg-clip-text text-transparent">comunicaciones</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              El conmutador virtual de última generación respaldado por la red global de net2phone. Centraliza llamadas, video y mensajería en cualquier dispositivo.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto mb-10">
              <Link href="/agenda-reunion" className="btn-primary inline-flex items-center gap-2 text-sm py-3.5 px-7">
                Hablar con un especialista
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/523348663113?text=Hola, quiero más información sobre VOXAI UCaaS" target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2 py-3.5 px-7 text-sm">
                Solicitar demo gratis
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 w-full max-w-md">
              <div>
                <p className="text-xl font-black text-[#0D1526]">99.99%</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Uptime de red</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0D1526]">+500</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">PyMEs en México</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0D1526]">72h</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Configuración</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-8 h-28 w-28 rounded-full blur-3xl bg-[#00AAEC]/20" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl bg-[#04418c]/20" />
            <div className="voxai-card relative overflow-hidden p-3 shadow-2xl rounded-[32px] bg-white border border-[#E2E8F0] transition-all hover:scale-[1.01]">
              <Image 
                src="/voxai_unite_hero.png" 
                alt="VOXAI Unite Conmutador" 
                width={500} 
                height={350} 
                className="w-full h-auto rounded-[24px] object-cover animate-pulse-subtle" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro Section ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3">LA EVOLUCIÓN DE LA TELEFONÍA</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1526] leading-tight max-w-2xl mx-auto tracking-tight">
            Más que una solución de conmutador, una plataforma de comunicaciones unificadas premium
          </h2>
        </div>
      </section>

      {/* ─── Key Mockups Grid ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
          
          {/* Row 1: PBX anywhere */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00AAEC] bg-[#00AAEC]/06 px-3.5 py-1.5 rounded-full">MOVILIDAD ABSOLUTA</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#0D1526] mt-4 mb-4 tracking-tight">Accede a tu PBX dondequiera que estés</h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                Tu oficina te acompaña. Recibe y realiza llamadas corporativas desde tu computadora o celular usando tu mismo número de oficina, manteniendo la privacidad y control total.
              </p>
              <ul className="flex flex-col gap-3">
                {['App nativa en iOS & Android', 'Extensión web ligera en Chrome', 'Presencia y estatus de agentes en tiempo real'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check size={14} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FBFF] rounded-[28px] border border-slate-100 p-6 flex items-center justify-center transition-all hover:scale-[1.01] shadow-sm">
              <Image 
                src="/voxai_mobility.png" 
                alt="VOXAI Movilidad PBX" 
                width={400} 
                height={260} 
                className="w-full h-auto rounded-2xl shadow-md object-cover" 
              />
            </div>
          </div>

          {/* Row 2: Videoconference */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#10B981] bg-[#10B981]/06 px-3.5 py-1.5 rounded-full">COLABORACIÓN HD</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#0D1526] mt-4 mb-4 tracking-tight">Impulsa la productividad en reuniones virtuales</h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                Evita herramientas de video externas con licencias caras. VOXAI integra salas de reuniones virtuales HD para colaborar con tu equipo o atender a prospectos al instante con un solo clic.
              </p>
              <ul className="flex flex-col gap-3">
                {['Salas de video sin límite de duración', 'Compartición de pantalla con un clic', 'Invitaciones a externos mediante enlaces'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check size={14} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1 bg-[#FDFDFD] rounded-[28px] border border-slate-100 p-6 flex items-center justify-center transition-all hover:scale-[1.01] shadow-sm">
              <Image 
                src="/voxai_meetings.png" 
                alt="VOXAI Reuniones Virtuales" 
                width={400} 
                height={260} 
                className="w-full h-auto rounded-2xl shadow-md object-cover" 
              />
            </div>
          </div>

          {/* Row 3: Integrations */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/06 px-3.5 py-1.5 rounded-full">FLUJO CONECTADO</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#0D1526] mt-4 mb-4 tracking-tight">Mejora la eficiencia en tus flujos de trabajo</h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                Integra tu telefonía con las herramientas que ya utilizas diariamente. Al recibir una llamada, VOXAI busca en tu CRM e identifica al cliente de inmediato, evitando capturas manuales lentas.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Teams', 'WhatsApp Business'].map(item => (
                  <span key={item} className="text-[10px] font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#FAF8FF] rounded-[28px] border border-slate-100 p-6 flex items-center justify-center transition-all hover:scale-[1.01] shadow-sm">
              <Image 
                src="/voxai_integrations.png" 
                alt="VOXAI Integraciones de Flujo" 
                width={400} 
                height={260} 
                className="w-full h-auto rounded-2xl shadow-md object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── Dark Blue PBX Feature Grid Section ─────────────────────────────── */}
      <section className="py-24 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #00AAEC 0%, #04418c 100%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#5BC4F5] mb-3 bg-[#5BC4F5]/10 px-3.5 py-1.5 rounded-full border border-[#5BC4F5]/15">
              CARACTERÍSTICAS DE CONMUTADOR
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-5 mb-4">
              Características de PBX de última generación
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Centraliza tus comunicaciones y optimiza la atención al cliente con funciones avanzadas desde la nube.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pbxFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div 
                  key={f.title} 
                  className="rounded-2xl border border-white/05 bg-white/02 p-6 transition-all hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: f.bg }}
                  >
                    <Icon size={18} color={f.color} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-xs font-black text-white mb-2">{f.title}</h3>
                  <p className="text-[11px] leading-relaxed text-slate-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── "Por qué elegir VOXAI?" ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3 bg-[#04418c]/06 px-3.5 py-1.5 rounded-full border border-[#04418c]/10">
              ¿POR QUÉ ELEGIR VOXAI?
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1526] tracking-tight mt-5">
              El conmutador virtual definitivo para tu PyME
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div 
                key={b.title} 
                className="rounded-3xl border border-slate-100 bg-[#F9FAFB] p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-[#04418c]/06 flex items-center justify-center mb-6 text-[#04418c]">
                  <Check size={16} strokeWidth={2.5} />
                </div>
                <h3 className="text-xs font-black text-[#0D1526] mb-3">{b.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Device Flexability Section ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3">OMNICANALIDAD INMEDIATA</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0D1526] tracking-tight">Trabaja desde cualquier lugar y en cualquier dispositivo</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100">
              <Smartphone size={32} color="#04418c" className="mb-4" />
              <h3 className="text-xs font-black text-[#0D1526] mb-2">Desde tu Dispositivo Móvil</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-[200px]">
                Apps nativas de VOXAI en tu teléfono para estar disponible en tránsito.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100">
              <Laptop size={32} color="#00AAEC" className="mb-4" />
              <h3 className="text-xs font-black text-[#0D1526] mb-2">Desde tu PC / Laptop</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-[200px]">
                Softphone web integrado para navegadores y aplicación de escritorio.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100">
              <Headphones size={32} color="#8B5CF6" className="mb-4" />
              <h3 className="text-xs font-black text-[#0D1526] mb-2">Desde tu Teléfono IP</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-[200px]">
                Teléfonos de escritorio Yealink o Grandstream autoconfigurados listos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3 bg-[#04418c]/06 px-3.5 py-1.5 rounded-full">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl font-extrabold text-[#0D1526] mt-4 tracking-tight">Preguntas frecuentes sobre conmutador virtual</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="rounded-2xl border border-slate-100 bg-[#F9FAFB] p-5 cursor-pointer transition-all hover:bg-slate-50/50"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xs font-black text-[#0D1526]">{faq.q}</h3>
                  <ChevronRight size={14} className={`text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-90' : ''}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[11px] leading-relaxed text-slate-500 border-t border-slate-200/60 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #00AAEC 0%, #04418c 70%, transparent 100%)' }} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#5BC4F5] mb-5 bg-[#5BC4F5]/10 px-3.5 py-1.5 rounded-full border border-[#5BC4F5]/15">
            CONECTA TU PyME HOY
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
            ¿Listo para migrar tus telecomunicaciones a la nube?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Conserva tus números actuales. Deja atrás Telmex o infraestructura obsoleta y escala tus operaciones en 72 horas con VOXAI Unite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/agenda-reunion" 
              className="px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #00AAEC 0%, #04418c 100%)',
                color: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 170, 236, 0.3)',
              }}
            >
              Hablar con un especialista
              <ArrowRight size={16} />
            </Link>
            <a 
              href="https://wa.me/523348663113?text=Hola, quiero más información sobre VOXAI UCaaS" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 rounded-full border text-white hover:bg-white/5 transition-all"
              style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              Agendar demostración
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}