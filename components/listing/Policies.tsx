"use client";

import React from "react";

export default function ThingsToKnow() {
  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <h3 className="font-semibold text-base">House rules</h3>
          <ul className="text-base text-gray-800 space-y-2">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <button className="text-base font-semibold underline block pt-2">Show more</button>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-base">Safety & property</h3>
          <ul className="text-base text-gray-800 space-y-2">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <button className="text-base font-semibold underline block pt-2">Show more</button>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-base">Cancellation policy</h3>
          <ul className="text-base text-gray-800 space-y-2">
            <li>Free cancellation before 17 October.</li>
            <li>Review this host's full policy for details.</li>
          </ul>
          <button className="text-base font-semibold underline block pt-2">Show more</button>
        </div>

      </div>
    </section>
  );
}