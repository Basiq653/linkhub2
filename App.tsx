import { ParticlesBackground } from '@/components/particles';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/sections/hero';
import { FeaturesSection } from '@/sections/features';
import { PricingSection } from '@/sections/pricing';
import { FAQSection } from '@/sections/faq';
import { CTABanner } from '@/sections/cta-banner';
import { Footer } from '@/sections/footer';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Particles background */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTABanner />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
