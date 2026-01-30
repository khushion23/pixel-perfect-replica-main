import onLogoWhite from "@/assets/on-logo-white.png";
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#FF6A29] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={onLogoWhite} alt="Observe Now" className="h-24 mb-2" />
          <span className="text-white font-bold text-2xl tracking-wider"></span>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          <a href="https://x.com/ObservenowMedia" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/company/observenow/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/now_observe/reels/?hl=am-et" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/@ObserveNowMedia" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-black rounded flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
        {/* Links */}
        <div className="flex justify-center gap-2 text-white text-sm mb-4">
          <a href="https://www.infobip.com/policies/service-terms-conditions" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Terms of use</a>
          <span>|</span>
          <a href="https://www.infobip.com/policies/privacy-notice" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Privacy Notice</a>
          <span>|</span>
          <a href="https://www.infobip.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Visit infobip.com</a>
        </div>
        {/* Legal text */}
        <div className="text-center text-white text-xs leading-relaxed max-w-4xl mx-auto">
          <p className="mb-2">
            The sender of this communication is INFOBIP Ltd., with registered seat in 35-38 New Bridge, Fifth Floor, London EC4V 6BW, UK. To exercise your rights of access, rectification, erasure or objection, please send an email to data-protection-officer@infobip.com.
          </p>
          <p>
            For more information on how we collect and process your personal data please read our <a href="https://www.infobip.com/policies/privacy-notice" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
