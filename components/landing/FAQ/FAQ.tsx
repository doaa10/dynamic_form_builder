"use client";

import { faqs } from "./FAQData";
import FAQItem from "./FAQItem";
import { MessageCircleQuestion } from "lucide-react";

export default function FAQ() {
  return (
    <section className="relative py-24 overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/10 to-background" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MessageCircleQuestion className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Frequently Asked</span>
            <span className="block mt-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Dynamic Form Builder. Can't find
            what you're looking for? Feel free to reach out!
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">Still have questions?</h3>
            <p className="text-muted-foreground">
              Can't find the answer you're looking for? Open an issue on GitHub.
            </p>
            <a
              href="https://github.com/doaa10/dynamic_form_builder/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Contact us on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
