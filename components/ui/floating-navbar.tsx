"use client";
import React from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export function FloatingNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-full border border-neutral-200 bg-white/80 px-6 py-2 shadow-lg backdrop-blur-md dark:border-white/20 dark:bg-black/80">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className="flex items-center gap-2 px-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          {item.icon}
          <span className="hidden sm:inline text-neutral-700 dark:text-neutral-200 font-medium text-sm">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
} 