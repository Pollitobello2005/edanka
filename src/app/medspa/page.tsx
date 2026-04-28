import Navbar from "@/components/Navbar";
import Hero from "@/components/medspa/Hero";
import Problem from "@/components/medspa/Problem";
import Solutions from "@/components/medspa/Solutions";
import Comparison from "@/components/medspa/Comparison";
import HowItWorks from "@/components/medspa/HowItWorks";
import CTA from "@/components/medspa/CTA";
import Footer from "@/components/Footer";

export default function MedSpaPage() {
  return (
    <main style={{ background: '#FFFFFF' }}>
      <Navbar />
      <Hero />
      <Problem />
      <Solutions />
      <Comparison />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
