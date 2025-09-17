"use client";

import { cn } from "@/lib/utils";

export function DotPattern({ className }: { className?: string }) {
  // Placeholder SVG pattern for demonstration
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
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
} 