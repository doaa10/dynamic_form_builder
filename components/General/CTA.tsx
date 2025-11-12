import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
  buttonText: string;
  buttonHref: string;
  subText?: string;
}

export default function CTA({ buttonText, buttonHref, subText }: CTAProps) {
  return (
    <div className="text-center">
      <Button
        asChild
        size="lg"
        className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/30 group"
      >
        <Link href={buttonHref}>
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      {subText && (
        <p className="mt-4 text-sm text-muted-foreground">{subText}</p>
      )}
    </div>
  );
}
