"use client";

import React from "react";
import { ChevronDown, Tag } from "lucide-react";

export default function BookingCard() {
  return (
    <aside className="sticky top-28 border border-gray-300 shadow-xl rounded-2xl p-6 bg-white max-w-[400px] w-full">
      {/* Top Promo Banner */}
      <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl p-3 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
          <Tag className="w-4 h-4 text-green-600" />
          <span>Get 10% off your next stay.</span>
        </div>
        <button className="text-xs font-bold border border-green-600 text-green-800 rounded-md px-2.5 py-1 hover:bg-green-100 transition">
          Claim
        </button>
      </div>

      {/* Price Header */}
      <div className="mb-6">
        <span className="text-2xl font-bold">₹28,499</span>
        <span className="text-gray-500 text-sm"> for 5 nights</span>
      </div>

      {/* Date Picker Input Group */}
      <div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
        <div className="grid grid-cols-2 border-b border-gray-400">
          <div className="p-3 border-r border-gray-400 cursor-pointer hover:bg-gray-50">
            <label className="text-[10px] font-bold uppercase tracking-wider block text-gray-800">
              CHECK-IN
            </label>
            <span className="text-sm text-gray-700">10/18/2026</span>
          </div>
          <div className="p-3 cursor-pointer hover:bg-gray-50">
            <label className="text-[10px] font-bold uppercase tracking-wider block text-gray-800">
              CHECKOUT
            </label>
            <span className="text-sm text-gray-700">10/23/2026</span>
          </div>
        </div>

        <div className="p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider block text-gray-800">
              GUESTS
            </label>
            <span className="text-sm text-gray-700">2 guests</span>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      {/* Reserve CTA */}
      <button className="bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold w-full py-3.5 rounded-lg text-lg transition duration-200 shadow-md">
        Reserve
      </button>

      {/* Disclaimer */}
      <p className="text-center text-xs text-gray-500 mt-3">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-3 text-sm text-gray-700 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <span className="underline">₹5,699 x 5 nights</span>
          <span>₹28,495</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">AirCover service fee</span>
          <span>₹0</span>
        </div>
        <div className="flex justify-between font-bold text-black border-t border-gray-200 pt-3 text-base">
          <span>Total before taxes</span>
          <span>₹28,499</span>
        </div>
      </div>
    </aside>
  );
}