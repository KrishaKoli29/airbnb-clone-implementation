"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LayoutGrid } from "lucide-react";
// FIX: Import the modal and the exported categories mapping
import { PhotoTourModal, photoCategories } from "./PhotoTourModal";
import type { ListingImage } from "@/lib/mock-listing";

interface HeroImageGridProps {
  images: ListingImage[];
}

export function HeroImageGrid({ images }: HeroImageGridProps) {
  // FIX: Change basic 'isOpen' boolean to store the target category title
  const [activeTourCategory, setActiveTourCategory] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  // FIX: Helper to map a raw image index to its category title, then open tour
  const openTourAtImageIndex = (rawIndex: number) => {
    const safeIndex = rawIndex % images.length;
    
    // Find the primary category for this image index
    const category = photoCategories.find((c) =>
      c.imageIndexes.some((idx) => (idx % images.length) === safeIndex)
    );

    // Default to the first category if not found, or use Additional photos
    const targetTitle = category?.title || photoCategories[photoCategories.length - 1].title;
    
    setActiveTourCategory(targetTitle);
  };

  return (
    <>
      <div className="relative pt-6">
        <div className="flex h-[300px] md:h-[400px] lg:h-[460px] gap-2 overflow-hidden rounded-xl">
          
          {/* Left Main Image (Index 0) */}
          <div 
            className="relative h-full w-full md:w-1/2 cursor-pointer group"
            onClick={() => openTourAtImageIndex(0)} // FIX: Use helper
          >
            <Image 
              src={images[0].src} 
              alt={images[0].alt} 
              fill 
              className="object-cover transition duration-300 group-hover:brightness-90" 
              priority
            />
            {/* Subtle hover overlay matching Airbnb */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Right Side Grid (Hidden on mobile) */}
          <div className="hidden md:grid w-1/2 grid-cols-2 grid-rows-2 gap-2">
            {images.slice(1, 5).map((img, idx) => (
              <div 
                key={idx} 
                className="relative h-full w-full cursor-pointer group"
                onClick={() => openTourAtImageIndex(idx + 1)} // FIX: Use helper (add 1 because slice started at 1)
              >
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover transition duration-300 group-hover:brightness-90" 
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Show all photos button */}
        <button
          onClick={() => setActiveTourCategory(photoCategories[0].title)} // FIX: Open at the very top
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-black bg-white px-4 py-1.5 text-sm font-semibold transition hover:bg-gray-100 shadow-md"
        >
          <LayoutGrid className="h-4 w-4" />
          Show all photos
        </button>
      </div>

      {/* The Photo Tour Modal */}
      <PhotoTourModal 
        isOpen={activeTourCategory !== null} // FIX: Boolean check based on category state
        onClose={() => setActiveTourCategory(null)} // FIX: Reset state on close
        images={images} 
        initialCategoryTitle={activeTourCategory || undefined} // FIX: Pass target to modal
      />
    </>
  );
}