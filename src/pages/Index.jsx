import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeCoverSection from "@/components/WhatWeCoverSection";
import WhoShouldReadSection from "@/components/WhoShouldReadSection";
import FocusedSectorsSection from "@/components/FocusedSectorsSection";
import ContactSection from "@/components/ContactSection";
import QueriesSection from "@/components/QueriesSection";
import Footer from "@/components/Footer";

function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatWeCoverSection />
      <WhoShouldReadSection />
      <FocusedSectorsSection />
      <ContactSection />
      <QueriesSection />
      <Footer />
    </div>
  );
}

export default Index;
