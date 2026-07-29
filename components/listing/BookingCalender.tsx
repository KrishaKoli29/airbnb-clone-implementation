"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookingCalendar() {
  // Mock active date range selection: Oct 18 - Oct 23, 2026
  const selectedRange = { start: 18, end: 23 };

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Oct 2026 starts on Thursday (index 4)
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const octStartPadding = Array.from({ length: 4 });

  // Nov 2026 starts on Sunday (index 0)
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="py-8 border-b border-gray-200">
      <h2 className="text-2xl font-semibold">5 nights in Candolim</h2>
      <p className="text-sm text-gray-500 mb-6">18 Oct 2026 - 23 Oct 2026</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[850px]">
        {/* October 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-semibold text-base">October 2026</h3>
            <div className="w-9" /> {/* Spacer */}
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            {daysOfWeek.map((day, idx) => (
              <div key={idx}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center text-sm gap-y-1">
            {octStartPadding.map((_, idx) => (
              <div key={`pad-${idx}`} />
            ))}
            {octDays.map((day) => {
              const isStart = day === selectedRange.start;
              const isEnd = day === selectedRange.end;
              const isInRange = day >= selectedRange.start && day <= selectedRange.end;

              return (
                <div
                  key={`oct-${day}`}
                  className={`h-10 flex items-center justify-center relative cursor-pointer ${
                    isInRange ? "bg-gray-100" : ""
                  } ${isStart ? "rounded-l-full" : ""} ${isEnd ? "rounded-r-full" : ""}`}
                >
                  <span
                    className={`w-9 h-9 flex items-center justify-center rounded-full text-sm ${
                      isStart || isEnd ? "bg-black text-white font-semibold" : ""
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-9" /> {/* Spacer */}
            <h3 className="font-semibold text-base">November 2026</h3>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            {daysOfWeek.map((day, idx) => (
              <div key={idx}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center text-sm gap-y-1">
            {novDays.map((day) => (
              <div
                key={`nov-${day}`}
                className="h-10 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <span>{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}