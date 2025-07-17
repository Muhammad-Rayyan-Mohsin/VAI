"use client";
import React, { useEffect, useState } from "react";

export const StarsBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random star positions
  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.5 ? 1 : 2,
      opacity: Math.random() * 0.5 + 0.3,
      animationDelay: Math.random() * 5,
    }));
  };

  const stars = generateStars(100);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white rounded-full animate-pulse ${
            star.size === 1 ? "w-0.5 h-0.5" : "w-1 h-1"
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}; 