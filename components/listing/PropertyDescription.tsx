type PropertyDescriptionProps = {
  description: string;
};

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <section aria-label="About this property" className="py-8">
      <p className="whitespace-pre-line text-base leading-6 text-[#222222]">
        {description}
      </p>

      <button
        type="button"
        aria-label="Show more about this property"
        tabIndex={0}
        className="mt-4 text-base font-medium text-[#222222] underline decoration-[#222222] underline-offset-2 transition-colors duration-200 ease-in-out hover:text-[#717171] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#222222] focus-visible:ring-offset-2"
      >
        Show more
      </button>
    </section>
  );
}
