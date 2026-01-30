import heroPersonImage from "@/assets/infobip-header-28-1 (1) (1).png";
import onLogo from "@/assets/on-logo.webp";
import { useEffect, useState } from "react";

function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full min-h-[300px] bg-[#FF6A29] flex flex-col items-center justify-start font-inter relative">
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-2 transition-colors duration-300 ${scrolled ? "bg-white shadow" : "bg-[#FF6A29]"} animate-slide-down`}
        style={{background: scrolled ? "white" : "#FF6A29"}}
      >
        <div className="flex items-center gap-3">
            <img src={onLogo} alt="Observe Now" className="h-12 w-12 object-contain" />
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className={`font-medium text-lg ${scrolled ? "text-black" : "text-black border-b-2 border-black pb-1"}`}>Home</a>
          <a href="#about" className={`font-medium text-lg ${scrolled ? "text-black" : "text-white"}`}>About</a>
          <a href="#cover" className={`font-medium text-lg ${scrolled ? "text-black" : "text-white"}`}>What We Cover</a>
          <a href="#contact" className={`font-medium text-lg ${scrolled ? "text-black" : "text-white"}`}>Contact</a>
          <button className={`font-semibold rounded px-4 py-2 ml-2 bg-black text-white button-animate`}>Express Your Interest</button>
        </nav>
      </header>
      <img src={heroPersonImage} alt="Hero" className="w-full h-auto object-contain mt-16 animate-fade-in" />
    </section>
  );
}

export default HeroSection;
