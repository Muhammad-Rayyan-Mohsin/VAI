"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="absolute inset-0 bg-neutral-900 w-full h-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
} 