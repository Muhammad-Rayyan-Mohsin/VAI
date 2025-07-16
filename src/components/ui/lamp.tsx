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
        "relative flex h-screen flex-col items-center justify-center bg-black w-full z-0 overflow-visible",
        className
      )}
    >
      <div className="relative flex w-full h-full items-center justify-center isolate z-0 overflow-visible">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-white via-white/70 to-transparent text-white [--conic-position:from_70deg_at_center_top] top-0 overflow-visible"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-white/70 to-white text-white [--conic-position:from_290deg_at_center_top] top-0 overflow-visible"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] top-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-3xl"></div>
        <div className="absolute inset-auto z-50 h-24 w-[20rem] top-1/2 -translate-y-1/2 rounded-full bg-white opacity-80 blur-2xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 top-1/2 -translate-y-[8rem] rounded-full bg-white opacity-90 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1 w-[30rem] top-1/2 -translate-y-[8rem] bg-white shadow-white shadow-2xl"
        ></motion.div>
        
        {/* Additional light source for more intensity */}
        <motion.div
          initial={{ width: "10rem", opacity: 0 }}
          whileInView={{ width: "25rem", opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-40 h-2 w-[25rem] top-1/2 -translate-y-[7.5rem] bg-white/80 rounded-full blur-sm shadow-white shadow-xl"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full top-0 bg-black"></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 mt-auto mb-32">
        {children}
      </div>
    </div>
  );
}; 