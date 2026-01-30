import backgroundImg from "@/assets/portrait-of-a-happy-creative-team-of-people-talking-in-the-office-at-the-meeting-photo.jpg";
import AnimatedUnderline from "./ui/AnimatedUnderline.jsx";
import onLogoWhite from "@/assets/on-logo-white.png";
const whatsappIcon = "/whatsappicon.png";
import practicalIcon from "@/assets/8740925.png";
import aiIcon from "@/assets/pngtree-stunning-ai-powered-robot-interacting-with-transparent-touchscreen-png-image_20613634.png";
import brandIcon from "@/assets/download (3).jpg";
import { useInView } from "@/hooks/useInView";

const coverItems = [
  {
    title: "Unlock WhatsApp",
    description: "Discover how to use WhatsApp Business Calling to initiate personalized, high-intent customer conversations.",
    icon: whatsappIcon
  },
  {
    title: "Practical use cases",
    description: "Explore a proven framework for customer engagement that you can apply to your own campaigns.",
    icon: practicalIcon
  },
  {
    title: "AI-powered journeys",
    description: "See how AI powered WhatsApp Flows can make every interaction quicker, smarter, and more relevant for your customers.",
    icon: aiIcon
  },
  {
    title: "Brand stories",
    description: "Hear real-life examples of leading brands engaging users with AI powered WhatsApp Flows & Business Calling.",
    icon: brandIcon
  }
];

function WhatWeCoverSection() {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  return (
    <section
      id="cover"
      ref={sectionRef}
      className={`relative w-full py-20 px-0 flex flex-col items-center justify-center font-lato overflow-hidden section-reveal${inView ? " in-view" : ""}`}
    >
      <img src={backgroundImg} alt="background" className="absolute inset-0 w-full h-full object-cover opacity-60 z-0" />
      <div className="absolute inset-0 w-full h-full bg-[#E85D2A] opacity-80 z-10" />
      <div className="relative z-20 w-full max-w-[1100px] mx-auto flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-2 mt-2 text-center section-underline-animate" style={{display:'inline-block'}}>{"What we'll cover"}</h2>
          <div className="mb-12 mx-auto flex justify-center">
            <AnimatedUnderline width={100} height={6} lineColor="#fff" dotColor="#0A1833" duration={1.2} />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {coverItems.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white/10 backdrop-blur-lg rounded-xl p-7 min-h-[170px] shadow-2xl border border-white/20 relative overflow-hidden group card-hover-animate">
              <div className="absolute inset-0 bg-black/30 opacity-70 rounded-xl z-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="flex items-start gap-4 mb-2 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center shadow-md">
                  <img src={item.icon} alt="icon" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">{item.title}</h3>
                  <p className="text-white text-base font-semibold leading-relaxed opacity-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeCoverSection;
