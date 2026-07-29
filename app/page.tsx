"use client";
import { TopNav } from "@/components/layout/TopNav";
import { HeroImageGrid } from "@/components/listing/HeroImageGrid";
import { ListingHeader } from "@/components/listing/ListingHeader";
import StickySubHeader from "@/components/listing/StickySubHeader";
import { MoreStaysNearby } from "@/components/listing/MoreStaysNearby";

import ListingOverview from "@/components/listing/ListingOverview";
import ListingDescription from "@/components/listing/ListingDescription";
import WhereYouSleep from "@/components/listing/WhereYouSleep";
import Amenities from "@/components/listing/Amenities";
import BookingCalendar from "@/components/listing/BookingCalender";
import BookingCard from "@/components/listing/BookingCard";

import ReviewsSection from "@/components/listing/ReviewsSection";
import LocationSection from "@/components/listing/LocationSection";
import HostProfile from "@/components/listing/HostProfile";
import Policies from "@/components/listing/Policies";
import { listing } from "@/lib/mock-listing";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#222222]">
      <TopNav />

      <main className="mx-auto w-full max-w-[1120px] flex-1 px-6 pb-8">
        <ListingHeader listing={listing} />
        
        <HeroImageGrid images={listing.images} />
        
        <StickySubHeader />

        {/* Two-Column Layout for Main Content */}
        <div className="mt-8 flex flex-col md:flex-row gap-12 relative">
          
          {/* Left Column - Listing Details (approx 66% width) */}
          <div className="flex-1 min-w-0 md:w-[60%] lg:w-[66%]">
            <ListingOverview />
            <ListingDescription />
            <WhereYouSleep />
            <Amenities />
            <BookingCalendar />
          </div>

          {/* Right Column - Sticky Booking Widget (approx 33% width) */}
          <div className="hidden md:block md:w-[40%] lg:w-[33%] relative">
            {/* The BookingCard has 'sticky top-28' applied inside its component file */}
            <BookingCard />
          </div>
          
        </div>

        {/* Full-width bottom sections */}
        <div className="mt-12">
          <ReviewsSection />
          <LocationSection />
          <HostProfile />
          <Policies />
          <MoreStaysNearby />
        </div>
      </main>
    </div>
  );
}