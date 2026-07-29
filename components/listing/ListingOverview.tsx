import Image from "next/image";
import hostPhoto from "./photo.jpeg"; // Adjust path if the image is in a different folder
import { KeyRound, Snowflake, Trees, Trophy } from "lucide-react";

type ListingOverviewProps = {
  avatarSrc: string;
};

const highlights = [
  {
    title: "Outdoor entertainment",
    description: "The pool and alfresco dining are great for summer trips.",
    icon: Trees,
  },
  {
    title: "Designed for staying cool",
    description: "Beat the heat with the A/C and ceiling fan.",
    icon: Snowflake,
  },
  {
    title: "Self check-in",
    description: "You can check in with the building staff.",
    icon: KeyRound,
  },
] as const;

export default function ListingOverview() {
  return (
    <section aria-label="Listing overview">
      <header className="border-b border-gray-200 pb-6">
        <h2 className="text-2xl font-semibold text-[#222222]">
          Entire serviced apartment in Candolim, India
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          3 guests · 1 bedroom · 1 bed · 1 bathroom
        </p>
      </header>

      <div className="my-6 flex items-center justify-between gap-6 rounded-2xl border border-gray-300 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Trophy aria-hidden="true" className="h-10 w-10 shrink-0" />
          <div>
            <p className="font-semibold text-[#222222]">Guest favourite</p>
            <p className="mt-1 text-sm text-gray-600">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4 text-sm">
          <span className="font-semibold text-[#222222]">4.95 ★★★★★</span>
          <span aria-hidden="true" className="h-9 w-px bg-gray-300" />
          <button
            type="button"
            aria-label="Read 19 reviews"
            tabIndex={0}
            className="font-bold underline decoration-[#222222] underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
          >
            19 Reviews
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 py-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#F7F7F7]">
            <Image
              src= {hostPhoto}
              alt="Mirashya Homes"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-[#222222]">
              Hosted by Mirashya Homes
            </p>
            <p className="mt-1 text-sm text-gray-600">2 years hosting</p>
          </div>
        </div>
      </div>

      {highlights.map((highlight) => {
        const Icon = highlight.icon;

        return (
          <div
            key={highlight.title}
            className="flex gap-4 border-b border-gray-200 py-6"
          >
            <Icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" />
            <div>
              <p className="font-medium text-[#222222]">{highlight.title}</p>
              <p className="mt-1 text-sm leading-5 text-gray-600">
                {highlight.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
