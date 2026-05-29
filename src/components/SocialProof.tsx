'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from './CountUp';

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

const carouselLogos = [...logos, ...logos, ...logos, ...logos];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-8 md:py-16 section-surface-muted relative overflow-hidden"
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

        {/* Carousel container with gradient fading edges */}
        <div className="relative w-full overflow-hidden py-8 px-6 my-4">
          {/* Left and Right Fade Overlays */}
          <div
            className="absolute top-0 left-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--color-voxai-muted) 0%, transparent 100%)' }}
          />
          <div
            className="absolute top-0 right-0 bottom-0 w-20 md:w-36 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, var(--color-voxai-muted) 0%, transparent 100%)' }}
          />

          <div className="partner-logos">
            <div className="partner-track">
              {carouselLogos.map((logo, i) => (
                <motion.div
                  key={`${logo.name}-${i}`}
                  className="partner-logo partner-logo-glow flex items-center justify-center min-w-[100px] md:min-w-[140px]"
                  style={{
                    animationDelay: `-${i * 320}ms`
                  }}
                  transition={{ ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <Image src={logo.src} alt={`Logo de ${logo.name}`} width={140} height={64} className="max-h-12 w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="stats-row mt-8"
        >
          <div className="text-center">
            <div className="stat-number"><CountUp to={500} duration={1.3} separator="," prefix="+" /></div>
            <div className="stat-label">Empresas en México</div>
          </div>
          <div className="text-center">
            <div className="stat-number"><CountUp to={72} duration={1.1} suffix="h" /></div>
            <div className="stat-label">Implementación promedio</div>
          </div>
          <div className="text-center">
            <div className="stat-number"><CountUp to={99.99} duration={1.4} suffix="%" /></div>
            <div className="stat-label">Uptime garantizado</div>
          </div>
          <div className="text-center">
            <div className="stat-number"><CountUp to={24} duration={1.15} suffix="/7" /></div>
            <div className="stat-label">Soporte en español</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
