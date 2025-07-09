"use client";
import React from "react";
import { motion } from "motion/react";
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
        className="mt-8 text-center"
      >
        <h1 className="bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-6">
          Illuminating <br /> Innovation
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover the intelligent solutions we've crafted to transform businesses and drive unprecedented growth.
        </p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-lg flex items-center gap-2">
            Start Your Project
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button className="border border-white text-white hover:bg-white hover:text-black bg-transparent rounded-full px-8 py-3 text-lg">
            View Our Process
          </Button>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
} 