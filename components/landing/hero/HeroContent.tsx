import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { HeroBadge } from "./HeroBadge";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <HeroBadge icon={Sparkles} text="No Code Required • Fast & Easy" />

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
        Build Dynamic Forms
        <span className="block mt-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          in Minutes
        </span>
      </h1>

      <p className="text-lg text-muted-foreground sm:text-xl max-w-xl">
        Create, customize, and export forms without writing code. Perfect for
        developers and teams who need flexible form solutions.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="group">
          <Link href="/builder">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#features">
            <Play className="mr-2 h-5 w-5" />
            View Features
          </Link>
        </Button>
      </div>
    </div>
  );
}
