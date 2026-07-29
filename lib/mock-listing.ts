export type ListingImage = {
  src: string;
  alt: string;
};

export type Host = {
  name: string;
  avatarSrc: string;
  isSuperhost: boolean;
  yearsHosting: number;
};

export type Listing = {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  images: ListingImage[];
  host: Host;
  propertyType: string;
  guestCapacity: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: string[];
  description: string;
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
};

export const listing: Listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  location: "Noe Valley, San Francisco, California",
  rating: 4.89,
  reviewCount: 142,
  images: [
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      alt: "Sunlit living room with bay windows and original hardwood floors",
    },
    {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      alt: "Modern kitchen with marble countertops and brass fixtures",
    },
    {
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
      alt: "Primary bedroom with garden views and linen bedding",
    },
    {
      src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      alt: "Spa-style bathroom with walk-in shower and heated floors",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      alt: "Private backyard patio with string lights and succulent garden",
    },
  ],
  host: {
    name: "Elena",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    isSuperhost: true,
    yearsHosting: 8,
  },
  propertyType: "Entire home",
  guestCapacity: 4,
  bedrooms: 2,
  beds: 2,
  baths: 1,
  amenities: [
    "Fast Wi-Fi",
    "Dedicated workspace",
    "Free street parking",
    "Kitchen",
    "Washer",
    "Dryer",
    "Central heating",
    "Private patio",
    "Smart TV",
    "Coffee maker",
  ],
  description:
    "Step into a lovingly restored Victorian flat tucked on a quiet tree-lined block in Noe Valley. Sun pours through bay windows into a open living room with original hardwood floors, while the updated kitchen opens to a private patio perfect for morning coffee. Both bedrooms are quiet and face the garden, and you are a short walk from 24th Street cafes, Dolores Park, and the J-Church Muni line downtown.",
  pricePerNight: 245,
  cleaningFee: 95,
  serviceFee: 68,
};
