"use client";

import { steps } from "./HowItWorksData";
import StepCard from "./StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 bg-linear-to-b from-muted/20 via-background to-background" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span>Simple Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">How It Works</span>
            <span className="block mt-2">
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Four Simple Steps
              </span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to implementation in minutes. Our intuitive process makes
            form building effortless.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/30 group"
          >
            <Link href="/builder">
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No account required • Start building immediately
          </p>
        </div>
      </div>
    </section>
  );
}
