"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Upload, X, LayoutGrid } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { createPortal } from "react-dom";
import type { ListingImage } from "@/lib/mock-listing";

export const photoCategories = [
  {
    title: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    imageIndexes: [0, 0],
  },
  {
    title: "Living room 2",
    description: "Lounge seating · Natural light · Smart TV",
    imageIndexes: [0],
  },
  {
    title: "Full kitchen",
    description: "Refrigerator · Stove · Coffee maker · Dining area",
    imageIndexes: [1, 1],
  },
  {
    title: "Bedroom",
    description: "Queen bed · Fresh linens · Garden view",
    imageIndexes: [2, 2],
  },
  {
    title: "Full bathroom",
    description: "Walk-in shower · Fresh towels · Hot water",
    imageIndexes: [3],
  },
  {
    title: "Gym",
    description: "Fitness area · Open space · Natural light",
    imageIndexes: [4],
  },
  {
    title: "Exterior",
    description: "Private patio · Outdoor seating · String lights",
    imageIndexes: [4],
  },
  {
    title: "Pool",
    description: "Shared outdoor pool · Sun loungers · Poolside space",
    imageIndexes: [4],
  },
  {
    title: "Additional photos",
    description: "More details from around the home",
    imageIndexes: [0, 1, 4],
  },
] as const;

type PhotoTourModalProps = {
  images: ListingImage[];
  isOpen: boolean;
  onClose: () => void;
  initialCategoryTitle?: string;
};

const lightboxImageVariants: Variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 64 : -64 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -64 : 64 }),
};

// -- A11Y Utility: Focus Trapping --
const handleFocusTrap = (e: KeyboardEvent, containerRef: RefObject<HTMLElement | null>) => {
  if (e.key !== "Tab") return;
  const container = containerRef.current;
  if (!container) return;
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length === 0) {
    e.preventDefault();
    return;
  }
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  }
};

export function PhotoTourModal({
  images,
  isOpen,
  onClose,
  initialCategoryTitle,
}: PhotoTourModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxCloseButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState(1);
  const isLightboxOpen = selectedImageIndex !== null;

  const handleClose = useCallback(() => {
    onClose();
    previouslyFocusedElementRef.current?.focus();
  }, [onClose]);

  // FIX: Highly reliable scroll calculation using offsetTop instead of scrollIntoView
  const scrollToCategory = useCallback((title: string, behavior: ScrollBehavior = "smooth") => {
    const container = dialogRef.current;
    const targetElement = sectionRefs.current[title];

    if (!container || !targetElement) return;

    // If it's the very first category ("Show all photos"), stay at absolute top
    if (title === photoCategories[0].title) {
      container.scrollTo({ top: 0, behavior });
      return;
    }

    // Otherwise, scroll to the section minus 88px (to perfectly clear the sticky header)
    const offset = targetElement.offsetTop - 88;
    container.scrollTo({ top: offset, behavior });
  }, []);

  // FIX: Single, clean effect to handle the initial opening scroll
  useEffect(() => {
    if (isOpen && initialCategoryTitle) {
      // Use requestAnimationFrame to ensure the browser has painted the modal before scrolling
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToCategory(initialCategoryTitle, "auto");
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [isOpen, initialCategoryTitle, scrollToCategory]);

  const openLightbox = useCallback((index: number) => {
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
    setSlideDirection(1);
    setSelectedImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    previouslyFocusedElementRef.current?.focus();
  }, []);

  const showImage = useCallback(
    (index: number, direction: number) => {
      setSlideDirection(direction);
      setSelectedImageIndex((index + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (isOpen && !isLightboxOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
    }
  }, [isOpen, isLightboxOpen]);

  useEffect(() => {
    if (isLightboxOpen) {
      lightboxCloseButtonRef.current?.focus();
    }
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isLightboxOpen && selectedImageIndex !== null) {
        if (event.key === "Tab") { handleFocusTrap(event, lightboxRef); return; }
        if (event.key === "Escape") { event.preventDefault(); closeLightbox(); return; }
        if (event.key === "ArrowLeft") { event.preventDefault(); showImage(selectedImageIndex - 1, -1); return; }
        if (event.key === "ArrowRight") { event.preventDefault(); showImage(selectedImageIndex + 1, 1); return; }
      } else {
        if (event.key === "Tab") { handleFocusTrap(event, dialogRef); return; }
        if (event.key === "Escape") { event.preventDefault(); handleClose(); return; }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen, isLightboxOpen, selectedImageIndex, closeLightbox, showImage]);

  if (!mounted || !isOpen || images.length === 0) return null;

  return createPortal(
    <>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
        tabIndex={-1}
        className="fixed inset-0 z-[100] overflow-y-auto bg-white text-[#222222] outline-none"
      >
        <header className="sticky top-0 z-20 border-b border-[#EBEBEB] bg-white">
          <div className="relative mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#F7F7F7] focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
            >
              <ChevronLeft aria-hidden="true" className="h-6 w-6" />
            </button>
            <h2 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">Photo tour</h2>
            <div className="flex items-center gap-1">
              <button type="button" className="inline-flex items-center gap-2 rounded-md p-2 text-sm font-medium underline hover:bg-gray-100">
                <Upload className="h-4 w-4" /><span>Share</span>
              </button>
              <button type="button" className="inline-flex items-center gap-2 rounded-md p-2 text-sm font-medium underline hover:bg-gray-100">
                <Heart className="h-4 w-4" /><span>Save</span>
              </button>
            </div>
          </div>
        </header>

        <nav aria-label="Photo categories" className="flex gap-4 overflow-x-auto border-b border-[#EBEBEB] px-8 py-4 no-scrollbar">
          {photoCategories.map((category) => {
            const thumbnail = images[category.imageIndexes[0] % images.length];
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => scrollToCategory(category.title)}
                className="w-28 shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg border border-[#DDDDDD] bg-[#F7F7F7]">
                  <Image src={thumbnail.src} alt="" fill sizes="112px" className="object-cover" />
                </div>
                <span className="mt-2 block text-sm font-medium leading-tight truncate">{category.title}</span>
              </button>
            );
          })}
        </nav>

        <main className="mx-auto max-w-[800px] px-6 py-8">
          {photoCategories.map((category) => (
            <section
              key={category.title}
              ref={(el) => { sectionRefs.current[category.title] = el; }}
              className="outline-none"
              tabIndex={-1}
            >
              <h3 className="text-2xl font-bold text-[#222222]">{category.title}</h3>
              <p className="mt-1 text-sm text-[#717171]">{category.description}</p>
              <div className="mt-5">
                {category.imageIndexes.map((rawIndex, index) => {
                  const safeIndex = rawIndex % images.length;
                  const image = images[safeIndex];
                  return (
                    <button
                      key={`${category.title}-${image.src}-${index}`}
                      onClick={() => openLightbox(safeIndex)}
                      className="relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F7F7F7] block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      aria-label={`Open ${image.alt} in fullscreen`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 800px) calc(100vw - 48px), 800px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      </div>

      <AnimatePresence>
        {isLightboxOpen && selectedImageIndex !== null && (
          <motion.div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${images[selectedImageIndex].alt} lightbox`}
            tabIndex={-1}
            className="fixed inset-0 z-[110] flex flex-col bg-[#F7F7F7] outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="flex h-20 shrink-0 items-center justify-between px-6 sm:px-8">
              <button
                ref={lightboxCloseButtonRef}
                type="button"
                onClick={closeLightbox}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
              >
                <LayoutGrid aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="text-sm font-semibold text-black text-center flex-1 px-4 truncate">
                {photoCategories.find((c) => c.imageIndexes.some((rawIdx) => (rawIdx % images.length) === selectedImageIndex))?.title || "Listing photo"}
              </div>
              <div className="text-sm font-medium text-black">{selectedImageIndex + 1} / {images.length}</div>
            </div>
            <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden px-4 sm:px-20 pb-10">
              <button
                type="button"
                onClick={() => showImage(selectedImageIndex - 1, -1)}
                className="absolute left-4 sm:left-8 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-black shadow-sm transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
              >
                <ChevronLeft aria-hidden="true" className="h-6 w-6" />
              </button>
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.div
                  key={selectedImageIndex}
                  custom={slideDirection}
                  className="relative h-full w-full max-w-6xl"
                  variants={lightboxImageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <Image src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} fill sizes="100vw" className="object-contain" priority />
                </motion.div>
              </AnimatePresence>
              <button
                type="button"
                onClick={() => showImage(selectedImageIndex + 1, 1)}
                className="absolute right-4 sm:right-8 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-black shadow-sm transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none"
              >
                <ChevronRight aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
}