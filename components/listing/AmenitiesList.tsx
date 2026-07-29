import {
  Car,
  Coffee,
  Flame,
  Leaf,
  Monitor,
  Shirt,
  Tv,
  UtensilsCrossed,
  Wifi,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AmenitiesListProps = {
  amenities: string[];
};

const amenityIcons: Record<string, LucideIcon> = {
  "Fast Wi-Fi": Wifi,
  "Dedicated workspace": Monitor,
  "Free street parking": Car,
  Kitchen: UtensilsCrossed,
  Washer: Shirt,
  Dryer: Wind,
  "Central heating": Flame,
  "Private patio": Leaf,
  "Smart TV": Tv,
  "Coffee maker": Coffee,
};

export function AmenitiesList({ amenities }: AmenitiesListProps) {
  const visibleAmenities = amenities.slice(0, 10);

  return (
    <section
      id="amenities"
      aria-label="Amenities"
      className="border-b border-[#EBEBEB] py-8"
    >
      <h2 className="text-[22px] font-medium leading-7 text-[#222222]">
        What this place offers
      </h2>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visibleAmenities.map((amenity) => {
          const Icon = amenityIcons[amenity] ?? Wifi;

          return (
            <li key={amenity} className="flex items-center gap-4 text-base text-[#222222]">
              <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-[#222222]" />
              <span>{amenity}</span>
            </li>
          );
        })}
      </ul>

      {amenities.length > 10 && (
        <button
          type="button"
          aria-label={`Show all ${amenities.length} amenities`}
          tabIndex={0}
          className="mt-6 rounded-lg border border-[#222222] px-6 py-3 text-base font-medium text-[#222222] transition-colors duration-200 ease-in-out hover:bg-[#F7F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
        >
          Show all {amenities.length} amenities
        </button>
      )}
    </section>
  );
}
