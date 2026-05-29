import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Sparkles, Clock, Users, Zap } from 'lucide-react';
import CalEmbed from '@/components/CalEmbed';

export const metadata = {
  title: 'Agenda una reunión | VOXAI',
  description: 'Elige el horario que más te convenga y habla con un especialista de VOXAI. Implementación en 72 horas.',
};

export default function AgendaReunionPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#0D1526] relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(4,65,140,0.08), transparent 34%), radial-gradient(circle at bottom right, rgba(4,65,140,0.05), transparent 28%)',
        }}
      />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'rgba(4,65,140,0.1)' }} />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: 'rgba(4,65,140,0.07)' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-10">

        {/* Header */}
        <header className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logofinal.svg"
              alt="VOXAI"
              width={96}
              height={32}
              className="w-24 h-auto object-contain"
            />
            <div className="hidden sm:block" style={{ borderLeft: '1px solid #E2E8F0', paddingLeft: '12px' }}>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#5A6A85]">VOXAI</p>
              <p className="font-semibold text-sm text-[#0D1526]">Agenda una reunión</p>
            </div>
          </Link>

          <Link href="/" className="text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: '#04418c' }}>
            ← Volver al inicio
          </Link>
        </header>

        {/* Main grid */}
        <section className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-start">

          {/* Left: copy */}
          <div className="space-y-6 sm:space-y-7">
            <div>
              <p className="badge-glow w-fit mb-5">
                <CalendarDays size={14} />
                Sin formularios largos · Elige tu horario
              </p>

              <h1
                className="font-black leading-tight text-[#0D1526] mb-4 text-2xl sm:text-3xl lg:text-[40px]"
                style={{ letterSpacing: '-0.03em' }}
              >
                Recibe una consultoría gratuita con nuestros expertos en comunicación, agentes de IA y digitalización
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-[#5A6A85] max-w-md">
                Analizamos tu operación actual y te decimos exactamente qué estás perdiendo — y cómo resolverlo. Sin costo. Sin compromiso.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { icon: Clock, value: '30 min', label: 'Duración' },
                { icon: Users, value: 'Gratis', label: 'Sin costo' },
                { icon: Zap, value: '72 hrs', label: 'Implementación' },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.value} className="voxai-card p-2 sm:p-4 text-center">
                    <Icon size={18} strokeWidth={1.5} color="#04418c" className="mx-auto mb-2" />
                    <p className="text-sm sm:text-lg font-black text-[#0D1526]">{item.value}</p>
                    <p className="text-[10px] sm:text-xs text-[#5A6A85] mt-0.5">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* What to expect */}
            <div className="voxai-card p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={16} style={{ color: '#04418c' }} />
                <p className="font-semibold text-[#0D1526] text-sm">Qué vas a obtener</p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Revisamos tu flujo de llamadas y volumen actual',
                  'Plan visual con tiempos y siguientes pasos',
                  'Demo en vivo de la plataforma',
                  'Sin hardware, sin contratos, sin complicaciones',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5A6A85]">
                    <span style={{ color: '#04418c', fontSize: '16px', lineHeight: 1, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Cal.com embed */}
          <div
            className="voxai-card overflow-hidden min-h-[500px] md:min-h-[600px]"
            style={{ padding: 0 }}
          >
            <CalEmbed />
          </div>
        </section>
      </div>
    </main>
  );
}