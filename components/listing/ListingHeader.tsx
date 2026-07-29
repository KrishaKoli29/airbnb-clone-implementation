import { Heart, Upload } from "lucide-react";
import type { Listing } from "@/lib/mock-listing";

type ListingHeaderProps = {
  listing: Pick<Listing, "title">;
};

export function ListingHeader({ listing }: ListingHeaderProps) {
  return (
    <header className="mx-auto mb-6 flex max-w-[1120px] items-end justify-between gap-4 pt-6">
      <h1 className="text-[26px] font-semibold text-gray-900">
        {listing.title}
      </h1>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Share this listing"
          tabIndex={0}
          className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium underline transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
        >
          <Upload aria-hidden="true" className="h-4 w-4" />
          Share
        </button>
        <button
          type="button"
          aria-label="Save this listing"
          tabIndex={0}
          className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm font-medium underline transition-colors duration-200 ease-in-out hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
        >
          <Heart aria-hidden="true" className="h-4 w-4" />
          Save
        </button>
      </div>
    </header>
  );
}
