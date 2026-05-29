'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Target, 
  PhoneCall, 
  Compass 
} from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const points = [
    {
      icon: Target,
      iconColor: '#5BC4F5',
      iconBg: 'rgba(91, 196, 245, 0.1)',
      title: 'Diagnóstico personalizado de tu clínica',
      desc: 'Evaluamos tu sistema actual, canales activos y tiempos de respuesta.',
    },
    {
      icon: PhoneCall,
      iconColor: '#10B981',
      iconBg: 'rgba(16, 185, 129, 0.1)',
      title: '30 minutos con un especialista en comunicaciones',
      desc: 'Sesión estratégica uno a uno interactiva para mapear flujos.',
    },
    {
      icon: Compass,
      iconColor: '#8B5CF6',
      iconBg: 'rgba(139, 92, 246, 0.1)',
      title: 'Plan de acción concreto que te llevas',
      desc: 'Una hoja de ruta accionable y clara de inmediato, contrates o no.',
    },
  ];

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-10 md:py-28 text-white"
      style={{ background: '#0A1628' }}
    >
      {/* Premium glow effect in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00AAEC 0%, #04418c 70%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span
              className="text-[10px] font-black uppercase tracking-[0.24em] text-[#5BC4F5] mb-5 px-3.5 py-1.5 rounded-full border"
              style={{
                background: 'rgba(91, 196, 245, 0.10)',
                borderColor: 'rgba(91, 196, 245, 0.15)',
              }}
            >
              Sin costo · Sin compromiso
            </span>
            
            <h2 className="text-2xl md:text-5xl font-black leading-[1.15] mb-6 tracking-tight">
              Recibe una{' '}
              <span
                className="bg-gradient-to-r from-[#5BC4F5] to-[#00AAEC] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                consultoría gratuita
              </span>{' '}
              con nuestros expertos en comunicación, agentes de IA y digitalización
            </h2>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
              Analizamos tu operación actual y te decimos exactamente qué estás perdiendo — y cómo resolverlo. Sin costo. Sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="w-full sm:w-auto">
                <Link
                  href="/agenda-reunion"
                  className="px-8 py-4 text-sm font-bold flex items-center justify-center gap-2 rounded-full transition-transform w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #00AAEC 0%, #04418c 100%)',
                    color: '#ffffff',
                    boxShadow: '0 8px 30px rgba(0, 170, 236, 0.3)',
                  }}
                >
                  Quiero mi consultoría gratis
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="w-full sm:w-auto">
                <a
                  href="https://wa.me/523348663113?text=Hola, quiero más información sobre VOXAI"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 rounded-full border text-white hover:bg-white/5 transition-all w-full sm:w-auto"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <MessageCircle size={17} strokeWidth={2} />
                  Hablar por WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Social proof nudge */}
            <div className="flex items-center gap-3 mt-10 opacity-90">
              <div className="flex -space-x-2">
                <div
                  className="w-7 h-7 rounded-full border bg-white flex items-center justify-center overflow-hidden p-1"
                  style={{ 
                    borderColor: '#0A1628',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    position: 'relative'
                  }}
                  title="Domino's"
                >
                  <Image src="/logos/dominos.svg" alt="Domino's" width={18} height={18} className="w-full h-full object-contain" />
                </div>
                <div
                  className="w-7 h-7 rounded-full border bg-white flex items-center justify-center overflow-hidden p-1.5"
                  style={{ 
                    borderColor: '#0A1628',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    position: 'relative'
                  }}
                  title="Subway"
                >
                  <Image src="/logos/subway.svg" alt="Subway" width={16} height={16} className="w-full h-full object-contain" />
                </div>
                <div
                  className="w-7 h-7 rounded-full border bg-white flex items-center justify-center overflow-hidden p-1"
                  style={{ 
                    borderColor: '#0A1628',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    position: 'relative'
                  }}
                  title="Danone"
                >
                  <Image src="/logos/danone.svg" alt="Danone" width={18} height={18} className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Más de <span className="text-white font-bold">100 empresas</span> ya recibieron su diagnóstico
              </p>
            </div>
          </motion.div>

          {/* Right Column: Points of Value Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-3xl p-8 md:p-10 border relative overflow-hidden backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.06)',
              }}
            >
              <h3 className="text-base font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-[#5BC4F5]">✦</span> ¿Qué incluye tu consultoría?
              </h3>

              <div className="flex flex-col gap-3 md:gap-5">
                {points.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -2, scale: 1.01, background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255,255,255,0.1)' }}
                      className="flex gap-4 items-start p-4.5 rounded-2xl border transition-all duration-300 cursor-default"
                      style={{
                        background: 'rgba(255, 255, 255, 0.01)',
                        borderColor: 'rgba(255, 255, 255, 0.04)',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: item.iconBg,
                        }}
                      >
                        <Icon size={18} color={item.iconColor} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-xs font-bold md:font-black text-white mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-[11px] leading-relaxed text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
