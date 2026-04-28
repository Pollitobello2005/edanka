'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const logos = [
  { name: 'Danone', src: '/logos/danone.svg' },
  { name: 'Dominos', src: '/logos/dominos.svg' },
  { name: 'Jaguar', src: '/logos/jaguar.svg' },
  { name: 'Kraft', src: '/logos/kraft.svg' },
  { name: 'ManpowerGroup', src: '/logos/manpowergroup.svg' },
  { name: 'Mattel', src: '/logos/mattel.svg' },
  { name: 'Pelikan', src: '/logos/pelikan.svg' },
  { name: 'Subway', src: '/logos/subway.svg' },
  { name: 'Under Armour', src: '/logos/underarmour.svg' },
  { name: 'WeWork', src: '/logos/wework.svg' },
];

const carouselLogos = [...logos, ...logos];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-shell section-surface-muted relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center label-copy font-medium mb-10"
          style={{ color: 'var(--color-text-label)' }}
        >
          Empresas que ya confían en nosotros
        </motion.p>

        <div className="partner-logos py-6 px-6">
          {logos.map((logo) => (
            <div key={logo.name} className="partner-logo flex items-center justify-center min-w-[100px] md:min-w-[140px]">
              <Image src={logo.src} alt={`Logo de ${logo.name}`} width={140} height={64} className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="stats-row mt-8"
        >
          <div className="text-center"><div className="stat-number">+500</div><div className="stat-label">Empresas en México</div></div>
          <div className="text-center"><div className="stat-number">72h</div><div className="stat-label">Implementación promedio</div></div>
          <div className="text-center"><div className="stat-number">99.99%</div><div className="stat-label">Uptime garantizado</div></div>
          <div className="text-center"><div className="stat-number">24/7</div><div className="stat-label">Soporte en español</div></div>
        </motion.div>
      </div>
    </section>
  );
}
