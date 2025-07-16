"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
      "M-30 -589C-30 -589 38 -184 502 -57C966 70 1034 475 1034 475",
      "M5 -629C5 -629 73 -224 537 -97C1001 30 1069 435 1069 435",
    ];

    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
          className,
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base layer - immediately visible */}
          {paths.map((path, index) => (
            <path
              key={`base-path-${index}`}
              d={path}
              stroke={`url(#baseGradient-${index})`}
              strokeOpacity="0.15"
              strokeWidth="0.5"
            />
          ))}

          {/* Main flowing animations - fluid movement */}
          {paths.map((path, index) => (
            <motion.path
              key={`flow-path-${index}`}
              d={path}
              stroke={`url(#flowGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
              initial={{ pathLength: 1 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + index * 0.2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.05,
              }}
            />
          ))}

          {/* Fast highlight sweeps */}
          {paths.slice(0, 8).map((path, index) => (
            <motion.path
              key={`sweep-path-${index}`}
              d={path}
              stroke={`url(#sweepGradient-${index})`}
              strokeOpacity="0.7"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0.4, 0]
              }}
              transition={{
                duration: 2 + index * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
          
          <defs>
            {/* Base gradients - static background */}
            {paths.map((path, index) => (
              <linearGradient
                id={`baseGradient-${index}`}
                key={`base-gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#000000" stopOpacity="0" />
                <stop offset="40%" stopColor="#1f2937" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#1f2937" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            ))}

            {/* Flow gradients - main animation */}
            {paths.map((path, index) => (
              <linearGradient
                id={`flowGradient-${index}`}
                key={`flow-gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#000000" stopOpacity="0" />
                <stop offset="20%" stopColor="#374151" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1f2937" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#374151" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            ))}

            {/* Sweep gradients - highlight effects */}
            {paths.slice(0, 8).map((path, index) => (
              <linearGradient
                id={`sweepGradient-${index}`}
                key={`sweep-gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop stopColor="#000000" stopOpacity="0" />
                <stop offset="30%" stopColor="#6b7280" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#374151" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#6b7280" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams"; 