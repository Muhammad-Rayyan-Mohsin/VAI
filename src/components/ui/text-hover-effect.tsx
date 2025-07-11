"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        if (svgRef.current) {
          const svgRect = svgRef.current.getBoundingClientRect();
          const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
          const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
          setMaskPosition({
            cx: `${Math.max(0, Math.min(100, cxPercentage))}%`,
            cy: `${Math.max(0, Math.min(100, cyPercentage))}%`,
          });
        }
      });
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursor]);

  const textStyle = {
    fontFamily: 'Inter, helvetica, sans-serif',
    fontSize: '48px',
    fontWeight: '600',
    fill: 'transparent',
    strokeWidth: '1.2',
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#000000" />
              <stop offset="25%" stopColor="#000000" />
              <stop offset="50%" stopColor="#000000" />
              <stop offset="75%" stopColor="#000000" />
              <stop offset="100%" stopColor="#000000" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Background stroke text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          ...textStyle,
          stroke: '#d1d5db',
          opacity: hovered ? 0.7 : 1,
        }}
      >
        {text}
      </text>
      
      {/* Animated drawing stroke */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          ...textStyle,
          stroke: '#d1d5db',
          opacity: 0.3,
        }}
        initial={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      
      {/* Hover gradient fill */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          ...textStyle,
          stroke: 'url(#textGradient)',
          opacity: hovered ? 1 : 0,
        }}
        mask="url(#textMask)"
      >
        {text}
      </text>
    </svg>
  );
}; 