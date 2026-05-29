import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Building2, Phone, Users, BarChart3, Bot, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Solución para Inmobiliarias | VOXAI',
  description: 'Nunca pierdas un lead inmobiliario. Comunicación VoIP y agentes de IA para brokers y agencias de bienes raíces.',
};

const features = [
  {
    icon: Phone,
    title: 'Respuesta inmediata al lead',
    description: 'El primer agente disponible recibe la llamada al instante. Sin tiempos de espera que hacen perder al comprador.',
  },
  {
    icon: Bot,
    title: 'IA que califica al prospecto',
    description: 'El agente de IA detecta si es comprador, inversionista o arrendatario y lo dirige al broker especialista.',
  },
  {
    icon: Users,
    title: 'Gestión de tu equipo de brokers',
    description: 'Asigna leads por zona, tipo de inmueble o broker. Todos en la misma plataforma, sin WhatsApp personal.',
  },
  {
    icon: BarChart3,
    title: 'Trazabilidad de cada lead',
    description: 'Historial completo de llamadas por prospecto. Sabe quién llamó, cuándo y qué se acordó.',
  },
];

const resultados = [
  { value: '100%', label: 'Leads atendidos', sub: 'sin importar el horario' },
  { value: '3x', label: 'Más conversiones', sub: 'vs. comunicación manual' },
  { value: '72 hrs', label: 'De implementación', sub: 'sin hardware, sin técnicos' },
];

const checklist = [
  'Líneas VoIP y PBX en la nube',
  'Distribución automática de llamadas por broker',
  'Grabación y transcripción de llamadas',
  'Integración con CRM inmobiliario',
  'IA para atención fuera de horario',
  'Panel de métricas por broker',
  'Soporte dedicado incluido',
];

export default function InmobiliariasPage() {
  return (
    <main className="min-h-screen" style={{ background: '#ffffff', color: '#0F0F0F' }}>

      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #f0f5ff 0%, #ffffff 60%)',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 14px', borderRadius: '999px',
            background: 'rgba(4,65,140,0.07)', border: '1px solid rgba(4,65,140,0.14)',
            marginBottom: '24px',
          }}>
            <Building2 size={14} strokeWidth={2} color="#04418c" />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#04418c', letterSpacing: '0.04em' }}>
              Solución para Inmobiliarias
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
            lineHeight: 1.08, letterSpacing: '-0.03em',
            maxWidth: '680px', marginBottom: '20px',
          }}>
            Un lead inmobiliario que no contestan{' '}
            <span style={{ color: '#04418c' }}>es una comisión perdida</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: 1.7, maxWidth: '540px', marginBottom: '36px' }}>
            Centraliza las llamadas de todos tus brokers, atiende leads 24/7 con IA y nunca pierdas un prospecto por falta de respuesta.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/agenda-reunion" className="btn-primary"
              style={{ fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Solicitar demo gratuita <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/523348663113" target="_blank" rel="noreferrer" className="btn-ghost"
              style={{ fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
              <MessageCircle size={18} strokeWidth={1.5} color="#6b7280" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '48px 0', borderBottom: '1px solid #E5E7EB', background: '#FAFBFC' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
            {resultados.map((r) => (
              <div key={r.label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '42px', fontWeight: 800, color: '#04418c', lineHeight: 1 }}>{r.value}</p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#0F0F0F', marginTop: '6px' }}>{r.label}</p>
                <p style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '2px' }}>{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#0F0F0F', marginBottom: '12px' }}>
              Diseñado para el ritmo de las inmobiliarias
            </h2>
            <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '480px', margin: '0 auto' }}>
              Velocidad de respuesta, trazabilidad de leads y control total sobre tu equipo de brokers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card" style={{ padding: '28px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'rgba(4,65,140,0.08)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
                  }}>
                    <Icon size={22} strokeWidth={1.8} color="#04418c" />
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F0F0F', marginBottom: '8px' }}>{f.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.65 }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Checklist + CTA */}
      <section style={{ padding: '80px 0', background: '#FAFBFC', borderTop: '1px solid #E5E7EB' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
                Todo incluido desde el día uno
              </h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                {checklist.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} strokeWidth={2} color="#04418c" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#374151' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#04418c', borderRadius: '20px', padding: '40px', color: '#ffffff' }}>
              <Building2 size={36} strokeWidth={1.5} color="rgba(255,255,255,0.8)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                ¿Listo para no perder ni un lead más?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '28px' }}>
                En 72 horas tus brokers tendrán una línea unificada, IA atendiendo fuera de horario y trazabilidad completa de cada prospecto.
              </p>
              <Link href="/agenda-reunion" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#ffffff', color: '#04418c',
                padding: '12px 24px', borderRadius: '10px',
                fontWeight: 700, fontSize: '15px', textDecoration: 'none',
              }}>
                Agendar reunión gratis <ArrowRight size={16} />
              </Link>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '12px' }}>
                Sin contratos de permanencia · Sin hardware
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
