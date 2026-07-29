"use client";

import React from "react";
import Image from "next/image";

export default function WhereYouSleep() {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">Where you'll sleep</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[600px]">
        {/* Bedroom Card */}
        <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-sm transition cursor-pointer">
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80"
              alt="Bedroom"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-base mt-3">Bedroom</h3>
          <p className="text-sm text-gray-500">1 double bed</p>
        </div>

        {/* Living Room Card */}
        <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-sm transition cursor-pointer">
          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"
              alt="Living room"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-base mt-3">Living room</h3>
          <p className="text-sm text-gray-500">1 sofa</p>
        </div>
      </div>
    </section>
  );
}