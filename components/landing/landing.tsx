import Features from "./Features/Features";
import Hero from "./Hero";
import { HowItWorks } from "./HowItWorks";

const Landing = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Landing;
