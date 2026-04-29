'use client';

import { useMemo, useState } from 'react';
import { CalendarDays, Clock3, Sparkles, UsersRound } from 'lucide-react';
import Stepper, { Step } from './Stepper';

const calendarYear = 2026;
const calendarMonthIndex = 4;
const monthLabel = 'Mayo 2026';

const agents = [
  { name: 'Mariana López', role: 'Enterprise Solutions', availability: 'Lun a Vie · 9:00 - 15:00' },
  { name: 'Carlos Rivera', role: 'Especialista en CX', availability: 'Lun a Jue · 10:00 - 17:30' },
  { name: 'Sofía Torres', role: 'Implementación rápida', availability: 'Mar a Sáb · 9:30 - 16:00' },
];

const timeSlots = ['09:00', '10:30', '12:00', '14:30', '16:00', '17:30'];
const useCases = [
  { title: 'Quiero ordenar llamadas', description: 'Centralizar atención y evitar llamadas perdidas.' },
  { title: 'Quiero reemplazar WhatsApp personal', description: 'Dar trazabilidad y control al equipo.' },
  { title: 'Quiero medir ventas y soporte', description: 'Ver métricas y mejorar desempeño.' },
  { title: 'Quiero cotizar una solución completa', description: 'UCaaS, SIP Trunking o CCaaS según mi caso.' },
];

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

export default function AgendaStepper() {
  const [selectedDay, setSelectedDay] = useState(12);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]);
  const [selectedAgent, setSelectedAgent] = useState(agents[0].name);
  const [useCase, setUseCase] = useState(useCases[0].title);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    context: '',
  });

  const selectedAgentData = useMemo(
    () => agents.find(agent => agent.name === selectedAgent) ?? agents[0],
    [selectedAgent]
  );

  if (submitted) {
    return (
      <div className="edanka-card p-8 lg:p-10 bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(13,21,38,0.12)] rounded-[28px] border border-[#E2E8F0] h-full flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(26,58,143,0.08)', color: '#1A3A8F' }}>
            <Sparkles size={28} />
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85] mb-3">Solicitud enviada</p>
          <h3 className="text-3xl font-bold text-[#0D1526] mb-4">Gracias, ya tenemos tu información</h3>
          <p className="text-[#5A6A85] leading-relaxed">
            Te contactaremos pronto para confirmar la reunión y prepararte una propuesta alineada a tu operación.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex items-center">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={() => setSubmitted(true)}
        backButtonText="Anterior"
        nextButtonText="Continuar"
        completeButtonText="Solicitar demo"
      >
        <Step>
          <div className="space-y-6">
            <p className="badge-glow w-fit">
              <CalendarDays size={14} />
              Agenda simple y sin fricción
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Paso 1 de 4</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0D1526] leading-tight">¿Cómo se llama tu empresa?</h2>
              <p className="text-[#5A6A85] leading-relaxed max-w-xl">Queremos personalizar la demo con tu contexto y tamaño de operación.</p>
            </div>
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                Tu nombre
                <input
                  className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                  placeholder="Nombre y apellido"
                  type="text"
                  value={formData.name}
                  onChange={event => setFormData(prev => ({ ...prev, name: event.target.value }))}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                Empresa
                <input
                  className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                  placeholder="Nombre de tu empresa"
                  type="text"
                  value={formData.company}
                  onChange={event => setFormData(prev => ({ ...prev, company: event.target.value }))}
                />
              </label>
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-6">
            <p className="badge-glow w-fit">
              <UsersRound size={14} />
              Entendemos tu operación
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Paso 2 de 4</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0D1526] leading-tight">¿Qué quieres resolver primero?</h2>
              <p className="text-[#5A6A85] leading-relaxed max-w-xl">Selecciona el objetivo principal para enfocar la llamada con el equipo correcto.</p>
            </div>
            <div className="grid gap-3">
              {useCases.map(option => {
                const active = useCase === option.title;
                return (
                  <button
                    key={option.title}
                    type="button"
                    onClick={() => setUseCase(option.title)}
                    className="text-left rounded-2xl border p-4 transition-all duration-200"
                    style={{
                      borderColor: active ? '#00AAEC' : '#E2E8F0',
                      background: active ? 'rgba(0,170,236,0.06)' : '#FFFFFF',
                      boxShadow: active ? '0 14px 28px rgba(0,170,236,0.08)' : 'none',
                    }}
                  >
                    <p className="font-semibold text-[#0D1526]">{option.title}</p>
                    <p className="text-sm text-[#5A6A85] mt-1">{option.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-6">
            <p className="badge-glow w-fit">
              <Clock3 size={14} />
              Elige tu horario
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Paso 3 de 4</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0D1526] leading-tight">¿Cuándo te queda mejor?</h2>
              <p className="text-[#5A6A85] leading-relaxed max-w-xl">Selecciona una fecha y hora que sí le funcione a tu equipo.</p>
            </div>

            <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FBFF] p-4 lg:p-5">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Calendario</p>
                  <h3 className="text-xl font-bold text-[#0D1526] mt-1">{monthLabel}</h3>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-[0.7rem] uppercase tracking-[0.2em] text-[#5A6A85] mb-3">
                {weekdayLabels.map(label => <span key={label}>{label}</span>)}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarCells.map((day, index) => {
                  if (!day) return <div key={`blank-${index}`} className="aspect-square" />;

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
            </div>

            <div>
              <div className="flex items-center gap-2 text-[#0D1526] font-semibold mb-3">
                <Clock3 size={16} style={{ color: '#00AAEC' }} />
                Hora disponible
              </div>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map(slot => {
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

            <div>
              <p className="text-sm font-semibold text-[#0D1526] mb-3">¿Con quién quieres hablar?</p>
              <div className="grid gap-3">
                {agents.map(agent => {
                  const active = selectedAgent === agent.name;
                  return (
                    <button
                      key={agent.name}
                      type="button"
                      onClick={() => setSelectedAgent(agent.name)}
                      className="w-full rounded-2xl border p-4 text-left bg-white transition-all duration-200"
                      style={{
                        borderColor: active ? '#00AAEC' : '#E2E8F0',
                        background: active ? 'rgba(0,170,236,0.04)' : '#FFFFFF',
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-[#0D1526]">{agent.name}</p>
                          <p className="text-sm text-[#5A6A85]">{agent.role}</p>
                        </div>
                        <span className="text-xs font-medium text-[#1A3A8F]">{agent.availability}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-6">
            <p className="badge-glow w-fit">
              <Sparkles size={14} />
              Casi listo
            </p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#5A6A85]">Paso 4 de 4</p>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0D1526] leading-tight">Déjanos tus datos para confirmar</h2>
              <p className="text-[#5A6A85] leading-relaxed max-w-xl">Con esto te confirmamos la reunión y preparamos el contexto antes de hablar.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                Correo
                <input
                  className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                  placeholder="hola@empresa.com"
                  type="email"
                  value={formData.email}
                  onChange={event => setFormData(prev => ({ ...prev, email: event.target.value }))}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
                Teléfono
                <input
                  className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC]"
                  placeholder="+52 000 000 0000"
                  type="tel"
                  value={formData.phone}
                  onChange={event => setFormData(prev => ({ ...prev, phone: event.target.value }))}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-[#0D1526]">
              Contexto breve
              <textarea
                className="min-h-28 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none focus:border-[#00AAEC] resize-none"
                placeholder="Cuéntanos cuántas llamadas reciben, qué equipo participa y qué te gustaría resolver."
                value={formData.context}
                onChange={event => setFormData(prev => ({ ...prev, context: event.target.value }))}
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
                  <p className="font-semibold">{selectedAgentData.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Step>
      </Stepper>
    </div>
  );
}