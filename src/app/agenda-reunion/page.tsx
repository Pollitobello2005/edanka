'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const calendarYear = 2026;
const calendarMonthIndex = 4;
const monthLabel = 'Mayo 2026';

const agents = [
  {
    name: 'Mariana López',
    role: 'Enterprise Solutions',
    availability: 'Lun a Vie · 9:00 - 15:00',
  },
  {
    name: 'Carlos Rivera',
    role: 'Especialista en CX',
    availability: 'Lun a Jue · 10:00 - 17:30',
  },
  {
    name: 'Sofía Torres',
    role: 'Implementación rápida',
    availability: 'Mar a Sáb · 9:30 - 16:00',
  },
];

const timeSlots = ['09:00', '10:30', '12:00', '14:30', '16:00', '17:30'];

const availableDays = new Set([1, 2, 5, 6, 7, 8, 11, 12, 14, 16, 19, 20, 23, 25, 27, 28, 30]);
const weekdayLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

function buildCalendarCells(year: number, monthIndex: number) {
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
  const leadingBlanks = (firstDayOfMonth + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return [...Array(leadingBlanks).fill(null), ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];
}

const calendarCells = buildCalendarCells(calendarYear, calendarMonthIndex);

function formatDayLabel(day: number) {
  return `${day} de mayo`;
}

export default function AgendaReunionPage() {
  const [selectedDay, setSelectedDay] = useState(12);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]);

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
                Agenda una reunión con alguno de nuestros agentes
              </h1>
              <p className="text-lg leading-relaxed text-[#5A6A85] max-w-xl">
                Elige una fecha, selecciona el horario que te conviene y comparte un poco de contexto.
                Te atenderemos con una propuesta clara, bonita y sin ida y vuelta innecesaria.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: '20 min', label: 'Sesión breve para entender tu operación' },
                { value: '3 agentes', label: 'Escoge con quién quieres hablar' },
                { value: '72 hrs', label: 'Implementación rápida una vez aprobado' },
              ].map((item) => (
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
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">
                  Revisamos tu flujo de llamadas, horarios y volumen actual.
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">
                  Te mostramos un plan visual con los siguientes pasos y tiempos.
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">
                  Sin hardware, sin complicaciones y con acompañamiento real.
                </div>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 p-4">
                  Agenda en pocos clics y confirma el mejor horario para tu equipo.
                </div>
              </div>
            </div>
          </div>

          <div className="edanka-card p-5 lg:p-6 bg-white/90 backdrop-blur-xl shadow-[0_30px_80px_rgba(13,21,38,0.08)] rounded-[28px] border border-[#E2E8F0]">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Calendario</p>
                <h2 className="text-2xl font-bold text-[#0D1526] mt-1">{monthLabel}</h2>
              </div>
              <div className="flex items-center gap-2 text-[#1A3A8F]">
                <button
                  type="button"
                  className="w-9 h-9 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center"
                  aria-label="Mes anterior"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  className="w-9 h-9 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center"
                  aria-label="Mes siguiente"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-[0.7rem] uppercase tracking-[0.2em] text-[#5A6A85] mb-3">
              {weekdayLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarCells.map((day, index) => {
                if (!day) {
                  return <div key={`blank-${index}`} className="aspect-square" />;
                }

                const selected = selectedDay === day;
                const available = availableDays.has(day);

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => available && setSelectedDay(day)}
                    disabled={!available}
                    className="aspect-square rounded-2xl border text-sm font-semibold transition-all duration-200 flex items-center justify-center"
                    style={{
                      background: selected ? 'linear-gradient(135deg, #1A3A8F 0%, #00AAEC 100%)' : available ? '#FFFFFF' : '#F5F7FA',
                      borderColor: selected ? 'transparent' : '#E2E8F0',
                      color: selected ? '#FFFFFF' : available ? '#0D1526' : '#A0AEC0',
                      boxShadow: selected ? '0 14px 28px rgba(0,170,236,0.22)' : 'none',
                      opacity: available ? 1 : 0.55,
                    }}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-[#E2E8F0] bg-[#F8FBFF] p-5">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-[#0D1526] font-semibold">
                  <Clock3 size={16} style={{ color: '#00AAEC' }} />
                  Hora disponible
                </div>
                <p className="text-sm text-[#5A6A85]">{formatDayLabel(selectedDay)}</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => {
                  const active = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className="rounded-2xl border px-3 py-3 text-sm font-semibold transition-all"
                      style={{
                        background: active ? 'linear-gradient(135deg, #1A3A8F 0%, #00AAEC 100%)' : '#FFFFFF',
                        borderColor: active ? 'transparent' : '#E2E8F0',
                        color: active ? '#FFFFFF' : '#0D1526',
                        boxShadow: active ? '0 12px 22px rgba(26,58,143,0.18)' : 'none',
                      }}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-sm font-semibold text-[#0D1526] mb-3">Escoge con quién quieres hablar</p>
                <div className="grid gap-3">
                  {agents.map((agent) => (
                    <div
                      key={agent.name}
                      className="w-full rounded-2xl border p-4 text-left bg-white"
                      style={{ borderColor: '#E2E8F0' }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-[#0D1526]">{agent.name}</p>
                          <p className="text-sm text-[#5A6A85]">{agent.role}</p>
                        </div>
                        <span className="text-xs font-medium text-[#1A3A8F]">{agent.availability}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                  Nombre completo
                  <input
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                    placeholder="Tu nombre"
                    type="text"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                  Empresa
                  <input
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                    placeholder="Nombre de tu empresa"
                    type="text"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                  Correo
                  <input
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                    placeholder="hola@empresa.com"
                    type="email"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                  Teléfono
                  <input
                    className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                    placeholder="+52 000 000 0000"
                    type="tel"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                Contexto breve
                <textarea
                  className="min-h-28 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC] resize-none"
                  placeholder="Cuéntanos cuántas llamadas reciben, qué equipo participa y qué te gustaría resolver."
                />
              </label>

              <div className="rounded-3xl border border-[#E2E8F0] bg-[#0D1526] p-5 text-white">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
                  <UsersRound size={16} />
                  Resumen de tu reunión
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-white/60 mb-1">Fecha</p>
                    <p className="font-semibold">{formatDayLabel(selectedDay)}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-white/60 mb-1">Hora</p>
                    <p className="font-semibold">{selectedSlot}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-white/60 mb-1">Agente</p>
                    <p className="font-semibold">{agents[0].name}</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn-primary px-6 py-4 text-base font-semibold flex items-center justify-center gap-2 rounded-2xl"
              >
                Confirmar reunión
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}