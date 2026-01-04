// components/responsive/MobileView.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full px-4 py-4">
      {/* Mobile Header */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="h-[30px] w-[30px] bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg"></div>
          <span className="text-white font-bold text-xl">PentAi</span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full bg-[#232323] rounded-2xl p-4 mb-8">
          <div className="flex flex-col gap-4">
            {["Home", "SecrtChat", "GenPen", "Contact"].map((item) => (
              <button
                key={item}
                className="text-white text-left p-3 hover:bg-[#2a2a2a] rounded-lg"
              >
                {item}
              </button>
            ))}
            <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-full font-semibold">
              Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="w-full text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-gray-300 mb-8">
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et.
        </p>
        <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full">
          Book a demo
        </button>
      </div>

      {/* Dashboard Preview */}
      <div className="w-full bg-[#232323] rounded-2xl p-6 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 rounded-xl"></div>
      </div>

      {/* Stats Section */}
      <div className="w-full grid grid-cols-2 gap-4 mb-12">
        {[
          { value: "23%", label: "Consequat netus consequat" },
          { value: "45%", label: "Tristique leo consequat" },
          { value: "67%", label: "Vitae cursus nullam" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-[#232323] rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="w-full mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Lorem Ipsum Dollar
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🔒", title: "Secure" },
            { icon: "📱", title: "Mobile" },
            { icon: "⚡", title: "Fast" },
            { icon: "🔐", title: "Private" },
            { icon: "🛡️", title: "Protected" },
            { icon: "📊", title: "Analytics" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#232323] rounded-xl p-4 text-center"
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <div className="text-white text-sm">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-[#1c1c1c] rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          What users say
        </h2>
        <div className="space-y-4">
          {[
            { name: "Floyd Miles", text: "Magnis lacus laoreet pharetra commodo ac semper nam." },
            { name: "Esther Howard", text: "Arcu augue egestas nec facilisis volutpat tortor tempus." },
          ].map((testimonial, index) => (
            <div key={index} className="bg-[#232323] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="font-bold text-white">{testimonial.name}</div>
              </div>
              <p className="text-gray-400 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-purple-900/20 to-gray-900/20 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.
        </p>
        <button className="w-full bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 rounded-full font-semibold">
          Book a demo
        </button>
      </div>

      {/* Footer */}
      <div className="w-full pt-8 border-t border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gradient-to-br from-purple-600 to-purple-900 rounded"></div>
            <span className="text-white font-bold">PentAi</span>
          </div>
          <div className="flex gap-4">
            {["fb", "ig", "tw", "in", "yt"].map((icon) => (
              <div key={icon} className="w-8 h-8 bg-gray-800 rounded-full"></div>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 by PentAi. All rights are reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <p className="mt-4">Realised by Right Tail Corp.</p>
        </div>
      </div>
    </div>
  );
}