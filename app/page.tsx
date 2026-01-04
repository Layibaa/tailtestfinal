// app/page.tsx - Updated responsive version
"use client";

import { useState, useEffect } from "react";
import DesktopView from "@/components/responsive/DesktopView";
import MobileView from "@/components/responsive/MobileView"; 

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); 
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-[#1c1c1c] min-h-screen">
      {isMobile ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </div>
  );
}