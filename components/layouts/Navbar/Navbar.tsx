"use client";

import { NavbarLinks } from "./NavbarLinks";
import { NavbarActions } from "./NavbarActions";
import { MobileMenu } from "./MobileMenu";
import { Container } from "../container";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div>
            {mounted &&
              (theme === "light" ? (
                <Image
                  src="/images/logo2.png"
                  alt="Logo"
                  width={120}
                  height={20}
                />
              ) : (
                <Image
                  src="/images/logo2-dark.png"
                  alt="Logo"
                  width={110}
                  height={20}
                />
              ))}
          </div>
          <NavbarLinks />
          <div className="flex items-center gap-2">
            <NavbarActions />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
