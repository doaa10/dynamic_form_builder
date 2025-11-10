"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HeroStats } from "./HeroStats";

export function HeroVisual() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative lg:block hidden">
      <div className="relative z-10">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 blur-3xl transform scale-110 -z-10" />

        <div className="relative rounded-xl overflow-hidden shadow-2xl  bg-card/50 backdrop-blur-sm">
          {mounted &&
            (theme === "light" ? (
              <Image
                src="/Images/herobg-light.jpg"
                alt="FormCraft Builder Interface"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            ) : (
              <Image
                src="/Images/heroBg.jpg"
                alt="FormCraft Builder Interface"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            ))}
        </div>

        <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-br from-primary to-accent rounded-2xl opacity-80 blur-sm animate-float" />

        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-linear-to-br from-accent to-primary rounded-full opacity-70 blur-sm animate-float-delayed" />

        <HeroStats />
      </div>
    </div>
  );
}
