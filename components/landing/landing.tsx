import Features from "./Features/Features";
import Hero from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import Footer from "@/components/layouts/Footer";

const Landing = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Landing;
