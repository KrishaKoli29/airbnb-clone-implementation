"use client";

import React from "react";
import { Home } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Where you'll be</h2>
      
      {/* Map Container */}
      <div className="w-full h-[480px] bg-gray-100 rounded-2xl mb-4 relative overflow-hidden border border-gray-300">
        
        {/* Grayscale Map iFrame */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.2!2d73.76!3d15.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="absolute inset-0 grayscale contrast-[0.9] opacity-70 pointer-events-none"
        ></iframe>

        {/* Airbnb Teal Privacy Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-40 h-40 bg-[#00A699]/30 rounded-full flex items-center justify-center absolute"></div>
          <div className="w-14 h-14 bg-[#00A699] rounded-full border-4 border-white shadow-lg flex items-center justify-center relative z-10">
             <Home className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      
      <p className="text-base text-gray-800 font-medium mb-8">Candolim, Goa, India</p>

      {/* Neighbourhood highlights */}
      <div>
        <h3 className="text-base font-semibold mb-2">Neighbourhood highlights</h3>
        <p className="text-gray-800 text-base leading-relaxed max-w-[800px]">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button className="text-black font-semibold underline mt-3 flex items-center gap-1">
          Show more <span className="text-lg leading-none">›</span>
        </button>
      </div>
    </section>
  );
}