import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Truck, Phone, Radio, BarChart3, MessageSquare, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Solución para Logística | VOXAI',
  description: 'Comunicación en tiempo real para flotas, operadores y clientes. Plataforma VoIP diseñada para empresas de logística.',
};

const features = [
  {
    icon: Phone,
    title: 'Coordinación centralizada',
    description: 'Un solo número para toda la operación. Operadores, choferes y clientes en la misma plataforma, sin WhatsApps perdidos.',
  },
  {
    icon: Radio,
    title: 'Alertas y notificaciones en tiempo real',
    description: 'Llamadas automáticas de estado al cliente cuando su paquete sale, llega o tiene un retraso.',
  },
  {
    icon: MessageSquare,
    title: 'Soporte omnicanal al cliente',
    description: 'Atiende rastreos, incidencias y quejas por llamada, WhatsApp o chat desde un solo panel de agentes.',
  },
  {
    icon: BarChart3,
    title: 'Métricas operativas',
    description: 'Visualiza volumen de llamadas por ruta, tiempo de atención de incidencias y satisfacción del cliente en tiempo real.',
  },
];

const resultados = [
  { value: '-60%', label: 'Llamadas de rastreo', sub: 'con notificaciones automáticas' },
  { value: '100%', label: 'Visibilidad operativa', sub: 'en tiempo real' },
  { value: '72 hrs', label: 'De implementación', sub: 'sin hardware, sin técnicos' },
];

const checklist = [
  'PBX en la nube para toda la operación',
  'Marcador automático para notificaciones',
  'Grabación de todas las interacciones',
  'Integración con TMS o WMS',
  'IA para rastreo y consultas frecuentes',
  'Panel de métricas por ruta o zona',
  'Soporte dedicado incluido',
];

export default function LogisticaPage() {
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
            <Truck size={14} strokeWidth={2} color="#04418c" />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#04418c', letterSpacing: '0.04em' }}>
              Solución para Logística
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
            lineHeight: 1.08, letterSpacing: '-0.03em',
            maxWidth: '680px', marginBottom: '20px',
          }}>
            La comunicación que falla en logística{' '}
            <span style={{ color: '#04418c' }}>cuesta dinero real</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: 1.7, maxWidth: '540px', marginBottom: '36px' }}>
            Centraliza la coordinación de tu flota, automatiza notificaciones a clientes y elimina los WhatsApps caóticos de tu operación.
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
              Comunicación que mueve tu operación
            </h2>
            <p style={{ fontSize: '17px', color: '#6B7280', maxWidth: '480px', margin: '0 auto' }}>
              Velocidad, trazabilidad y control en cada punto de la cadena logística.
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
              <Truck size={36} strokeWidth={1.5} color="rgba(255,255,255,0.8)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                ¿Listo para eliminar el caos de comunicación?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: '28px' }}>
                En 72 horas tu operación tendrá comunicación centralizada, notificaciones automáticas y visibilidad total en tiempo real.
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
