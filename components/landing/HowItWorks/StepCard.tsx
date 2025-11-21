"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Step } from "./HowItWorksData";

interface StepCardProps {
  step: Step;
  index: number;
  isLast: boolean;
}

export default function StepCard({ step, index, isLast }: StepCardProps) {
  const Icon = step.icon;
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme : "light";
  const imageSrc = currentTheme === "dark" ? step.image.dark : step.image.light;

  return (
    <div className="relative">
      <div
        className="group"
        style={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
        }}
      >
        <div className="flex items-center gap-4 mb-6">
          {/* Step Number Badge */}
          <div
            className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
          >
            <span className="text-2xl font-bold text-white">{step.id}</span>

            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div
            className={`w-12 h-12 rounded-xl bg-linear-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center`}
          >
            <Icon
              className={`w-6 h-6 bg-linear-to-br ${step.gradient} bg-clip-text text-transparent`}
              style={{ WebkitTextFillColor: "transparent" }}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          />

          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl font-bold">{step.title}</h3>

            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            <div className="aspect-video rounded-xl overflow-hidden border border-border/30 bg-muted/20 relative mt-6">
              {mounted ? (
                <Image
                  src={imageSrc}
                  alt={step.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-muted/20 animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Connection Arrow (except for last item) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 -right-12 xl:-right-16">
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            className="text-primary/30"
          >
            <path
              d="M0 20 Q 40 20, 70 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            <path
              d="M65 15 L75 20 L65 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      )}

      {/* Mobile: Down Arrow */}
      {!isLast && (
        <div className="lg:hidden flex justify-center my-8">
          <svg
            width="40"
            height="60"
            viewBox="0 0 40 60"
            fill="none"
            className="text-primary/30"
          >
            <path
              d="M20 0 Q 20 30, 20 50"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            <path
              d="M15 45 L20 55 L25 45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
