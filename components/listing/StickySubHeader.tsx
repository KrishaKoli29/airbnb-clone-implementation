"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function StickySubHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 550px is generally where the Hero grid ends on desktop. 
      // If it shows up too early or too late, tweak this number!
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check position immediately on load in case the user refreshes midway down the page
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6">
        
        {/* Left Side Navigation */}
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-800">
          {/* Note the thick border-b-4 matching Airbnb's active state tab */}
          <a href="#photos" className="hover:text-black py-6 border-b-4 border-black text-black">Photos</a>
          <a href="#amenities" className="hover:text-black py-6 border-b-4 border-transparent">Amenities</a>
          <a href="#reviews" className="hover:text-black py-6 border-b-4 border-transparent">Reviews</a>
          <a href="#location" className="hover:text-black py-6 border-b-4 border-transparent">Location</a>
        </div>

        {/* Right Side Pricing & Reserve */}
        <div className="hidden md:flex items-center gap-4 py-3">
          <div className="text-right flex flex-col justify-center">
            
            <div className="flex items-baseline gap-1 justify-end">
              <span className="font-bold text-[17px]">₹28,499</span>
              <span className="text-sm text-gray-500 font-normal">for 5 nights</span>
            </div>
            
            <div className="text-xs font-semibold flex items-center justify-end gap-1 text-gray-800 mt-0.5">
              <Star className="w-3 h-3 fill-black text-black" /> 
              4.95 · <span className="text-gray-500 font-normal hover:underline cursor-pointer">19 reviews</span>
            </div>

          </div>
          
          <button className="bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
            Reserve
          </button>
        </div>

      </div>
    </div>
  );
}