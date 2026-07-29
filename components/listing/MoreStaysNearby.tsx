"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

type NearbyStay = {
  title: string;
  pricePerNight: string;
  rating: string;
  imageSrc: string;
  imageAlt: string;
};

const stays: NearbyStay[] = [
  {
    title: "The Tropical Studio | 5 mins to Beach",
    pricePerNight: "₹22,824",
    rating: "4.96",
    imageSrc:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=900&q=80",
    imageAlt: "Tropical studio living room with a woven chair",
  },
  {
    title: "Casa Calangute · Poolside 1BHK",
    pricePerNight: "₹19,650",
    rating: "4.89",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
    imageAlt: "Modern home beside a swimming pool",
  },
  {
    title: "Sunlit Retreat near Candolim Beach",
    pricePerNight: "₹24,110",
    rating: "4.92",
    imageSrc:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    imageAlt: "Sunlit villa terrace with a pool",
  },
  {
    title: "Coastal Haven with Private Balcony",
    pricePerNight: "₹18,975",
    rating: "4.84",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    imageAlt: "Warm bedroom with modern coastal decor",
  },
  {
    title: "Palm Grove Apartment in North Goa",
    pricePerNight: "₹20,499",
    rating: "4.91",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    imageAlt: "Contemporary home surrounded by palm trees",
  },
  {
    title: "Serene 2BHK with Rooftop Pool",
    pricePerNight: "₹26,740",
    rating: "4.97",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80",
    imageAlt: "Bright living room with contemporary furniture",
  },
  {
    title: "Coconut Lane Cottage · Candolim",
    pricePerNight: "₹17,820",
    rating: "4.87",
    imageSrc:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    imageAlt: "Elegant cottage exterior at dusk",
  },
  {
    title: "Boutique Stay Steps from the Shore",
    pricePerNight: "₹21,600",
    rating: "4.94",
    imageSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    imageAlt: "Boutique bedroom with large windows",
  },
  {
    title: "Garden Suite with Sunset Veranda",
    pricePerNight: "₹23,350",
    rating: "4.90",
    imageSrc:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=900&q=80",
    imageAlt: "Modern garden suite with outdoor space",
  },
  {
    title: "Beachside Escape · Peaceful 1BHK",
    pricePerNight: "₹20,950",
    rating: "4.93",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    imageAlt: "Quiet apartment bedroom with warm natural light",
  },
];

const staysPerPage = 5;

export function MoreStaysNearby() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(stays.length / staysPerPage);
  const visibleStays = stays.slice(
    page * staysPerPage,
    (page + 1) * staysPerPage,
  );

  return (
    <section aria-labelledby="more-stays-heading" className="mt-16 pb-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 id="more-stays-heading" className="text-2xl font-semibold">
          More stays nearby
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#717171]" aria-live="polite">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((currentPage) => currentPage - 1)}
            disabled={page === 0}
            aria-label="Previous nearby stays"
            tabIndex={0}
            className="rounded-full border border-[#DDDDDD] p-2 transition-shadow duration-200 ease-in-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-none"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setPage((currentPage) => currentPage + 1)}
            disabled={page === totalPages - 1}
            aria-label="Next nearby stays"
            tabIndex={0}
            className="rounded-full border border-[#DDDDDD] p-2 transition-shadow duration-200 ease-in-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:shadow-none"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
        >
          {visibleStays.map((stay) => (
            <article key={stay.title} className="group min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F7F7F7]">
                <Image
                  src={stay.imageSrc}
                  alt={stay.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 224px"
                  className="object-cover group-hover:brightness-75"
                />
                <button
                  type="button"
                  aria-label={`Save ${stay.title}`}
                  tabIndex={0}
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#222222] shadow-sm transition-colors duration-200 ease-in-out hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
                >
                  <Heart aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
              <h3 className="mt-3 truncate text-sm font-bold text-[#222222]">
                {stay.title}
              </h3>
              <div className="mt-1 flex items-center justify-between gap-2 text-sm text-[#717171]">
                <span>{stay.pricePerNight} / night</span>
                <span className="shrink-0 font-medium text-[#222222]">
                  ★ {stay.rating}
                </span>
              </div>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
