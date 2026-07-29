"use client";

import React from "react";
import Image from "next/image";
import { Star, Award } from "lucide-react";

const ratingsMeter = [
  { stars: 5, percent: "90%" },
  { stars: 4, percent: "10%" },
  { stars: 3, percent: "0%" },
  { stars: 2, percent: "0%" },
  { stars: 1, percent: "0%" },
];

const subcategories = [
  { label: "Cleanliness", rating: "5.0" },
  { label: "Accuracy", rating: "5.0" },
  { label: "Check-in", rating: "5.0" },
  { label: "Communication", rating: "5.0" },
  { label: "Location", rating: "4.8" },
  { label: "Value", rating: "4.8" },
];

const tags = [
  "🛋️ Comfort 6",
  "🎯 Accuracy 5",
  "🛁 Hot tub 5",
  "✨ Condition 4",
  "🤝 Hospitality 8",
  "🧹 Cleanliness 4",
];

// Expanded to 6 reviews
const reviews = [
  {
    name: "Amit",
    tenure: "2 months on Airbnb",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    text: "Very helpful and responsive team. Safe and peaceful stay, loved everything about the property.",
  },
  {
    name: "Aheesh",
    tenure: "2 weeks on Airbnb",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. Host was very responsive.",
  },
  {
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    text: "the host nitish was really great help",
  },
  {
    name: "Vedant",
    tenure: "4 years on Airbnb",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived.",
  },
  {
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
    text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
  },
  {
    name: "Mohd",
    tenure: "5 years on Airbnb",
    date: "May 2026",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=120&q=80",
    text: "Great place. Exactly as described in the listing.",
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 border-b border-gray-200">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Award className="w-8 h-8 text-black" />
          <span className="text-6xl font-bold">4.95</span>
          <Award className="w-8 h-8 text-black scale-x-[-1]" />
        </div>
        <h3 className="text-xl font-semibold">Guest favourite</h3>
        <p className="text-gray-500 text-sm mt-1">This home is one of the most loved homes on Airbnb.</p>
      </div>

      {/* Rating Meter & Subcategories */}
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center border-y border-gray-200 py-8 mb-8">
        
        {/* Left: Overall Rating Meter */}
        <div className="w-full md:w-[350px] space-y-1">
          <p className="font-semibold text-sm mb-4">Overall rating</p>
          {ratingsMeter.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-sm">
              <span className="w-2">{item.stars}</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-black rounded-full" style={{ width: item.percent }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Subcategories */}
        <div className="w-full md:w-auto grid grid-cols-3 gap-x-8 gap-y-4 border-l-0 md:border-l border-gray-200 md:pl-8">
          {subcategories.map((item, idx) => (
            <div key={idx} className="flex flex-col text-sm border-r border-gray-200 last:border-r-0 pr-4">
              <span className="font-semibold">{item.label}</span>
              <span className="text-lg font-bold">{item.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Chips */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-gray-50 transition">
            {tag}
          </span>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image src={rev.avatar} alt={rev.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-base">{rev.name}</h4>
                <p className="text-sm text-gray-500">{rev.tenure}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-800">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-black text-black" />
                ))}
              </div>
              <span>·</span>
              <span>{rev.date}</span>
            </div>
            <p className="text-gray-800 text-base leading-relaxed">{rev.text}</p>
          </div>
        ))}
      </div>

      <button className="border border-black rounded-lg px-6 py-3 font-semibold hover:bg-gray-50 mt-10 transition">
        Show all 19 reviews
      </button>
    </section>
  );
}