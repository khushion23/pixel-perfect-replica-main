import aboutImage from "@/assets/about.jpg";
import { Calendar, Clock } from "lucide-react";

function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-10 flex flex-col items-center justify-center font-lato">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-0 md:gap-12 w-full">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center w-full max-w-[600px]">
          <h2 className="text-[#0A1A36] text-[2.2rem] md:text-[2.4rem] font-bold mb-2 leading-tight">About Roundtable</h2>
          <h3 className="text-[#0A1A36] text-lg md:text-xl font-semibold mb-2">From Engagement to ROI Shaping Conversations</h3>
          <div className="w-16 h-1 bg-[#0A1A36] rounded-full mb-6" />
          <div className="text-[#0A1A36] text-base md:text-lg mb-6">
            <p className="mb-3">2026 is here, and it’s the perfect time to explore what’s next in digital communication.</p>
            <p className="mb-3">Join us for an exclusive, invitation-only event in collaboration with Meta. We'll show you how to turn every WhatsApp interaction into a complete customer journey that flows effortlessly from discovery to conversion and beyond.</p>
            <p>Come learn, connect, and leave inspired with actionable insights you can put into practice immediately!</p>
          </div>
          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-6 mb-2 w-full">
            <span className="flex items-center gap-2 text-[#0A1A36] text-base font-medium">
              <Calendar className="w-5 h-5" />
              February 18, 2026
            </span>
            <span className="flex items-center gap-2 text-[#0A1A36] text-base font-medium">
              <Clock className="w-5 h-5" />
              02:30 PM to 05:30 PM
            </span>
          </div>
          <a href="#contact" className="mt-6 bg-black text-white text-base font-semibold rounded-none px-10 py-3 hover:bg-opacity-90 transition block text-center">Express Your Interest</a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center md:justify-end mt-10 md:mt-0">
          <img src={aboutImage} alt="About Roundtable" className="rounded-none shadow-none w-[400px] h-[320px] object-cover" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
