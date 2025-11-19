"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "./FAQData";

interface FAQItemProps {
  faq: FAQItem;
  index: number;
}

export default function FAQItem({ faq, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-border/50 rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors"
      style={{
        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-lg">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
