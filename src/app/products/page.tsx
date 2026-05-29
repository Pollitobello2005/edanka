import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { productIndex } from './_content';

export default function ProductsPage() {
  return (
    <main className="bg-white text-[#0D1526]">
      <section className="section-shell section-surface-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(0,170,236,0.12), transparent 32%), radial-gradient(circle at bottom left, rgba(26,58,143,0.10), transparent 28%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-10">
            <p className="badge-glow w-fit mb-5">
              <CheckCircle2 size={14} />
              Productos
            </p>
            <h1 className="font-black hero-title text-[#0D1526] mb-5">Soluciones de comunicación empresarial</h1>
            <p className="body-copy text-lg max-w-2xl" style={{ color: '#5A6A85' }}>
              Explora nuestras soluciones principales con una experiencia visual moderna y consistente.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productIndex.map(product => (
              <article key={product.slug} className="voxai-card p-6 bg-white shadow-[0_18px_48px_rgba(13,21,38,0.06)]">
                <p className="label-copy font-semibold mb-3" style={{ color: '#1A3A8F' }}>{product.eyebrow}</p>
                <h2 className="text-2xl font-bold text-[#0D1526]">{product.title}</h2>
                <p className="text-sm leading-relaxed text-[#5A6A85] mt-3">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="btn-primary inline-flex items-center gap-2 mt-6 text-sm font-semibold">
                  Ver más
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}