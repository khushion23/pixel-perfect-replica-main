import heroPersonImage from "@/assets/hero-person-gen.jpg";
import onLogo from "@/assets/on-logo.webp";
import whatsappIcon from "@/assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp";
import { useEffect, useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet.jsx";

function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-[600px] bg-[#FF6A29] flex flex-col items-stretch font-inter relative overflow-hidden">
      {/* Header: Logo left, nav right */}
      <header className="w-full flex items-center justify-between px-8 py-4 banner" style={{ background: 'rgba(255, 106, 41, 0.85)' }}>
        <div className="flex items-center gap-2">
          <img src={onLogo} alt="Observe Now" className="h-16 w-16 object-contain" />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="font-medium text-lg text-black border-b-2 border-black pb-1">Home</a>
          <a href="#about" className="font-medium text-lg text-black">About</a>
          <a href="#focused-sectors" className="font-medium text-lg text-black">What We Cover</a>
          <a href="#contact" className="font-medium text-lg text-black">Contact</a>
          <a href="#contact" className="font-semibold rounded px-4 py-2 bg-black text-white">Express Your Interest</a>
        </nav>
        {/* Hamburger for mobile */}
        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
          <span className="block w-7 h-1 bg-black mb-1 rounded"></span>
          <span className="block w-7 h-1 bg-black rounded"></span>
        </button>
        {/* Mobile Nav Sheet */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="right" className="w-64 bg-white p-6 flex flex-col gap-6">
            <button className="self-end text-2xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
            <a href="#" className="font-medium text-lg text-black border-b-2 border-black pb-1" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="font-medium text-lg text-black" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#focused-sectors" className="font-medium text-lg text-black" onClick={() => setMenuOpen(false)}>What We Cover</a>
            <a href="#contact" className="font-medium text-lg text-black" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="font-semibold rounded px-4 py-2 bg-black text-white" onClick={() => setMenuOpen(false)}>Express Your Interest</a>
          </SheetContent>
        </Sheet>
      </header>
      {/* Main content: left text, right image */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-stretch justify-between w-full pt-8 pb-0 flex-1">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h3 className="text-black text-2xl md:text-3xl font-medium mb-2 tracking-tight">FROM ENGAGEMENT TO ROI</h3>
          <h2 className="text-black text-[2.2rem] xs:text-[2.8rem] sm:text-[3.2rem] md:text-[6rem] font-bold leading-[1.05] mb-2" style={{fontFamily:'Lato, sans-serif'}}>Shaping<br className="hidden md:block"/> Conversations</h2>
          <div className="flex flex-row gap-4 mb-8 mt-6 w-full items-center md:items-start justify-center md:justify-start">
            <span className="bg-black text-white rounded-xl px-6 py-3 text-lg font-medium">18 February</span>
            <span className="bg-black text-white rounded-xl px-6 py-3 text-lg font-medium">Gurugram</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center md:justify-end relative mt-8 md:mt-0">
          <img src={heroPersonImage} alt="Hero" className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] object-cover rounded-[120px_0_0_0] mx-auto" />
          {/* WhatsApp icon on the bottom right corner of the hero image */}
        </div>
      </div>
      {/* Social icons at the bottom */}
      <div className="max-w-6xl mx-auto px-4 flex items-center gap-8 py-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center justify-center w-10 h-10">
            <img src="/infobip-logo-vertical-black.png" alt="infobip" className="w-8 h-8 object-contain" />
          </span>
          <span className="text-black text-2xl font-bold">infobip</span>
        </div>
        <span className="text-black text-3xl font-light">|</span>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-12 h-12">
            <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 object-contain opacity-90" />
          </span>
          <span className="text-black text-2xl font-bold">WhatsApp</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
