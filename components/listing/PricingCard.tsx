type PricingCardProps = {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function PricingCard({
  pricePerNight,
  cleaningFee,
  serviceFee,
}: PricingCardProps) {
  const nights = 5;
  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <aside
      aria-label="Booking and pricing"
      className="sticky top-24 rounded-xl border border-[#DDDDDD] bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-[22px] font-semibold text-[#222222]">
          {formatCurrency(pricePerNight)}
        </span>
        <span className="text-base text-[#717171]">night</span>
      </div>

      <div className="mt-4 overflow-hidden rounded-lg border border-[#B0B0B0]">
        <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
          <button
            type="button"
            aria-label="Select check-in date"
            tabIndex={0}
            className="border-r border-[#B0B0B0] px-3 py-2 text-left transition-colors duration-200 ease-in-out hover:bg-[#F7F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#222222]"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wide text-[#222222]">
              Check-in
            </span>
            <span className="block text-sm text-[#717171]">8/15/2026</span>
          </button>
          <button
            type="button"
            aria-label="Select checkout date"
            tabIndex={0}
            className="px-3 py-2 text-left transition-colors duration-200 ease-in-out hover:bg-[#F7F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#222222]"
          >
            <span className="block text-[10px] font-bold uppercase tracking-wide text-[#222222]">
              Checkout
            </span>
            <span className="block text-sm text-[#717171]">8/20/2026</span>
          </button>
        </div>
        <button
          type="button"
          aria-label="Select number of guests"
          tabIndex={0}
          className="w-full px-3 py-2 text-left transition-colors duration-200 ease-in-out hover:bg-[#F7F7F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#222222]"
        >
          <span className="block text-[10px] font-bold uppercase tracking-wide text-[#222222]">
            Guests
          </span>
          <span className="block text-sm text-[#717171]">2 guests</span>
        </button>
      </div>

      <button
        type="button"
        aria-label="Reserve this listing"
        tabIndex={0}
        className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] px-6 py-3.5 text-base font-semibold text-white transition-opacity duration-200 ease-in-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
      >
        Reserve
      </button>

      <p className="mt-4 text-center text-sm text-[#717171]">
        You won&apos;t be charged yet
      </p>

      <dl className="mt-6 space-y-3 border-t border-[#EBEBEB] pt-6 text-base text-[#222222]">
        <div className="flex justify-between">
          <dt>
            {formatCurrency(pricePerNight)} x {nights} nights
          </dt>
          <dd>{formatCurrency(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Cleaning fee</dt>
          <dd>{formatCurrency(cleaningFee)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Airbnb service fee</dt>
          <dd>{formatCurrency(serviceFee)}</dd>
        </div>
        <div className="flex justify-between border-t border-[#EBEBEB] pt-4 font-semibold">
          <dt>Total before taxes</dt>
          <dd>{formatCurrency(total)}</dd>
        </div>
      </dl>
    </aside>
  );
}
