"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  isDragging: boolean;
  hasMoved: boolean;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  isDragging: false,
  hasMoved: false,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const [isHolding, setIsHolding] = useState(false);
  const [holdTimeout, setHoldTimeout] = useState<NodeJS.Timeout | null>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isMouseDownRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  // Create tripled items for infinite loop
  const tripliedItems = [...items, ...items, ...items];
  const originalLength = items.length;

  useEffect(() => {
    if (carouselRef.current) {
      // Start in the middle set
      const cardWidth = isMobile() ? 160 : 288;
      const gap = isMobile() ? 4 : 8;
      const startPosition = (cardWidth + gap) * originalLength;
      carouselRef.current.scrollLeft = startPosition + initialScroll;
      
      // Set up scroll event listener for infinite loop detection
      const handleScroll = () => {
        if (!carouselRef.current || isTransitioning) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardWidth = isMobile() ? 160 : 288;
        const gap = isMobile() ? 4 : 8;
        const itemWidth = cardWidth + gap;
        
        // Check if we've scrolled to the beginning of the first set
        if (scrollLeft <= itemWidth) {
          setIsTransitioning(true);
          // Jump to the equivalent position in the third set
          carouselRef.current.scrollLeft = scrollLeft + (originalLength * itemWidth);
          setTimeout(() => setIsTransitioning(false), 10);
        }
        
        // Check if we've scrolled to the end of the third set
        else if (scrollLeft >= scrollWidth - clientWidth - itemWidth) {
          setIsTransitioning(true);
          // Jump to the equivalent position in the first set
          carouselRef.current.scrollLeft = scrollLeft - (originalLength * itemWidth);
          setTimeout(() => setIsTransitioning(false), 10);
        }
      };

      carouselRef.current.addEventListener('scroll', handleScroll);
      return () => {
        if (carouselRef.current) {
          carouselRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, [initialScroll, originalLength, isTransitioning]);

  // Professional mobile detection
  const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  };

  const isTablet = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  };

  // Enhanced auto-scroll with device-specific optimization
  useEffect(() => {
    if (carouselRef.current && autoScrollEnabled && !isHovered) {
      const scrollSpeed = isMobile() ? 0.5 : isTablet() ? 0.8 : 1;
      const interval = setInterval(() => {
        if (!isDragging && carouselRef.current) {
          carouselRef.current.scrollBy({ 
            left: scrollSpeed, 
            behavior: 'auto' 
          });
        }
      }, 16); // 60fps for ultra-smooth animation
      return () => clearInterval(interval);
    }
  }, [autoScrollEnabled, isDragging, isHovered]);

  // Cleanup function to reset all drag states
  const resetDragState = () => {
    if (holdTimeout) {
      clearTimeout(holdTimeout);
      setHoldTimeout(null);
    }
    setIsMouseDown(false);
    isMouseDownRef.current = false;
    setIsHolding(false);
    setIsDragging(false);
    setHasMoved(false);
    setTimeout(() => setAutoScrollEnabled(true), 1000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsMouseDown(true);
    isMouseDownRef.current = true;
    setIsHolding(true);
    setHasMoved(false);
    setIsDragging(false);
    
    setDragStart({
      x: e.pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft,
    });

    // Start hold timer - enable drag after 200ms
    const timeout = setTimeout(() => {
      // Only enable drag if mouse is still down
      if (isMouseDownRef.current) {
        setIsDragging(true);
        setAutoScrollEnabled(false);
      }
    }, 200);
    setHoldTimeout(timeout);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!carouselRef.current || !isMouseDown) return;
    
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = Math.abs(x - dragStart.x);
    
    // If user moves significantly while holding, enable drag immediately
    if (isHolding && distance > 10 && !isDragging && isMouseDown) {
      if (holdTimeout) {
        clearTimeout(holdTimeout);
        setHoldTimeout(null);
      }
      setIsDragging(true);
      setAutoScrollEnabled(false);
    }
    
    if (isDragging && isMouseDown) {
      e.preventDefault();
      setHasMoved(true);
      const walk = (x - dragStart.x) * 2; // Multiply by 2 for faster scrolling
      carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    resetDragState();
  };

  const handleMouseLeave = () => {
    resetDragState();
    setIsHovered(false);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    
    setIsMouseDown(true); // Use same state for touch
    isMouseDownRef.current = true;
    setIsHolding(true);
    setHasMoved(false);
    setIsDragging(false);
    
    const touch = e.touches[0];
    setDragStart({
      x: touch.pageX - carouselRef.current.offsetLeft,
      scrollLeft: carouselRef.current.scrollLeft,
    });

    // Start hold timer - enable drag after 200ms
    const timeout = setTimeout(() => {
      // Only enable drag if touch is still active
      if (isMouseDownRef.current) {
        setIsDragging(true);
        setAutoScrollEnabled(false);
      }
    }, 200);
    setHoldTimeout(timeout);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current || !isMouseDown) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - carouselRef.current.offsetLeft;
    const distance = Math.abs(x - dragStart.x);
    
    // If user moves significantly while holding, enable drag immediately
    if (isHolding && distance > 10 && !isDragging && isMouseDown) {
      if (holdTimeout) {
        clearTimeout(holdTimeout);
        setHoldTimeout(null);
      }
      setIsDragging(true);
      setAutoScrollEnabled(false);
    }
    
    if (isDragging && isMouseDown) {
      setHasMoved(true);
      const walk = (x - dragStart.x) * 2;
      carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    resetDragState();
  };

  // Global mouse events
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!carouselRef.current || !isMouseDown) return;
      
      const x = e.pageX - carouselRef.current.offsetLeft;
      const distance = Math.abs(x - dragStart.x);
      
      // If user moves significantly while holding, enable drag immediately
      if (isHolding && distance > 10 && !isDragging && isMouseDown) {
        if (holdTimeout) {
          clearTimeout(holdTimeout);
          setHoldTimeout(null);
        }
        setIsDragging(true);
        setAutoScrollEnabled(false);
      }
      
      if (isDragging && isMouseDown) {
        e.preventDefault();
        setHasMoved(true);
        const walk = (x - dragStart.x) * 2;
        carouselRef.current.scrollLeft = dragStart.scrollLeft - walk;
      }
    };

    const handleGlobalMouseUp = () => {
      resetDragState();
    };

    if (isMouseDown) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isMouseDown, isHolding, isDragging, dragStart, holdTimeout]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 180 : 300;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = isMobile() ? 180 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 160 : 288;
      const gap = isMobile() ? 4 : 8;
      // Adjust index for the current set position
      const adjustedIndex = index % originalLength;
      const scrollPosition = (cardWidth + gap) * (adjustedIndex + originalLength + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(adjustedIndex);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex, isDragging, hasMoved }}
    >
      <div className="relative w-full overflow-hidden max-w-full">
        <div
          className={cn(
            "flex w-full overflow-x-scroll overscroll-x-auto py-8 sm:py-10 md:py-20 select-none",
            "[scrollbar-width:none] [-webkit-scrollbar:none] [&::-webkit-scrollbar]:hidden",
            "scroll-smooth supports-[scroll-behavior:smooth]:scroll-smooth",
            isTransitioning && "scroll-auto", // Disable smooth scrolling during position jumps
            isDragging ? "cursor-grabbing" : (isHolding ? "cursor-grabbing" : "cursor-grab"),
            "touch-pan-x", // Enable horizontal panning on mobile
          )}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            userSelect: 'none',
            WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
            touchAction: 'pan-x pinch-zoom', // Optimize touch interactions
          }}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4 pr-4",
              "max-w-full",
            )}
          >
            {tripliedItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * (index % originalLength), // Use modulo for consistent delays
                  ease: "easeOut",
                }}
                key={`card-${index}`}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Professional Mobile-First Navigation */}
        <div className="flex justify-center sm:justify-end items-center gap-4 px-4 sm:mr-6 md:mr-10 mt-6 sm:mt-4 mb-6 sm:mb-4">
          <button
            className={cn(
              "carousel-nav-btn relative z-40 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl",
              "!h-12 !w-12 sm:!h-11 sm:!w-11 md:!h-10 md:!w-10 !p-0", // Override global styles with !important
              "touch-manipulation", // Optimize for touch
              "focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
              "border border-gray-300" // Add border for definition
            )}
            onClick={scrollLeft}
            aria-label="Previous projects"
            style={{ minHeight: 'auto', minWidth: 'auto', padding: '0' }} // Inline override
          >
            <svg 
              className="h-5 w-5 sm:h-4 sm:w-4 text-white pointer-events-none" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className={cn(
              "carousel-nav-btn relative z-40 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 active:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl",
              "!h-12 !w-12 sm:!h-11 sm:!w-11 md:!h-10 md:!w-10 !p-0", // Override global styles with !important
              "touch-manipulation", // Optimize for touch
              "focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
              "border border-gray-300" // Add border for definition
            )}
            onClick={scrollRight}
            aria-label="Next projects"
            style={{ minHeight: 'auto', minWidth: 'auto', padding: '0' }} // Inline override
          >
            <svg 
              className="h-5 w-5 sm:h-4 sm:w-4 text-white pointer-events-none" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex, isDragging, hasMoved } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    // Only open if we're not currently dragging and haven't moved during the interaction
    if (!isDragging && !hasMoved) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-3xl rounded-3xl bg-white p-4 font-sans md:p-8 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-4xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-8">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={cn(
          "relative z-10 flex flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900",
          "h-64 w-44 sm:h-72 sm:w-48 md:h-[30rem] md:w-72", // Progressive sizing
          "touch-manipulation", // Better touch response
          "transition-all duration-300 ease-out", // Smooth interactions
          "hover:scale-[1.02] active:scale-[0.98]", // Subtle feedback
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-6 sm:p-8 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-xs sm:text-sm md:text-base font-medium text-white/90"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-lg sm:text-xl md:text-3xl font-semibold [text-wrap:balance] text-white leading-tight"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className={cn("absolute inset-0 z-10 object-cover blur-sm")}
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
}; 