'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

type Action = {
  label: string;
  href: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type ProductSection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  visualTitle: string;
  visualItems: string[];
  reverse?: boolean;
};

type ProductFeature = {
  title: string;
  description: string;
};

type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: Action;
  secondaryAction: Action;
  heroStats: HeroStat[];
  heroHighlights: string[];
  sections: ProductSection[];
  featuresTitle: string;
  featuresDescription: string;
  features: ProductFeature[];
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: ProductFeature[];
  faqTitle: string;
  faqs: ProductFaq[];
  finalTitle: string;
  finalDescription: string;
};

type ProductPageProps = {
  content: ProductPageContent;
};

export default function ProductPage({ content }: ProductPageProps) {
  return (
    <main className="bg-white text-[#0D1526]">
      <Navbar />
      <section className="section-shell section-surface-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(0,170,236,0.12), transparent 32%), radial-gradient(circle at bottom left, rgba(26,58,143,0.10), transparent 28%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
          <div className="max-w-2xl">
            <p className="badge-glow w-fit mb-5">
              <Sparkles size={14} />
              {content.eyebrow}
            </p>
            <h1 className="font-black leading-tight hero-title text-[#0D1526] mb-5" style={{ maxWidth: '12ch' }}>
              {content.title}
            </h1>
            <p className="body-copy text-lg max-w-xl mb-8" style={{ color: '#5A6A85' }}>
              {content.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={content.primaryAction.href} className="btn-primary inline-flex items-center gap-2 text-base font-semibold">
                {content.primaryAction.label}
                <ArrowRight size={18} />
              </Link>
              <Link href={content.secondaryAction.href} className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg">
                {content.secondaryAction.label}
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {content.heroStats.map(stat => (
                <div key={stat.label} className="voxai-card p-5">
                  <p className="text-2xl font-black text-[#0D1526]">{stat.value}</p>
                  <p className="text-sm text-[#5A6A85] mt-2 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-8 h-28 w-28 rounded-full blur-3xl bg-[#00AAEC]/20" />
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl bg-[#1A3A8F]/20" />
            <div className="voxai-card relative overflow-hidden p-5 lg:p-6 shadow-[0_30px_80px_rgba(13,21,38,0.10)] rounded-[30px] bg-white/95 backdrop-blur-xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#5A6A85]">Vista general</p>
                  <h2 className="text-2xl font-bold text-[#0D1526] mt-1">{content.title}</h2>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(0,170,236,0.10)', color: '#1A3A8F' }}>
                  Cloud ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {content.heroHighlights.map(item => (
                  <div key={item} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FBFF] p-4">
                    <p className="text-sm font-semibold text-[#0D1526]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-[#E2E8F0] bg-[#0D1526] p-4 text-white">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
                  <CheckCircle2 size={16} />
                  <span>Diseño modular para equipos y canales</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {content.sections.slice(0, 4).map(section => (
                    <div key={section.title} className="rounded-2xl bg-white/6 border border-white/10 p-4">
                      <p className="text-sm font-semibold mb-1">{section.title}</p>
                      <p className="text-xs leading-relaxed text-white/70">{section.visualTitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {content.sections.map((section, index) => {
        const reversed = section.reverse ?? index % 2 === 1;

        return (
          <section key={section.title} className={`section-shell ${index % 2 === 0 ? 'section-surface-muted' : 'section-surface-white'}`}>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
              <div className={reversed ? 'lg:order-2' : ''}>
                <p className="label-copy font-semibold mb-4" style={{ color: '#1A3A8F' }}>{section.eyebrow}</p>
                <h2 className="section-title !text-left !mx-0 max-w-xl text-[#0D1526]">{section.title}</h2>
                <p className="body-copy mt-4 max-w-xl" style={{ color: '#5A6A85' }}>{section.description}</p>
                <ul className="mt-6 grid gap-3 max-w-xl">
                  {section.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full" style={{ background: 'rgba(0,170,236,0.10)', color: '#1A3A8F' }}>
                        <ChevronRight size={14} />
                      </span>
                      <span className="text-sm leading-relaxed text-[#0D1526]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={reversed ? 'lg:order-1' : ''}>
                <div className="voxai-card p-5 lg:p-6 rounded-[28px] bg-white shadow-[0_24px_60px_rgba(13,21,38,0.08)]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#5A6A85]">{section.eyebrow}</p>
                      <h3 className="text-xl font-bold text-[#0D1526] mt-1">{section.visualTitle}</h3>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-[#00AAEC] shadow-[0_0_0_6px_rgba(0,170,236,0.12)]" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {section.visualItems.map((item, itemIndex) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#E2E8F0] p-4"
                        style={{ background: itemIndex % 2 === 0 ? '#F8FBFF' : '#FFFFFF' }}
                      >
                        <p className="text-sm font-semibold text-[#0D1526]">{item}</p>
                        <p className="text-xs text-[#5A6A85] mt-1 leading-relaxed">
                          {itemIndex % 2 === 0 ? 'Experiencia simplificada y lista para crecer.' : 'Diseño visual pensado para convertir y operar.'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-shell section-surface-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="label-copy font-semibold mb-4" style={{ color: '#1A3A8F' }}>{content.featuresTitle}</p>
            <h2 className="section-title !text-left !mx-0 text-[#0D1526]">{content.featuresDescription}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.features.map(feature => (
              <div key={feature.title} className="voxai-card p-6">
                <p className="font-semibold text-[#0D1526] mb-2">{feature.title}</p>
                <p className="text-sm leading-relaxed text-[#5A6A85]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-surface-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="label-copy font-semibold mb-4" style={{ color: '#1A3A8F' }}>{content.benefitsTitle}</p>
            <h2 className="section-title !text-left !mx-0 text-[#0D1526]">{content.benefitsDescription}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5">
            {content.benefits.map(benefit => (
              <div key={benefit.title} className="voxai-card p-6 bg-white">
                <p className="font-semibold text-[#0D1526] mb-2">{benefit.title}</p>
                <p className="text-sm leading-relaxed text-[#5A6A85]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-surface-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="label-copy font-semibold mb-4" style={{ color: '#1A3A8F' }}>{content.faqTitle}</p>
            <h2 className="section-title !text-left !mx-0 text-[#0D1526]">Preguntas frecuentes</h2>
          </div>
          <div className="grid gap-4">
            {content.faqs.map(faq => (
              <details key={faq.question} className="voxai-card p-5 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0D1526]">
                  <span>{faq.question}</span>
                  <ChevronRight size={16} className="transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[#5A6A85]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-surface-muted">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="badge-glow w-fit mx-auto mb-5">
            <Sparkles size={14} />
            {content.eyebrow}
          </p>
          <h2 className="section-title text-[#0D1526]">{content.finalTitle}</h2>
          <p className="body-copy mt-4 max-w-2xl mx-auto" style={{ color: '#5A6A85' }}>
            {content.finalDescription}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/agenda-reunion" className="btn-primary inline-flex items-center gap-2 text-base font-semibold">
              Hablar con un especialista
              <ArrowRight size={18} />
            </Link>
            <Link href="/agenda-reunion" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-lg">
              Agendar demo
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}