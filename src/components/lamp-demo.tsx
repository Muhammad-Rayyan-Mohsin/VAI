"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 sm:mt-12 md:mt-16 text-center px-4 sm:px-6"
      >
        <h1 className="bg-gradient-to-br from-white to-gray-300 py-2 sm:py-4 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-transparent mb-4 sm:mb-6 md:mb-8 leading-tight">
          Illuminating <br className="block sm:hidden" />
          <span className="hidden sm:inline"><br /></span>
          Innovation
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover the intelligent solutions we've crafted to transform businesses and drive unprecedented growth.
        </p>
      </motion.div>
    </LampContainer>
  );
} 