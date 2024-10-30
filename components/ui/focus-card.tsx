"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/utils";
import { ShowcaseNode } from "@/types";

export const CardShowcase = React.memo(
  ({
    showcase,
    index,
    hovered,
    setHovered,
    className,
  }: {
    showcase: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    className: string;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        className
      )}
    >
      <Image
        src={showcase?.image?.url}
        alt={showcase.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {showcase.title}
        </div>
      </div>
    </div>
  )
);

CardShowcase.displayName = "CardShowcase";

export function FocusCards({ showcases }: { showcases: ShowcaseNode[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {showcases.map((showcase, index) => (
        <CardShowcase
          key={index}
          showcase={showcase}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          className={index === 3 || index === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
}
