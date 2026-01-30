import { useState } from "react";
import contactPhoneImage from "@/assets/contact-us.avif";
import contactBgVideo from "@/assets/large.mp4";
import AnimatedUnderline from "./ui/AnimatedUnderline.jsx";
const whatsappIcon = "/whatsappicon.png";
const infobipIcon = "/infobip-logo-vertical-black.png";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    organisation: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative w-full min-h-[600px] flex flex-col items-center justify-center font-lato overflow-hidden">
      {/* Background image and orange overlay */}
      <img src={contactPhoneImage} alt="Contact BG" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-[#E85D2A] opacity-90 z-10" />
      <div className="relative z-20 w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-0 md:gap-10 px-4 py-16">
        {/* Left: Form */}
        <div className="flex-1 flex flex-col items-start justify-center w-full max-w-[600px]">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2 leading-tight text-center w-full">Connect with Us</h2>
          <div className="flex flex-col items-center w-full mb-6">
            <AnimatedUnderline width={120} height={8} lineColor="#0A1833" dotColor="#fff" duration={2.5} />
          </div>
          <p className="font-bold text-white text-lg leading-tight mb-1">From Engagement to ROI Shaping Conversations</p>
          <p className="text-white/90 text-base mb-6">infobip - Whatsapp</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Organisation *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City *" required className="w-full px-4 py-2 rounded bg-white text-black text-base font-medium border-none outline-none" />
            <button type="submit" className="w-24 bg-black text-white text-base font-bold rounded py-2 mt-2 hover:bg-opacity-90 transition">Submit</button>
          </form>
        </div>
        {/* Right: Video */}
        <div className="flex-1 flex items-center justify-center w-full max-w-[420px] mt-10 md:mt-0">
          <video
            className="rounded-lg shadow-lg w-full h-[350px] object-cover"
            src={contactBgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
