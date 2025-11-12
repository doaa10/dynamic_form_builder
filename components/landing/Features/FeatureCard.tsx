"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Feature } from "./FeaturesData";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const imageSrc =
    currentTheme === "dark" ? feature.image.dark : feature.image.light;

  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Card */}
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        {/* Gradient overlay on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        {/* Content */}
        <div className="relative z-10 space-y-4">
          {/* Visual/Mockup Area with Theme-aware Image */}
          <div className="aspect-video rounded-xl bg-linear-to-br from-muted/50 to-muted flex items-center justify-center overflow-hidden border border-border/30 relative">
            {mounted ? (
              <Image
                src={imageSrc}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-muted/20 animate-pulse" />
            )}
          </div>

          <div
            className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {feature.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}
