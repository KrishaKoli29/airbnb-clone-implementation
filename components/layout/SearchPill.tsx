import { House, Search } from "lucide-react";

const searchSegments = ["Anywhere", "Anytime", "Add guests"] as const;

export function SearchPill() {
  return (
    <button
      type="button"
      aria-label="Open search: destinations, dates, and guests"
      tabIndex={0}
      className="group flex h-12 items-center rounded-full border border-[#DDDDDD] bg-white py-3 pl-6 pr-2 shadow-sm transition-all duration-200 ease-in-out hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
    >
      <div className="flex items-center text-sm font-medium text-[#222222]">
        {searchSegments.map((segment, index) => (
          <div key={segment} className="flex items-center">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="mx-4 h-6 w-px bg-[#DDDDDD]"
              />
            )}

            <span
              className={`flex items-center gap-2 ${
                index < 2 ? "font-bold" : ""
              }`}
            >
              {index === 0 && (
                <House aria-hidden="true" className="h-4 w-4" />
              )}
              {segment}
            </span>
          </div>
        ))}
      </div>

      <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF385C] text-white transition-colors duration-200 ease-in-out group-hover:bg-[#E31C5F]">
        <Search aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
      </span>
    </button>
  );
}