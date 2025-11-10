import { HeroContent } from "./hero/HeroContent";
import { HeroVisual } from "./hero/HeroVisual";
import { ScrollIndicator } from "./hero/ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center w-full overflow-hidden">
      {/* Use inset for proper full-width without scroll */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

      {/* Decorative blur elements - positioned to extend beyond but clipped */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent />

          <HeroVisual />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
