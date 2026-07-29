"use client";

import React from "react";
import Image from "next/image";
import { Star, Shield, GraduationCap } from "lucide-react";

// Mock data based on the provided reference image
const coHosts = [
  { name: "Sharath", img: "https://i.pravatar.cc/150?u=1" },
  { name: "Aman Dev Pahwa", img: "https://i.pravatar.cc/150?u=2" },
  { name: "Maria Karen Priyanka", img: "https://i.pravatar.cc/150?u=3" },
  { name: "Simran", img: "https://i.pravatar.cc/150?u=4" },
  { name: "Pallavi", img: "https://i.pravatar.cc/150?u=5" },
  { name: "Sanyukta", img: "https://i.pravatar.cc/150?u=6" },
  { name: "Shruti", initial: "S", color: "bg-pink-100 text-pink-600" },
  { name: "Amisha", initial: "A", color: "bg-blue-100 text-blue-600" },
];

// Custom Balloon Icon (since it's not standard in Lucide)
const BalloonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
    <path d="M10 14.25c0 .414.336.75.75.75h2.5c.414 0 .75-.336.75-.75V13c0-2.21-1.79-4-4-4s-4 1.79-4 4v1.25z"/>
    <path d="M12 15v6"/>
    <path d="M10 21h4"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

export default function HostProfile() {
  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Host Card & Info */}
        <div className="w-full md:w-[350px] lg:w-[400px] shrink-0">
          
          {/* Main Stats Card */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-row items-center mb-8">
            
            {/* Left side of card: Avatar & Name */}
            <div className="flex-1 flex flex-col items-center text-center pr-6">
              <div className="relative w-[110px] h-[110px] mb-4">
                {/* Simulated Logo Background */}
                <div className="w-full h-full rounded-full bg-[#1b4339] flex items-center justify-center overflow-hidden">
                  <div className="text-white text-[10px] leading-tight font-serif tracking-widest uppercase border-b border-white/30 pb-1">
                    Mirashya
                  </div>
                </div>
                
                {/* Verified Checkmark Badge */}
                <div className="absolute bottom-0 right-0 bg-[#FF385C] text-white rounded-full p-1.5 border-[3px] border-white shadow-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M9.999 18.001a1 1 0 0 1-.707-.293l-4.999-5a1 1 0 1 1 1.414-1.414l4.292 4.292 10.292-10.292a1 1 0 1 1 1.414 1.414l-11 11a1 1 0 0 1-.706.293z"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-[28px] font-bold leading-[1.1] mb-1">Mirashya<br/>Homes</h3>
              <p className="text-sm font-semibold text-black mt-1">Host</p>
            </div>
            
            {/* Right side of card: Stats */}
            <div className="flex-1 flex flex-col gap-4 pl-6 border-l border-gray-200">
              <div>
                <div className="text-2xl font-bold">1,463</div>
                <div className="text-xs font-medium text-black mt-0.5">Reviews</div>
              </div>
              <hr className="border-gray-200" />
              <div>
                <div className="text-2xl font-bold flex items-center gap-1">
                  4.68 <Star className="w-5 h-5 fill-black" />
                </div>
                <div className="text-xs font-medium text-black mt-0.5">Rating</div>
              </div>
              <hr className="border-gray-200" />
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-xs font-medium text-black mt-0.5">Years hosting</div>
              </div>
            </div>
            
          </div>

          {/* Host Bullet Points */}
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4 text-[15px] text-black">
              <BalloonIcon />
              <span>Born in the 80s</span>
            </div>
            <div className="flex items-center gap-4 text-[15px] text-black">
              <GraduationCap className="w-6 h-6 text-black" strokeWidth={1.5} />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Co-Hosts & Details */}
        <div className="flex-1 flex flex-col pt-2">
          
          <h3 className="text-xl font-semibold mb-6">Co-Hosts</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-2 mb-10">
            {coHosts.map((host, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {host.img ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image src={host.img} alt={host.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${host.color}`}>
                    {host.initial}
                  </div>
                )}
                <span className="text-[15px] text-black font-normal truncate">{host.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Host details</h3>
          <div className="text-[15px] text-black flex flex-col gap-1 mb-8">
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>

          <button className="bg-[#f7f7f7] hover:bg-[#ebebeb] text-black font-semibold px-6 py-3 rounded-lg w-max transition mb-8 text-[15px]">
            Message host
          </button>

          <div className="flex items-start gap-4 pt-4">
            <Shield className="w-7 h-7 shrink-0 text-gray-500" strokeWidth={1} />
            <p className="text-xs text-gray-500 max-w-[400px] leading-relaxed">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}