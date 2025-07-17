"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-screen flex-col items-center justify-center bg-black w-full z-0 overflow-visible min-h-[80vh] sm:min-h-[90vh]",
        className
      )}
    >
      <div className="relative flex w-full h-full items-center justify-center isolate z-0 overflow-visible">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 sm:h-48 md:h-56 w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-white via-white/70 to-transparent text-white [--conic-position:from_70deg_at_center_top] top-0 overflow-visible"
        >
          <div className="absolute w-[100%] left-0 bg-black h-32 sm:h-36 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 sm:w-36 md:w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 sm:h-48 md:h-56 w-[20rem] sm:w-[25rem] md:w-[30rem] bg-gradient-conic from-transparent via-white/70 to-white text-white [--conic-position:from_290deg_at_center_top] top-0 overflow-visible"
        >
          <div className="absolute w-32 sm:w-36 md:w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-32 sm:h-36 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-32 sm:h-40 md:h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-32 sm:h-40 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 sm:h-30 md:h-36 w-[20rem] sm:w-[24rem] md:w-[28rem] top-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-3xl"></div>
        <div className="absolute inset-auto z-50 h-16 sm:h-20 md:h-24 w-[14rem] sm:w-[17rem] md:w-[20rem] top-1/2 -translate-y-1/2 rounded-full bg-white opacity-80 blur-2xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 sm:h-30 md:h-36 w-48 sm:w-56 md:w-64 top-1/2 -translate-y-[6rem] sm:-translate-y-[7rem] md:-translate-y-[8rem] rounded-full bg-white opacity-90 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "20rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1 w-[20rem] sm:w-[25rem] md:w-[30rem] top-1/2 -translate-y-[6rem] sm:-translate-y-[7rem] md:-translate-y-[8rem] bg-white shadow-white shadow-2xl"
        ></motion.div>
        
        {/* Additional light source for more intensity */}
        <motion.div
          initial={{ width: "8rem", opacity: 0 }}
          whileInView={{ width: "18rem", opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-40 h-2 w-[18rem] sm:w-[22rem] md:w-[25rem] top-1/2 -translate-y-[5.5rem] sm:-translate-y-[6.5rem] md:-translate-y-[7.5rem] bg-white/80 rounded-full blur-sm shadow-white shadow-xl"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-32 sm:h-38 md:h-44 w-full top-0 bg-black"></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-4 sm:px-5 mt-auto mb-16 sm:mb-24 md:mb-32">
        {children}
      </div>
    </div>
  );
}; 