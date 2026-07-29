"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ListingDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-8 border-b border-gray-200">
      <div className="text-gray-800 text-base leading-relaxed">
        <div className={`${!isExpanded ? "line-clamp-4" : ""} transition-all duration-300 relative`}>
          <p className="mb-4">
            Plan Your Relaxing Holiday in our beautiful Amor de Goa apartment. Located in the heart of Candolim, this property offers a serene escape with all modern amenities. Enjoy the lush green surroundings, a fully equipped kitchen, and a cozy living space perfect for families or couples.
          </p>
          <p className="font-semibold text-black mb-2">The space</p>
          <p className="mb-4">
            Our apartment features a spacious bedroom with a comfortable queen-size bed, a modern bathroom with a walk-in shower, and a private balcony where you can enjoy your morning coffee. The living room includes a smart TV, high-speed Wi-Fi, and comfortable lounge seating for movie nights. The kitchen is fully stocked with cookware, a refrigerator, a stove, and a coffee maker.
          </p>
          <p className="font-semibold text-black mb-2">Guest access</p>
          <p>
            Guests have full access to the entire apartment, the shared outdoor swimming pool, and the fitness center located within the complex. Free secure parking is also available on the premises.
          </p>
        </div>
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 mt-4 font-semibold text-black underline hover:text-gray-600 transition"
      >
        {isExpanded ? (
          <>Show less <ChevronLeft className="w-4 h-4" /></>
        ) : (
          <>Show more <ChevronRight className="w-4 h-4" /></>
        )}
      </button>
    </section>
  );
}