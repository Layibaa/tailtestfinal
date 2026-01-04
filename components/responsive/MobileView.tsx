// components/responsive/MobileView.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "@/lib/svg-paths"; // Import the same svg-paths
import clsx from "clsx";

// Import the EXACT same assets as desktop
const img24 = "/assets/c827ad7a87b7b65f95b1e9a649a32ca15089cd99.png";
const imgDashboard = "/assets/db3aac79d9eb5875b3f9cdc3b4d4c4302bd8a7ee.png";
const imgLockFront = "/assets/745ccea475dd0f565fb1f9bd1a950113e003ab3f.png";
const imgEllipse1 = "/assets/1a68fe28b6e75858e0f4c4baa72997f7608f5901.png";
const imgEllipse2 = "/assets/b101c919631a62db45bfa8a3ec67e29999373589.png";
const imgEllipse3 = "/assets/fc4ce711bea7ac8d7e336deb61421f202329f530.png";
const imgEllipse4 = "/assets/6c611f91649422926dde4f08eccb1924d79e0c0b.png";
const imgEllipse5 = "/assets/bd9320768bd86ae9bba4d10e646f6e802f5161fa.png";
const imgEllipse6 = "/assets/dffcc1fb9604449a53ff055aabe09cacd149d166.png";
const imgEllipse7 = "/assets/c827ad7a87b7b65f95b1e9a649a32ca15089cd99.png";
const imgEllipse8 = "/assets/0b0198997c16a041ebc7e22a9f6a9d448e38fb21.png";

// ============ EXACT SAME COMPONENTS FROM DESKTOP VIEW ============

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[50px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        {children}
      </svg>
    </div>
  );
}

function IconsCheckCircleBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Icons / CheckCircle">
          <path d={svgPaths.p23e4fc00} fill="var(--fill-0, #EDEDED)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconsLockLaminated() {
  return (
    <BackgroundImage10>
      <g id="Icons / LockLaminated">
        <path d={svgPaths.p296b3cc0} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage10>
  );
}

function IconsWall() {
  return (
    <BackgroundImage10>
      <g id="Icons / Wall">
        <path d={svgPaths.p31a60d40} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage10>
  );
}

function IconsShieldCheck() {
  return (
    <BackgroundImage10>
      <g id="Icons / ShieldCheck">
        <path d={svgPaths.p37a97900} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage10>
  );
}

function IconsFingerprint() {
  return (
    <BackgroundImage12>
      <g id="Icons / Fingerprint">
        <path d={svgPaths.p3e9e6500} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage12>
  );
}

function IconsSecurityCamera() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Icons / SecurityCamera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g clipPath="url(#clip0_1_1356)" id="Icons / SecurityCamera">
          <path d={svgPaths.p3e00f340} fill="var(--fill-0, #ECEDEE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1356">
            <rect fill="white" height="44" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconsShieldWarning() {
  return (
    <BackgroundImage12>
      <g id="Icons / ShieldWarning">
        <path d={svgPaths.p1b41b980} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage12>
  );
}

function IconFacebook() {
  return (
    <BackgroundImage13>
      <g id="Icon / Facebook">
        <path d={svgPaths.p2ed8fe00} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage13>
  );
}

function IconInstagram() {
  return (
    <BackgroundImage13>
      <g id="Icon / Instagram">
        <path clipRule="evenodd" d={svgPaths.p3f3f55f0} fill="var(--fill-0, #ECEDEE)" fillRule="evenodd" id="Vector" />
      </g>
    </BackgroundImage13>
  );
}

function IconX() {
  return (
    <BackgroundImage13>
      <g id="Icon / X">
        <path d={svgPaths.p214d7500} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage13>
  );
}

function IconLinkedIn() {
  return (
    <BackgroundImage13>
      <g id="Icon / LinkedIn">
        <path clipRule="evenodd" d={svgPaths.p2b170900} fill="var(--fill-0, #ECEDEE)" fillRule="evenodd" id="Vector" />
      </g>
    </BackgroundImage13>
  );
}

function IconYoutube() {
  return (
    <BackgroundImage13>
      <g id="Icon / Youtube">
        <path d={svgPaths.p35f23f00} fill="var(--fill-0, #ECEDEE)" id="Vector" />
      </g>
    </BackgroundImage13>
  );
}

// ============ MOBILE-SPECIFIC COMPONENTS ============

function MobileHeader({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  return (
    <div className="w-full flex justify-between items-center py-4 px-4 bg-[#1c1c1c]">
      {/* Logo - Same as desktop */}
      <div className="flex items-center">
        <div className="relative">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Pent</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 font-bold text-xl">A</span>
            <span className="text-white font-bold text-xl">i</span>
          </div>
          <div className="absolute -top-1 -right-2 w-3 h-3">
            <img src={img24} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-lg bg-[#232323]"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <div className="w-full bg-[#232323] border-b border-gray-800">
      <div className="flex flex-col p-4 space-y-3">
        {["Home", "SecrtChat", "GenPen", "Contact"].map((item) => (
          <button
            key={item}
            className="text-white text-left py-3 px-4 hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            {item}
          </button>
        ))}
        <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-full font-semibold text-sm mt-2">
          Dashboard
        </button>
      </div>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="w-full px-4 py-8 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
        Lorem ipsum dolor sit amet consectetur
      </h1>
      <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
        Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
      </p>
      <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full text-sm sm:text-base">
        Book a demo
      </button>
    </div>
  );
}

function MobileSupporters() {
  return (
    <div className="w-full px-4 py-8">
      <p className="text-center text-gray-300 text-sm font-medium mb-6">Our Supporters</p>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex-shrink-0">
            <div className="bg-[#282828] px-6 py-2 rounded-lg">
              <span className="text-gray-300 text-xs">Supporter-logo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileDashboard() {
  return (
    <div className="w-full px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm">
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
        </p>
      </div>
      <div className="bg-[#232323] rounded-xl p-2">
        <div className="relative rounded-lg overflow-hidden h-48 sm:h-56">
          <img 
            src={imgDashboard} 
            alt="Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function MobileStats() {
  return (
    <div className="w-full px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-[#232323] rounded-xl p-6 text-center border border-gray-800">
            <div className="text-3xl font-bold text-white mb-3">23%</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileFeatures() {
  const features = [
    { icon: <IconsLockLaminated />, title: "Lorem Ipsum Dollar" },
    { icon: <IconsSecurityCamera />, title: "Lorem Ipsum Dollar" },
    { icon: <IconsFingerprint />, title: "Lorem Ipsum Dollar" },
    { icon: <IconsShieldWarning />, title: "Lorem Ipsum Dollar" },
    { icon: <IconsWall />, title: "Lorem Ipsum Dollar" },
    { icon: <IconsShieldCheck />, title: "Lorem Ipsum Dollar" },
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col space-y-8">
        {/* Text and Lock Image */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Lorem Ipsum Dollar
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo consequat
          </p>
          <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden">
            <img src={imgLockFront} alt="Lock" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#282828] rounded-lg p-4 text-center border border-gray-700">
              <div className="flex justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-white text-xs font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileComparison() {
  return (
    <div className="w-full px-4 py-8">
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="bg-[#232323] rounded-xl p-6">
          <h3 className="text-gray-300 text-lg font-semibold mb-4">
            Lorem Ipsum Dolar Sed congue
          </h3>
          <div className="space-y-3 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <IconsCheckCircleBackgroundImage />
                </div>
                <p className="text-gray-400 text-sm">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                </p>
              </div>
            ))}
          </div>
          <div className="h-40 rounded-lg overflow-hidden">
            <img src={imgDashboard} alt="Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#232323] rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">
            Lorem Ipsum Dolar Sed congue
          </h3>
          <div className="space-y-3 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <IconsCheckCircleBackgroundImage />
                </div>
                <p className="text-gray-400 text-sm">
                  Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.
                </p>
              </div>
            ))}
          </div>
          <div className="h-40 rounded-lg overflow-hidden">
            <img src={imgDashboard} alt="Dashboard" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileFeaturesSelector() {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
        Lorem ipsum dolor
      </h2>
      
      <div className="space-y-4 mb-8">
        {[
          { title: "Feature 1", active: true },
          { title: "Feature 2", active: false },
          { title: "Feature 3", active: false },
        ].map((feature, i) => (
          <div 
            key={i} 
            className={`bg-[#1c1c1c] rounded-xl p-6 border ${feature.active ? 'border-purple-600' : 'border-gray-800'}`}
          >
            <h3 className={`text-lg font-semibold mb-3 ${feature.active ? 'text-white' : 'text-gray-400'}`}>
              {feature.title}
            </h3>
            <p className={`text-sm ${feature.active ? 'text-gray-300' : 'text-gray-500'}`}>
              Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
            </p>
          </div>
        ))}
      </div>

      <div className="h-48 rounded-xl overflow-hidden">
        <img src={imgDashboard} alt="Prompt Library" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function MobileTestimonials() {
  const testimonials = [
    { name: "Floyd Miles", text: "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus.", avatar: imgEllipse1 },
    { name: "Esther Howard", text: "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.", avatar: imgEllipse2 },
    { name: "Erat consectetur", text: "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis.", avatar: imgEllipse3 },
    { name: "Mauris pulvinar", text: "Quis ultricies molestie massa elit convallis lectus orci. Accumsan vulputate tempor dapibus nunc.", avatar: imgEllipse4 },
  ];

  return (
    <div className="w-full px-4 py-8 bg-[#1c1c1c]">
      <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-6">
        Tons of others love using PentAi.
      </h2>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-[#232323] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-semibold">{testimonial.name}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCTA() {
  return (
    <div className="w-full px-4 py-8">
      <div className="bg-[#232323] rounded-2xl p-6 border border-gray-800">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-300 text-center text-sm mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus. Egestas facilisi neque a arcu vitae dignissim. Sit lobortis orci risus volutpat eu habitasse.
        </p>
        <button className="w-full bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 rounded-full font-semibold text-sm">
          Book a demo
        </button>
      </div>
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="w-full px-4 py-8 border-t border-gray-800">
      <div className="flex flex-col space-y-6">
        {/* Logo and Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <span className="text-white font-bold text-lg">Pent</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-300 font-bold text-lg">A</span>
            <span className="text-white font-bold text-lg">i</span>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 by PentAi. All rights are reserved.
          </p>
          
          <div className="flex space-x-3">
            <IconFacebook />
            <IconInstagram />
            <IconX />
            <IconLinkedIn />
            <IconYoutube />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              Realised by Right Tail Corp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 text-sm hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Mobile View Component
export default function MobileView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = () => setIsMenuOpen(false);
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-[#1c1c1c]">
      {/* Header */}
      <MobileHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
      
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <MobileHero />
        
        {/* Supporters */}
        <MobileSupporters />
        
        {/* Dashboard Preview */}
        <MobileDashboard />
        
        {/* Stats */}
        <MobileStats />
        
        {/* Features - Using EXACT same icon components as desktop */}
        <MobileFeatures />
        
        {/* Comparison - Using EXACT same CheckCircle component */}
        <MobileComparison />
        
        {/* Features Selector */}
        <MobileFeaturesSelector />
        
        {/* Testimonials */}
        <MobileTestimonials />
        
        {/* Final CTA */}
        <MobileCTA />
      </div>
      
      {/* Footer - Using EXACT same social media components */}
      <MobileFooter />
    </div>
  );
}