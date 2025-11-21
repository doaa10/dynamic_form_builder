"use client";

import React from "react";
import { features, pills } from "./FeaturesData";
import FeatureCard from "./FeatureCard";
import Pills from "./Pills";
import CTA from "@/components/General/CTA";
import FeaturesContent from "./FeaturesContent";

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-muted/20" />

      {/* Decorative blur elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          {/* Pills */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {pills.map((pill, index) => (
              <>
                {index > 0 && (
                  <span
                    key={`divider-${index}`}
                    className="text-muted-foreground"
                  >
                    ✦
                  </span>
                )}
                <Pills
                  key={pill.text}
                  text={pill.text}
                  icon={pill.icon}
                  borderColor={pill.borderColor}
                  bgColor={pill.bgColor}
                  textColor={pill.textColor}
                />
              </>
            ))}
          </div>

          <FeaturesContent />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <CTA buttonText="Start Building" buttonHref="/builder" />
      </div>
    </section>
  );
}
