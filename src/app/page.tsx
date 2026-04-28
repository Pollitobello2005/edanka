import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: '#FFFFFF' }}>
      <Navbar />
      <Hero />
      <SocialProof />
      <Products />
      <Solutions />
      <Testimonials />
      <Pricing />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  );
}
