import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Sparkles } from 'lucide-react';
import AgendaStepper from '@/components/AgendaStepper';

export default function AgendaReunionPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] text-[#0D1526] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(26,58,143,0.12), transparent 34%), radial-gradient(circle at bottom right, rgba(0,170,236,0.10), transparent 28%)',
        }}
      />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full blur-3xl opacity-40 bg-[#1A3A8F]/10 pointer-events-none" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full blur-3xl opacity-40 bg-[#00AAEC]/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-10">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/iconoedanka.png"
              alt="Edanka"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#5A6A85]">Edanka</p>
              <p className="font-semibold text-sm text-[#0D1526]">Agenda una reunión</p>
            </div>
          </Link>

          <Link href="/" className="text-sm font-medium text-[#1A3A8F] hover:opacity-80 transition-opacity">
            Volver al inicio
          </Link>
        </header>

        <section className="mt-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            <p className="badge-glow w-fit">
              <CalendarDays size={14} />
              Agenda simple y sin fricción
            </p>

            <div className="space-y-5 max-w-2xl">
              <h1
                className="font-black leading-tight text-[#0D1526]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}
              >
                Agenda una reunión con nuestro equipo en pocos pasos
              </h1>
              <p className="text-lg leading-relaxed text-[#5A6A85] max-w-xl">
                Elige tu contexto, selecciona un horario y comparte tus datos en una experiencia más guiada,
                tipo Typeform, sin fricción y con mejor ritmo visual.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: '4 pasos', label: 'Flujo corto y guiado' },
                { value: '1 min', label: 'Tiempo estimado para completar' },
                { value: '72 hrs', label: 'Implementación rápida una vez aprobado' },
              ].map(item => (
                <div key={item.value} className="edanka-card p-5">
                  <p className="text-2xl font-black text-[#0D1526]">{item.value}</p>
                  <p className="text-sm leading-relaxed mt-2 text-[#5A6A85]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="edanka-card p-6 lg:p-7">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={18} style={{ color: '#00AAEC' }} />
                <p className="font-semibold text-[#0D1526]">Qué puedes esperar</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5A6A85]">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">Revisamos tu flujo de llamadas, horarios y volumen actual.</div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">Te mostramos un plan visual con los siguientes pasos y tiempos.</div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">Sin hardware, sin complicaciones y con acompañamiento real.</div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">Agenda en pocos clics y confirma el mejor horario para tu equipo.</div>
              </div>
            </div>
          </div>

          <AgendaStepper />
        </section>
      </div>
    </main>
  );
}