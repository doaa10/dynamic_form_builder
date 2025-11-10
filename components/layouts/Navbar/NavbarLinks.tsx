"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "/my-forms", label: "My Forms" },
] as const;

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
