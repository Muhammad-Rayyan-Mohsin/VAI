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

  // Auto-scroll effect
  useEffect(() => {
    if (carouselRef.current && autoScrollEnabled && !isHovered) {
      const interval = setInterval(() => {
        if (!isDragging) {
          carouselRef.current?.scrollBy({ left: 6, behavior: 'auto' });
        }
      }, 10);
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
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
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

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex, isDragging, hasMoved }}
    >
      <div className="relative w-full overflow-hidden">
                  <div
            className={cn(
              "flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20 select-none",
              isTransitioning && "scroll-auto", // Disable smooth scrolling during position jumps
              isDragging ? "cursor-grabbing" : (isHolding ? "cursor-grabbing" : "cursor-grab")
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
            style={{ userSelect: 'none' }}
          >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl",
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
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
            onClick={scrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"
            onClick={scrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
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
        className="relative z-10 flex h-80 w-40 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-72 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
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