"use client";

import { cn } from "@/lib/utils";

export function DotPattern({ className, glow }: { className?: string; glow?: boolean }) {
  return (
    <svg
      className={cn(className)}
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
        {glow && (
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" filter={glow ? "url(#glow)" : undefined} />
    </svg>
  );
} 