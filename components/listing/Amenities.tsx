"use client";

import React from "react";
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  Dog,
  Video,
  ShieldAlert,
  BellOff,
} from "lucide-react";

const amenitiesList = [
  { icon: Utensils, label: "Kitchen" },
  { icon: Wifi, label: "Wifi" },
  { icon: Laptop, label: "Dedicated workspace" },
  { icon: Car, label: "Free parking on premises" },
  { icon: Waves, label: "Pool" },
  { icon: Bath, label: "Hot tub" },
  { icon: Dog, label: "Pets allowed" },
  { icon: Video, label: "Exterior security cameras" },
  { icon: ShieldAlert, label: "Carbon monoxide alarm" },
  { icon: BellOff, label: "Smoke alarm" },
];

export default function Amenities() {
  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
      
      <div className="grid grid-cols-2 gap-y-4 max-w-[700px]">
        {amenitiesList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 text-gray-800">
              <Icon className="w-6 h-6 text-gray-700 stroke-[1.5]" />
              <span className="text-base">{item.label}</span>
            </div>
          );
        })}
      </div>

      <button className="border border-black hover:bg-gray-100 font-semibold rounded-lg px-6 py-3 mt-8 transition">
        Show all 50 amenities
      </button>
    </section>
  );
}