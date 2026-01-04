// components/responsive/TabletView.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TabletView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full px-6 py-8">
      {/* Tablet Header */}
      <div className="w-full flex justify-between items-center mb-12 bg-[#232323] rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="h-[40px] w-[40px] bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl"></div>
          <span className="text-white font-bold text-2xl">PentAi</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          {["Home", "SecrtChat", "GenPen", "Contact"].map((item) => (
            <button key={item} className="text-gray-300 hover:text-white">
              {item}
            </button>
          ))}
          <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-2 px-6 rounded-full font-semibold">
            Dashboard
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Tablet Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full md:hidden bg-[#232323] rounded-2xl p-6 mb-8">
          <div className="flex flex-col gap-4">
            {["Home", "SecrtChat", "GenPen", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white text-left p-4 hover:bg-[#2a2a2a] rounded-lg text-lg"
              >
                {item}
              </button>
            ))}
            <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 px-6 rounded-full font-semibold text-lg">
              Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-800 font-semibold py-4 px-10 rounded-full text-lg">
            Book a demo
          </button>
          <button className="border border-gray-600 text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-gray-800">
            Learn more
          </button>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="w-full max-w-5xl bg-[#232323] rounded-3xl p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-64 rounded-2xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { value: "23%", label: "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo consequat" },
          { value: "45%", label: "Vitae cursus nullam tincidunt urna tristique leo consequat netus" },
          { value: "67%", label: "Tincidunt urna tristique leo consequat netus consequat tortor" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-[#232323] rounded-2xl p-8 text-center"
          >
            <div className="text-4xl font-bold text-white mb-4">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Lorem Ipsum Dollar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "🔒", title: "Secure Encryption", desc: "End-to-end encryption for all communications" },
            { icon: "⚡", title: "Fast Processing", desc: "Real-time AI processing and responses" },
            { icon: "🛡️", title: "Privacy First", desc: "Your data never leaves your device" },
            { icon: "📊", title: "Analytics", desc: "Detailed insights and performance metrics" },
            { icon: "🤖", title: "AI Powered", desc: "Advanced machine learning algorithms" },
            { icon: "🔐", title: "Access Control", desc: "Granular permission management" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#232323] rounded-xl p-6 text-center hover:bg-[#2a2a2a] transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full max-w-5xl bg-[#1c1c1c] rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Tons of others love using PentAi.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Floyd Miles", text: "Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim." },
            { name: "Esther Howard", text: "Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit. Perfect solution for our team's needs." },
            { name: "Robert Fox", text: "Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan." },
            { name: "Jane Cooper", text: "Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisis." },
          ].map((testimonial, index) => (
            <div key={index} className="bg-[#232323] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div className="font-bold text-white text-lg">{testimonial.name}</div>
              </div>
              <p className="text-gray-400">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-5xl bg-gradient-to-r from-purple-900/30 via-gray-900/20 to-purple-900/30 rounded-3xl p-12 mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.
        </p>
        <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 px-14 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
          Book a demo
        </button>
      </div>

      {/* Footer */}
      <div className="w-full max-w-5xl pt-10 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg"></div>
            <span className="text-white font-bold text-2xl">PentAi</span>
          </div>
          
          <div className="flex gap-6">
            {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"].map((platform) => (
              <button key={platform} className="text-gray-400 hover:text-white">
                {platform}
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-center text-gray-400">
          <p className="mb-4">© 2024 by PentAi. All rights are reserved.</p>
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <p>Realised by Right Tail Corp.</p>
        </div>
      </div>
    </div>
  );
}