'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NavbarActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Button asChild className="hidden sm:inline-flex" size="lg">
        <Link href="/builder">
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}