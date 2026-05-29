'use client';

import { Zap, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#FFFFFF',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logofinal.svg"
                alt="VOXAI"
                width={144}
                height={48}
                className="w-36 h-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B7280', maxWidth: '320px' }}>
              Soluciones de comunicación unificada para PyMEs: VoIP, agentes de IA, automatización y software a medida. Partners oficiales de net2phone.
            </p>
            {/* net2phone badge and social */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'transparent',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Zap size={20} strokeWidth={1.5} color="#6b7280" />
                <span className="text-xs" style={{ color: '#6B7280' }}>Partners de</span>
                <Image src="/logos/net2phone.svg" alt="net2phone" width={100} height={28} className="h-6 w-auto" />
              </div>

              <a href="https://www.linkedin.com/company/voxaimx" target="_blank" rel="noreferrer" aria-label="VOXAI en LinkedIn" className="text-sm flex items-center gap-2" style={{ color: '#6B7280' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="#6b7280" strokeWidth="1.5" fill="transparent" />
                  <path d="M6.5 9.5V18M6.5 7.5V7.52M10 18V12.5c0-2 .5-3.5 2.5-3.5 1.8 0 2 1.6 2 3.3V18" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs" style={{ color: '#6B7280' }}>LinkedIn</span>
              </a>
            </div>
          </div>


          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#9CA3AF' }}>
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+523312345678"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#04418c')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                >
                  <Phone size={20} strokeWidth={1.5} color="#6b7280" />
                  +52 (33) 1234-5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@voxai.mx"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#04418c')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                >
                  <Mail size={20} strokeWidth={1.5} color="#6b7280" />
                  ventas@voxai.mx
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm" style={{ color: '#6B7280' }}>
                  <MapPin size={20} strokeWidth={1.5} color="#6b7280" />
                  Guadalajara, Jalisco · México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6" style={{ borderTop: '1px solid #E5E7EB' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            <p style={{ color: '#9CA3AF', fontSize: 12 }}>
              © {new Date().getFullYear()} VOXAI. Todos los derechos reservados.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 12 }} className="flex items-center gap-2">
              Plataforma impulsada por
              <Image src="/logos/net2phone.svg" alt="net2phone" width={90} height={24} className="h-5 w-auto" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
