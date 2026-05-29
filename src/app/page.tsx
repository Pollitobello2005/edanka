import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <main style={{ background: '#FFFFFF' }}>
      {/* Global overlays */}
      <StickyBar />
      <ExitIntentPopup />

      <Navbar />
      <Hero />
      <SocialProof />
      <Products />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
