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
        className="mt-16 text-center"
      >
        <h1 className="bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-8">
          Illuminating <br /> Innovation
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Discover the intelligent solutions we've crafted to transform businesses and drive unprecedented growth.
        </p>
      </motion.div>
    </LampContainer>
  );
} 