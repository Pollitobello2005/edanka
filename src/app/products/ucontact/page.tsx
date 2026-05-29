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
  MessageSquare,
  Globe2,
  Lock,
  Headphones,
  Award
} from 'lucide-react';

// ─── Main Page Component ─────────────────────────────────────────────────────
export default function UContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const pbxFeatures = [
    {
      icon: Phone,
      title: 'Marcación Predictiva',
      desc: 'Incrementa hasta 300% el contacto efectivo automatizando llamadas salientes y depurando líneas ocupadas.',
      color: '#00AAEC',
      bg: 'rgba(0, 170, 236, 0.08)',
    },
    {
      icon: MessageSquare,
      title: 'Bandeja Omnicanal',
      desc: 'Centraliza chats de WhatsApp, Webchat, Messenger, Instagram y Email en una sola cola de atención unificada.',
      color: '#10B981',
      bg: 'rgba(16, 185, 129, 0.08)',
    },
    {
      icon: Zap,
      title: 'Agentes de IA e IVR',
      desc: 'Pre-califica prospectos, responde dudas 24/7 y enruta las consultas complejas al agente idóneo.',
      color: '#8B5CF6',
      bg: 'rgba(139, 92, 246, 0.08)',
    },
    {
      icon: Activity,
      title: 'Monitoreo en Tiempo Real',
      desc: 'Supervisa llamadas activas, susurra respuestas al oído del agente o toma el control para cerrar ventas.',
      color: '#EC4899',
      bg: 'rgba(236, 72, 153, 0.08)',
    },
    {
      icon: Database,
      title: 'Reportes y Analíticas',
      desc: 'Visualiza tiempos de atención (AHT), niveles de servicio (SLA), abandonos y KPIs críticos al instante.',
      color: '#F59E0B',
      bg: 'rgba(245, 158, 11, 0.08)',
    },
    {
      icon: Users,
      title: 'Enrutamiento Inteligente (ACD)',
      desc: 'Asigna llamadas y chats según perfil del agente, habilidades o estatus del cliente para maximizar la conversión.',
      color: '#3B82F6',
      bg: 'rgba(59, 130, 246, 0.08)',
    },
    {
      icon: Volume2,
      title: 'Grabación Integral',
      desc: 'Respalda el 100% de los audios y pantallas de tus agentes para asegurar auditorías de calidad impecables.',
      color: '#EF4444',
      bg: 'rgba(239, 68, 68, 0.08)',
    },
    {
      icon: Lock,
      title: 'Gestión de Campañas',
      desc: 'Importa bases de prospectos, diseña scripts de ventas y segmenta listas de manera ágil y controlada.',
      color: '#6366F1',
      bg: 'rgba(99, 102, 241, 0.08)',
    },
  ];

  const benefits = [
    {
      title: 'Omnicanalidad Real Sin Silos',
      desc: 'Tus agentes atienden llamadas, chats y correos en una misma app. Se acabó el saltar de pantalla en pantalla y perder el hilo del cliente.',
    },
    {
      title: 'Implementación Ágil en 72 Horas',
      desc: 'Toda la infraestructura corre en la nube. Conectamos tus líneas y bases de datos en tiempo récord sin requerir técnicos presenciales.',
    },
    {
      title: 'Soporte y Respaldo Enterprise',
      desc: 'Nivel corporativo internacional garantizado por la red robusta de net2phone, con ingenieros de soporte dedicados en español.',
    },
    {
      title: 'Retorno de Inversión Inmediato',
      desc: 'Optimiza la ocupación de agentes, elimina la pérdida de llamadas y duplica la productividad de tus campañas comerciales desde el mes uno.',
    },
  ];

  const faqs = [
    {
      q: '¿Qué canales de comunicación se pueden integrar a uContact?',
      a: 'uContact integra llamadas de voz entrantes y salientes, WhatsApp Business API oficial, Webchat en tu sitio web, correo electrónico corporativo, Facebook Messenger e Instagram Direct. Todos se administran en una sola bandeja de entrada inteligente.',
    },
    {
      q: '¿Cómo funciona el Marcador Predictivo?',
      a: 'Es un motor inteligente que calcula el ritmo de llamadas de tus agentes y marca números telefónicos automáticamente en segundo plano. Filtra buzones, tonos ocupados y números inválidos, pasando al agente únicamente las llamadas que ya han sido contestadas por una persona real, multiplicando el tiempo efectivo de conversación.',
    },
    {
      q: '¿uContact se integra con mi CRM actual?',
      a: 'Sí. Contamos con integraciones nativas y APIs flexibles para conectar tu conmutador y contact center con Salesforce, HubSpot, Zoho, MS Dynamics o cualquier desarrollo a medida de tu empresa.',
    },
    {
      q: '¿Es apto para equipos de trabajo remoto?',
      a: 'Totalmente. Al ser una solución 100% cloud, tus agentes y supervisores solo necesitan una computadora con conexión a internet y audífonos para operar desde su casa u oficina con la misma seguridad y supervisión en vivo.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0D1526]">
      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 bg-white">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(0,170,236,0.08), transparent 35%), radial-gradient(circle at bottom left, rgba(4,65,140,0.06), transparent 30%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold bg-[#04418c]/06 text-[#04418c] border border-[#04418c]/10">
              <Sparkles size={12} />
              uContact Omnicanal · VOXAI
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] text-[#0D1526] tracking-tight mb-5">
              La solución en la nube para <br />
              <span className="bg-gradient-to-r from-[#00AAEC] to-[#04418c] bg-clip-text text-transparent">Contact Center</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Administra agentes de soporte y ventas, automatiza respuestas con IA y supervisa cada interacción desde una bandeja omnicanal unificada respaldada por net2phone.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto mb-10">
              <Link href="/agenda-reunion" className="btn-primary inline-flex items-center gap-2 text-sm py-3.5 px-7">
                Hablar con un especialista
                <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/523348663113?text=Hola, quiero más información sobre VOXAI uContact" target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2 py-3.5 px-7 text-sm">
                Solicitar demo gratis
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 w-full max-w-md">
              <div>
                <p className="text-xl font-black text-[#0D1526]">99.99%</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Uptime garantizado</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0D1526]">Omnicanal</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">WhatsApp, Web, Voz</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#0D1526]">72h</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Puesta en marcha</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Agent Asset */}
          <div className="relative">
            <div className="absolute -top-6 -left-8 h-28 w-28 rounded-full blur-3xl bg-[#00AAEC]/20" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl bg-[#04418c]/20" />
            <div className="voxai-card relative overflow-hidden p-3 shadow-2xl rounded-[32px] bg-white border border-[#E2E8F0] transition-all hover:scale-[1.01]">
              <Image 
                src="/voxai_ucontact_hero.png" 
                alt="uContact Agente de Soporte" 
                width={500} 
                height={350} 
                className="w-full h-auto rounded-[24px] object-cover" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Intro Section ────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3">LA REVOLUCIÓN OMNICANAL</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1526] leading-tight max-w-2xl mx-auto tracking-tight">
            Descubre la plataforma de Contact Center omnicanal definitiva para capturar cada oportunidad
          </h2>
        </div>
      </section>

      {/* ─── Featured Dashboard Mockup Card ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-14">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#00AAEC] bg-[#00AAEC]/06 px-3.5 py-1.5 rounded-full">INTERFAZ ENTERPRISE</span>
            <h2 className="text-3xl font-black text-[#0D1526] mt-4 mb-4 tracking-tight">Descubre lo último en software para Contact Center</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Bandeja única para llamadas de voz, WhatsApp, redes sociales y chats en vivo, diseñada para que tus agentes operen con velocidad récord.
            </p>
          </div>

          <div className="voxai-card relative overflow-hidden p-4 shadow-2xl rounded-[32px] bg-[#0A1628] border border-slate-800 transition-all hover:scale-[1.01] max-w-4xl mx-auto">
            <Image 
              src="/voxai_ucontact_dashboard.png" 
              alt="uContact Dashboard Omnicanal" 
              width={900} 
              height={500} 
              className="w-full h-auto rounded-[24px] object-cover" 
            />
          </div>
        </div>
      </section>

      {/* ─── Omnichannel Capability Section ──────────────────────────────── */}
      <section className="py-24 bg-[#F9FAFB] border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
          
          {/* Grid Split */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8B5CF6] bg-[#8B5CF6]/06 px-3.5 py-1.5 rounded-full">CONVERSIÓN MEJORADA</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#0D1526] mt-4 mb-4 tracking-tight">Una mejor forma de trabajar, una mejor experiencia para tus clientes</h3>
              <p className="text-sm leading-relaxed text-slate-500 mb-6">
                Optimiza las interacciones y reduce la fricción operativa. Con uContact, tus supervisores monitorean colas de llamadas en vivo, evalúan tiempos de espera y automatizan respuestas para acelerar el embudo de ventas.
              </p>
              <ul className="flex flex-col gap-3">
                {['Campañas salientes de alta conversión con marcador predictivo', 'Integración transparente con Salesforce, HubSpot y Zoho', 'Agentes virtuales de IA integrados para soporte inmediato 24/7'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Check size={14} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Column */}
            <div className="bg-white rounded-[28px] border border-slate-100 p-6 flex items-center justify-center transition-all hover:scale-[1.01] shadow-sm">
              <Image 
                src="/voxai_ucontact_manager.png" 
                alt="uContact Manager Operaciones" 
                width={420} 
                height={280} 
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
              FUNCIONALIDADES DE ÚLTIMA GENERACIÓN
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-5 mb-4">
              Funcionalidades de Contact Center de Última Generación
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Toda la potencia de una plataforma enterprise simplificada para que tu equipo atienda y convierta más rápido.
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

      {/* ─── "¿Por qué elegir uContact con VOXAI?" ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3 bg-[#04418c]/06 px-3.5 py-1.5 rounded-full border border-[#04418c]/10">
              ¿POR QUÉ ELEGIR uCONTACT CON VOXAI?
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1526] tracking-tight mt-5">
              Atención omnicanal de clase mundial para tu PyME
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

      {/* ─── FAQs ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F9FAFB] border-t border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#04418c] mb-3 bg-[#04418c]/06 px-3.5 py-1.5 rounded-full">PREGUNTAS FRECUENTES</span>
            <h2 className="text-3xl font-extrabold text-[#0D1526] mt-4 tracking-tight">Preguntas frecuentes sobre Contact Center</h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="rounded-2xl border border-slate-100 bg-white p-5 cursor-pointer transition-all hover:bg-slate-50/50"
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
            OPTIMIZA TU ATENCIÓN HOY
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6 tracking-tight">
            ¿Listo para multiplicar tus ventas y resolver soporte en segundos?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Conserva el control absoluto de tus canales. uContact integra bases de datos, marcador automático y analíticas avanzadas en 72 horas.
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
              href="https://wa.me/523348663113?text=Hola, quiero más información sobre VOXAI uContact" 
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