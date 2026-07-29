import Link from "next/link";
import { Globe, Menu } from "lucide-react";
import { SearchPill } from "./SearchPill";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#EBEBEB] bg-white">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-20 max-w-[1120px] items-center justify-between px-6"
      >
        <Link
          href="/"
          aria-label="Airbnb home"
          tabIndex={0}
          className="shrink-0 text-xl font-bold text-[#FF385C] transition-opacity duration-200 ease-in-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
        >
          Airbnb
        </Link>

        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <SearchPill />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Become a host"
            tabIndex={0}
            className="hidden rounded-full px-4 py-3 text-sm font-bold text-[#222222] transition-colors duration-200 ease-in-out hover:bg-[#F7F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2 md:block"
          >
            Become a host
          </button>

          <button
            type="button"
            aria-label="Choose a language and currency"
            tabIndex={0}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F7F7] text-[#717171] transition-colors duration-200 hover:bg-[#EBEBEB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
          >
            <Globe aria-hidden="true" className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Main navigation menu"
            tabIndex={0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDDDDD] bg-[#F7F7F7] text-[#717171] transition-colors duration-200 hover:bg-[#EBEBEB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
          >
            <Menu aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
