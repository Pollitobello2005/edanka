'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Brain,
  Bot,
  Sparkles,
  Clock,
  Zap,
  Check,
  MessageSquare,
  Calendar,
  ArrowRight,
  ChevronRight,
  Phone,
  Shield,
  TrendingDown,
  UserCheck,
  Volume2,
  Play,
  Smartphone,
  Database,
  Smile,
  ChevronDown
} from 'lucide-react';

export default function AgentesIAPage() {
  const [activeTab, setActiveTab] = useState<'soporte' | 'recepcion' | 'leads' | 'citas'>('citas');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [demoQuery, setDemoQuery] = useState<number>(0);

  const tabsInfo = {
    citas: {
      title: 'Agenda de Citas Automatizada',
      subtitle: 'Citas médicas, inmobiliarias o comerciales agendadas al instante.',
      desc: 'El agente de IA interactúa de forma natural, consulta tu calendario (Google Calendar, Outlook, Cal.com) en tiempo real, propone horarios disponibles y agenda la cita directamente, enviando recordatorios automatizados.',
      bullets: [
        'Sincronización total en tiempo real sin colisiones de horarios.',
        'Envío de recordatorio y confirmación por WhatsApp.',
        'Reducción de hasta un 45% en inasistencias (no-shows).',
      ],
      chatPreview: [
        { sender: 'client', text: 'Hola, me gustaría agendar una cita para valoración dental este viernes por la tarde.' },
        { sender: 'bot', text: '¡Hola! Claro que sí. El Dr. Ramírez tiene disponible este viernes a las 4:00 PM y a las 5:30 PM. ¿Te funciona alguno?' },
        { sender: 'client', text: 'A las 5:30 PM me queda perfecto.' },
        { sender: 'bot', text: '¡Excelente! Cita agendada para el viernes a las 5:30 PM. Te acabo de enviar la confirmación por WhatsApp y un enlace de ubicación. ¡Te esperamos!' },
      ]
    },
    soporte: {
      title: 'Soporte y Atención 24/7/365',
      subtitle: 'Resuelve el 70% de tus consultas comunes sin intervención humana.',
      desc: 'Tu agente de IA conoce toda tu base de conocimientos. Puede guiar a tus clientes a través de preguntas sobre envíos, políticas, soporte técnico básico o estatus de pedidos, a cualquier hora de la noche.',
      bullets: [
        'Respuestas precisas en menos de 1 segundo.',
        'Disponible fuera de horarios laborales y días festivos.',
        'Traspaso inteligente a agentes humanos si es complejo.',
      ],
      chatPreview: [
        { sender: 'client', text: '¿Puedo facturar una compra que hice hace 5 días?' },
        { sender: 'bot', text: '¡Hola! Sí, tienes hasta el último día del mes en curso para facturar. Puedes hacerlo ingresando a voxai.com/factura con tu número de ticket.' },
        { sender: 'client', text: 'Gracias, ¿dónde encuentro mi número de ticket?' },
        { sender: 'bot', text: 'Lo encuentras en la parte superior derecha de tu recibo, justo debajo del código de barras. Comienza con "TX-".' },
      ]
    },
    recepcion: {
      title: 'Recepcionista y IVR Conversacional',
      subtitle: 'Dile adiós a los menús de "marque 1, marque 2" aburridos.',
      desc: 'Tu recepcionista virtual de IA contesta llamadas de voz con un tono ultra-natural. Escucha al cliente, entiende su solicitud e introduce reglas de enrutamiento avanzadas para transferirlo al especialista adecuado.',
      bullets: [
        'Voz fluida con acento latino y modismos profesionales.',
        'Atención masiva de múltiples llamadas entrantes simultáneas.',
        'Derivación al departamento de ventas, soporte o cobros en segundos.',
      ],
      chatPreview: [
        { sender: 'client', text: '[Llamada entrante] Hola, hablo para saber si tienen cobertura de internet en Zapopan y precios.' },
        { sender: 'bot', text: '¡Hola! Qué gusto saludarte. Claro que sí, tenemos cobertura total en Zapopan con fibra simétrica. Permíteme transferirte con un asesor de ventas de la zona para darte costos exactos.' },
        { sender: 'client', text: 'Muchas gracias.' },
        { sender: 'bot', text: '[Llamada transferida a Ventas Zapopan]' },
      ]
    },
    leads: {
      title: 'Calificación y Captura de Leads',
      subtitle: 'Duplica tu tasa de conversión capturando prospectos al instante.',
      desc: 'Cuando un prospecto llama o escribe interesado, el agente de IA conversa con él de manera persuasiva. Califica su perfil haciendo las preguntas clave y guarda el registro enriquecido directamente en tu CRM.',
      bullets: [
        'Captura de nombre, empresa, presupuesto y necesidad real.',
        'Sincronización en tiempo real con HubSpot, Zoho, Salesforce o WhatsApp.',
        'Notificación instantánea para que tu equipo comercial cierre el trato.',
      ],
      chatPreview: [
        { sender: 'client', text: 'Hola, vi sus servicios y quiero cotizar telefonía para 15 personas.' },
        { sender: 'bot', text: '¡Hola! Excelente decisión. Para darte la mejor opción, ¿tienen conmutador actualmente o empezarían desde cero?' },
        { sender: 'client', text: 'Empezamos desde cero, trabajamos remoto.' },
        { sender: 'bot', text: '¡Perfecto para nuestro sistema en la nube! He guardado tus datos y asignado a nuestro consultor senior. Te llamará en 5 minutos al número registrado. ¡Que tengas gran día!' },
      ]
    }
  };

  const simulationQueries = [
    {
      q: '¿Cómo suena el agente de IA en una llamada de voz?',
      voice: 'Voz Femenina Profesional (Latinoamérica)',
      dialog: [
        { role: 'Usuario', text: 'Hola, quiero reagendar mi consulta de mañana, me surgió un contratiempo.' },
        { role: 'VOXAI AI', text: '¡Hola! No te preocupes, con gusto te ayudo. Veo que tienes cita mañana a las 10:00 AM con la Dra. Elena. Tengo disponible el jueves a las 11:30 AM o el viernes a las 4:00 PM. ¿Alguno te acomoda?' },
        { role: 'Usuario', text: 'El viernes a las 4:00 PM está perfecto.' },
        { role: 'VOXAI AI', text: 'Listo, acabo de reagendar tu cita para el viernes a las 4:00 PM. Ya se actualizó en nuestro sistema y te llegará un SMS con la confirmación. ¿Te puedo ayudar en algo más?' }
      ]
    },
    {
      q: '¿Cómo califica prospectos por WhatsApp de madrugada?',
      voice: 'Chat en Vivo 24/7 integrado a tu CRM',
      dialog: [
        { role: 'Usuario', text: 'Hola, me interesa una cotización de su plan corporativo de soporte.' },
        { role: 'VOXAI AI', text: '¡Hola! Qué gusto saludarte, soy el asistente virtual de soporte. Claro que sí, con mucho gusto. Para darte una propuesta exacta: ¿cuántos usuarios necesitan soporte en tu empresa?' },
        { role: 'Usuario', text: 'Somos aproximadamente 45 personas.' },
        { role: 'VOXAI AI', text: 'Excelente. ¿Cuentan actualmente con herramientas de tickets o sería la primera vez que implementan? Con este dato paso la cotización a nuestro ejecutivo.' },
        { role: 'Usuario', text: 'Ya usamos Jira pero queremos algo más simple.' },
        { role: 'VOXAI AI', text: '¡Entendido! He registrado que son 45 usuarios y buscan simplificar Jira. Nuestro ejecutivo comercial te contactará a las 9:00 AM con una cotización personalizada.' }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#0D1526]">
      <Navbar />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-20 bg-white">
        {/* Decorative Gradients */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'radial-gradient(circle at top right, rgba(0,170,236,0.08), transparent 35%), radial-gradient(circle at bottom left, rgba(4,65,140,0.05), transparent 30%)' 
          }} 
        />
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: 'rgba(0,170,236,0.15)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column: Value Proposition */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full mb-6 text-xs font-semibold bg-[#04418c]/10 text-[#04418c] border border-[#04418c]/20">
              <Brain size={13} className="text-[#04418c] animate-pulse" />
              VOXAI Inteligencia Artificial
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] text-[#0D1526] tracking-tight mb-6">
              El Agente de IA que <span className="bg-gradient-to-r from-[#04418c] to-[#00AAEC] bg-clip-text text-transparent">vende y atiende</span> por ti.
            </h1>
            
            <p className="text-lg md:text-xl text-[#5A6A85] font-normal leading-relaxed mb-8 max-w-xl">
              Imagina tener al mejor asesor de ventas y soporte disponible las 24 horas del día. Contesta llamadas de voz con tono humano y responde chats al instante. Cero tiempos de espera. Cero clientes perdidos.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link href="/agenda-reunion" className="btn-primary flex items-center justify-center gap-2 text-center">
                Agenda consultoría gratis
                <ArrowRight size={16} />
              </Link>
              <a href="#demo" className="btn-secondary flex items-center justify-center gap-2 text-center">
                Ver demostración
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-t border-slate-100 pt-6 w-full max-w-md">
              <div className="flex items-center gap-2 text-sm text-[#5A6A85]">
                <Check size={16} color="#00AAEC" strokeWidth={3} />
                <span>Voz ultra-natural e inteligente</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5A6A85]">
                <Check size={16} color="#00AAEC" strokeWidth={3} />
                <span>Integrado a tu CRM y WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5A6A85]">
                <Check size={16} color="#00AAEC" strokeWidth={3} />
                <span>Soporte 24/7 sin interrupciones</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5A6A85]">
                <Check size={16} color="#00AAEC" strokeWidth={3} />
                <span>Configuración lista en 72h</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Premium Interactive Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#04418c]/10 to-[#00AAEC]/10 blur-2xl rounded-3xl" />
            <div className="relative bg-slate-900/5 p-2 rounded-2xl border border-slate-100 backdrop-blur shadow-2xl">
              <div className="bg-slate-950 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                <Image
                  src="/voxai_ai_hero.png"
                  alt="VOXAI AI Agent Dashboard Mockup"
                  fill
                  priority
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating Micro Glassmorphic Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur border border-white/10 rounded-lg p-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 bg-emerald-500 rounded-full animate-ping" />
                    <div>
                      <p className="font-semibold text-white">VOXAI Agente de IA · Activo</p>
                      <p className="text-slate-400 text-[10px]">Resolviendo llamada de soporte #2481</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    99.4% Precisión
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Key Performance Stats Section ─────────────────────────────────── */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="voxai-card p-6 flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
                <TrendingDown size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0D1526]">-80% en Costos</h3>
                <p className="text-sm text-[#5A6A85] mt-1">
                  Hasta 8 veces menos gastos operativos comparado con la contratación y capacitación de personal de soporte nivel 1.
                </p>
              </div>
            </div>

            <div className="voxai-card p-6 flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0D1526]">70% Auto-Resolución</h3>
                <p className="text-sm text-[#5A6A85] mt-1">
                  El setenta por ciento de los chats y llamadas de tus clientes son resueltos en su totalidad de manera autónoma por la IA.
                </p>
              </div>
            </div>

            <div className="voxai-card p-6 flex items-start gap-4 hover:translate-y-[-2px] transition-transform">
              <div className="p-3 rounded-lg bg-purple-50 text-purple-600 flex-shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0D1526]">0s Tiempo de Espera</h3>
                <p className="text-sm text-[#5A6A85] mt-1">
                  Atención simultánea de cientos de llamadas o chats de manera concurrente. Tus clientes no volverán a escuchar música de espera.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Interactive Use-Case Showcase ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#00AAEC]">
              Funcionalidades Clave
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1526] mt-3">
              ¿Qué puede hacer el Agente de IA en tu empresa?
            </h2>
            <p className="text-base text-[#5A6A85] mt-3">
              Configuramos y entrenamos la inteligencia artificial con tu base de conocimientos bajo 4 pilares estratégicos de alto impacto empresarial.
            </p>
          </div>

          {/* Tabs header */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('citas')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 ${
                activeTab === 'citas'
                  ? 'bg-[#04418c] text-white border-[#04418c] shadow-md shadow-[#04418c]/15'
                  : 'bg-white text-[#5A6A85] border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Calendar size={15} />
              Agendar Citas
            </button>
            <button
              onClick={() => setActiveTab('soporte')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 ${
                activeTab === 'soporte'
                  ? 'bg-[#04418c] text-white border-[#04418c] shadow-md shadow-[#04418c]/15'
                  : 'bg-white text-[#5A6A85] border-slate-200 hover:bg-slate-50'
              }`}
            >
              <MessageSquare size={15} />
              Soporte 24/7
            </button>
            <button
              onClick={() => setActiveTab('recepcion')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 ${
                activeTab === 'recepcion'
                  ? 'bg-[#04418c] text-white border-[#04418c] shadow-md shadow-[#04418c]/15'
                  : 'bg-white text-[#5A6A85] border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Phone size={15} />
              Recepcionista Virtual
            </button>
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all flex items-center gap-2 ${
                activeTab === 'leads'
                  ? 'bg-[#04418c] text-white border-[#04418c] shadow-md shadow-[#04418c]/15'
                  : 'bg-white text-[#5A6A85] border-slate-200 hover:bg-slate-50'
              }`}
            >
              <UserCheck size={15} />
              Capturar Prospectos
            </button>
          </div>

          {/* Tab content display */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch max-w-6xl mx-auto">
            
            {/* Description Card */}
            <div className="voxai-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#00AAEC]">
                  Módulo Integrable
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#0D1526] mt-2 mb-4">
                  {tabsInfo[activeTab].title}
                </h3>
                <p className="text-[#04418c] font-semibold text-sm mb-4">
                  {tabsInfo[activeTab].subtitle}
                </p>
                <p className="text-[#5A6A85] text-sm leading-relaxed mb-6">
                  {tabsInfo[activeTab].desc}
                </p>
                
                <ul className="space-y-3.5">
                  {tabsInfo[activeTab].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#0D1526]">
                      <span className="flex-shrink-0 text-emerald-500 font-bold bg-emerald-50 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#00AAEC]/10 flex items-center justify-center text-[#00AAEC]">
                    <Zap size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Implementación</p>
                    <p className="text-xs font-bold text-[#0D1526]">Listo en 3 días hábiles</p>
                  </div>
                </div>
                
                <Link href="/agenda-reunion" className="text-sm font-bold text-[#04418c] hover:opacity-80 flex items-center gap-1 group">
                  Ver demo personalizada
                  <ChevronRight size={16} className="transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Interactive Mock Chat Simulator */}
            <div className="bg-[#0D1526] text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between min-h-[350px]">
              <div>
                {/* Simulator Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 h-8 rounded-full bg-[#00AAEC] flex items-center justify-center text-white">
                      <Bot size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">VOXAI Assistant</p>
                      <p className="text-[9px] text-[#00AAEC] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        En línea · IA Inteligente
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Simulador de Chat</span>
                </div>

                {/* Messages Container */}
                <div className="space-y-3.5 max-h-[260px] overflow-y-auto pr-1">
                  {tabsInfo[activeTab].chatPreview.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col max-w-[85%] ${
                        msg.sender === 'client' ? 'ml-auto items-end' : 'mr-auto items-start'
                      }`}
                    >
                      <div
                        className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'client'
                            ? 'bg-[#04418c] text-white rounded-tr-none'
                            : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/50'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-slate-600 mt-1">
                        {msg.sender === 'client' ? 'Cliente' : 'Agente de IA VOXAI'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>Acción: Simulación de flujo de trabajo interactivo</span>
                <span className="flex items-center gap-1 font-bold text-[#00AAEC]">
                  Prueba en vivo
                  <Zap size={12} />
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Live Demo voice/chat simulation Section ───────────────────────── */}
      <section id="demo" className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(0,170,236,0.1), transparent 40%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#00AAEC]">
              Prueba Interactiva
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">
              Escucha o lee la diferencia en tiempo real
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nuestra IA no lee plantillas robóticas aburridas. Resuelve interacciones complejas entendiendo el contexto e intenciones de la conversación.
            </p>
            
            <div className="space-y-3">
              {simulationQueries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setDemoQuery(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    demoQuery === idx
                      ? 'bg-slate-900 border-[#00AAEC] text-white shadow-lg'
                      : 'bg-transparent border-slate-800 text-slate-400 hover:bg-slate-900/50'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#00AAEC] uppercase tracking-wider mb-1">Simulación {idx + 1}</p>
                    <p className="text-sm font-semibold">{item.q}</p>
                  </div>
                  <ChevronRight size={18} className={`transform transition-transform ${demoQuery === idx ? 'rotate-90 text-[#00AAEC]' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Simulation Output Area */}
          <div className="bg-[#050D1A] border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <p className="text-[10px] text-[#00AAEC] uppercase tracking-widest font-black">Consola de Simulación</p>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">{simulationQueries[demoQuery].voice}</p>
                </div>
                
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00AAEC]/10 border border-[#00AAEC]/20 text-[10px] text-[#00AAEC] font-bold">
                  <Volume2 size={12} />
                  ACENTO LOCAL
                </span>
              </div>

              {/* Console logs */}
              <div className="space-y-4 font-mono text-xs">
                {simulationQueries[demoQuery].dialog.map((msg, idx) => (
                  <div key={idx} className="grid grid-cols-[80px_1fr] gap-3 items-start">
                    <span className={`font-bold ${msg.role === 'Usuario' ? 'text-slate-400' : 'text-[#00AAEC]'}`}>
                      {msg.role}:
                    </span>
                    <p className={msg.role === 'Usuario' ? 'text-slate-300' : 'text-white font-medium bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80'}>
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-5 mt-8 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                Latencia: 0.8s
              </span>
              <span>Integrado con APIs de Voz y Texto de VOXAI OS</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Advantages Section ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="bg-[#0D1526] text-white rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(circle at top right, rgba(0,170,236,0.2), transparent 45%), radial-gradient(circle at bottom left, rgba(4,65,140,0.2), transparent 45%)'
              }}
            />
            
            <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#00AAEC]">
                  La Ventaja VOXAI IA
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6 leading-tight">
                  Eleva tu servicio al cliente al siguiente nivel tecnológico
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Mientras tus competidores duermen o pierden llamadas por estar ocupados, tu agente de IA atiende a miles de clientes al mismo tiempo, sin demoras y sin errores.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="voxai-card bg-slate-900/60 border-slate-800 p-4 text-center">
                    <p className="text-3xl font-black text-[#00AAEC]">100%</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Llamadas Atendidas</p>
                  </div>
                  <div className="voxai-card bg-slate-900/60 border-slate-800 p-4 text-center">
                    <p className="text-3xl font-black text-[#00AAEC]">24/7</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Disponibilidad Real</p>
                  </div>
                </div>
              </div>

              {/* Grid of micro cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                
                <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                  <div className="h-9 w-9 rounded-lg bg-[#00AAEC]/10 text-[#00AAEC] flex items-center justify-center mb-4">
                    <Clock size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Servicio Ininterrumpido</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Atención constante las 24 horas del día. Tus clientes obtienen información, agendan citas o aclaran dudas incluso a media noche.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                  <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <Smile size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Experiencia Consistente</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cero días malos, cansancio o fallas de humor. Cada cliente recibe un trato profesional, paciente y con respuestas exactas en todo momento.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                  <div className="h-9 w-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                    <TrendingDown size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Costos Reducidos</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Evita gastos en infraestructura física, licencias redundantes, y amplía tu alcance operativo pagando solo por consumo de interacciones.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
                  <div className="h-9 w-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <Brain size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">Impacto en Humanos</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Libera a tus colaboradores de contestar preguntas repetitivas para que se enfoquen en cerrar tratos complejos de alto valor.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Custom Pricing Section ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#00AAEC]">
              Paquetes PyME y Empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1526] mt-3">
              Planes claros y adaptados a tu volumen de llamadas
            </h2>
            <p className="text-base text-[#5A6A85] mt-3">
              Sin sorpresas ni contratos de permanencia obligatorios. Elige según tus necesidades operativas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div>
                <p className="text-xs font-black text-[#00AAEC] uppercase tracking-wider mb-2">Básico PyME</p>
                <h3 className="text-2xl font-black text-[#0D1526]">30,000 minutos</h3>
                <p className="text-xs text-slate-400 mt-1">De interacciones de voz/texto</p>
                
                <div className="border-t border-slate-100 my-5 pt-5 space-y-3 text-xs text-[#5A6A85]">
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    1 Agente de IA Personalizado
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Integración con WhatsApp y Voz
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Soporte estándar por correo
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Conexión básica de calendario
                  </p>
                </div>
              </div>

              <Link href="/agenda-reunion" className="btn-secondary w-full text-center mt-6 py-2.5 text-xs">
                Cotizar Plan Básico
              </Link>
            </div>

            {/* Plan 2: Destacado */}
            <div className="bg-white rounded-2xl border-2 border-[#04418c] p-6 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#04418c] text-white text-[9px] uppercase font-black tracking-wider py-1 px-4 rounded-bl-lg">
                Recomendado
              </div>
              
              <div>
                <p className="text-xs font-black text-[#04418c] uppercase tracking-wider mb-2">Crecimiento</p>
                <h3 className="text-2xl font-black text-[#0D1526]">60,000 minutos</h3>
                <p className="text-xs text-slate-400 mt-1">De interacciones de voz/texto</p>
                
                <div className="border-t border-slate-100 my-5 pt-5 space-y-3 text-xs text-[#5A6A85]">
                  <p className="flex items-center gap-2 font-semibold text-[#0D1526]">
                    <Check size={14} className="text-emerald-500" />
                    Hasta 3 Agentes de IA
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Integración premium a CRM (HubSpot/Zoho)
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Soporte prioritario vía WhatsApp
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Conexión avanzada multicanal
                  </p>
                </div>
              </div>

              <Link href="/agenda-reunion" className="btn-primary w-full text-center mt-6 py-2.5 text-xs shadow-md shadow-[#04418c]/15">
                Cotizar Crecimiento
              </Link>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div>
                <p className="text-xs font-black text-[#00AAEC] uppercase tracking-wider mb-2">Escala Pro</p>
                <h3 className="text-2xl font-black text-[#0D1526]">180,000 minutos</h3>
                <p className="text-xs text-slate-400 mt-1">De interacciones de voz/texto</p>
                
                <div className="border-t border-slate-100 my-5 pt-5 space-y-3 text-xs text-[#5A6A85]">
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Agentes de IA ilimitados
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Integraciones personalizadas (API)
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Gerente de cuenta dedicado 24/7
                  </p>
                  <p className="flex items-center gap-2">
                    <Check size={14} className="text-emerald-500" />
                    Dashboard de analíticas avanzado
                  </p>
                </div>
              </div>

              <Link href="/agenda-reunion" className="btn-secondary w-full text-center mt-6 py-2.5 text-xs">
                Cotizar Plan Escala
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Frequently Asked Questions Section ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#00AAEC]">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[#0D1526] mt-2">
              Preguntas frecuentes sobre Agentes de IA
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: '¿Cómo suena el agente de IA? ¿Se nota que es un robot?',
                a: 'Suena increíblemente natural. Nuestros modelos están optimizados para hablar con acento latino, utilizar modismos locales profesionales y realizar pausas humanas (como respiración o interjecciones leves). La conversación fluye de forma sumamente amigable.'
              },
              {
                q: '¿Cómo se conecta con mis sistemas actuales?',
                a: 'Se integra de forma nativa mediante APIs con tus herramientas de agendamiento (Cal.com, Google Calendar, Outlook) y tu CRM preferido (HubSpot, Zoho, Salesforce, etc.), de modo que la información queda guardada al instante.'
              },
              {
                q: '¿Cuánto tiempo toma tenerlo implementado en mi empresa?',
                a: 'Podemos tener tu agente conversacional configurado, entrenado con tu base de conocimientos y listo para producción en aproximadamente 3 días hábiles.'
              },
              {
                q: '¿Qué pasa si el agente de IA no entiende al cliente?',
                a: 'El agente de IA cuenta con un módulo de transferencia inteligente. Si detecta una solicitud sumamente compleja o una frustración por parte del usuario, transfiere la llamada a un agente humano en tiempo real junto con todo el historial de la conversación.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-[#0D1526] text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#5A6A85] transform transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-180 text-[#00AAEC]' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-5 border-t border-slate-100 bg-white">
                    <p className="text-xs md:text-sm text-[#5A6A85] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── High-Converting Final CTA Section ────────────────────────────── */}
      <section className="pb-24 pt-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0D1526] via-[#0D1526] to-[#04418c] text-white p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle at bottom right, rgba(0,170,236,0.35), transparent 45%)' }} />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center gap-1 bg-[#00AAEC]/10 text-[#00AAEC] border border-[#00AAEC]/20 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider mb-6">
                Consultoría de IA Gratis
              </span>
              
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-5">
                Recibe una consultoría gratuita con nuestros expertos en comunicación, agentes de IA y digitalización
              </h2>
              
              <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Analizamos tu operación actual y te decimos exactamente qué estás perdiendo — y cómo resolverlo con automatizaciones inteligentes. Sin costo. Sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link href="/agenda-reunion" className="btn-primary bg-[#00AAEC] hover:bg-[#00AAEC]/90 text-white font-bold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00AAEC]/15">
                  Agendar reunión ahora
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:+52" className="btn-secondary border-slate-700 hover:bg-slate-900 text-white px-8 py-3.5 rounded-full text-center">
                  Llamar a un consultor
                </a>
              </div>

              {/* Extra reassurance badge */}
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mt-8">
                ★ 72 horas promedio de implementación · Soporte 24/7 en español
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
