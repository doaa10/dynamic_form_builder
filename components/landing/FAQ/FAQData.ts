import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Is Dynamic Form Builder really free?",
    answer: "Yes! Dynamic Form Builder is completely free to use. You can create unlimited forms, export JSON schemas, and use all features without any cost or credit card required.",
  },
  {
    id: 2,
    question: "Do I need coding knowledge to use this?",
    answer: "No coding knowledge required! Our intuitive drag-and-drop interface makes it easy for anyone to build professional forms. However, the exported JSON is perfect for developers to integrate into their projects.",
  },
  {
    id: 3,
    question: "What field types are supported?",
    answer: "We support 8+ field types including Text Input, Email, Number, Textarea, Select/Dropdown, Radio Buttons, Checkboxes, Date, Phone, and URL fields. Each field comes with full validation options.",
  },
  {
    id: 4,
    question: "Can I export my forms?",
    answer: "Absolutely! You can export your forms as clean JSON schemas that are ready to use in any project or framework. The JSON includes all field configurations, validation rules, and structure.",
  },
  {
    id: 5,
    question: "How do I save my forms?",
    answer: "Forms are automatically saved to your browser's local storage. You can also export them as JSON files to back them up or share them with your team.",
  },
  {
    id: 6,
    question: "Can I edit forms after creating them?",
    answer: "Yes! You can load any saved form from your dashboard and make changes anytime. All your forms are accessible from the 'My Forms' section.",
  },
  {
    id: 7,
    question: "Is my data secure?",
    answer: "Your forms are stored locally in your browser's storage. We don't collect or store your form data on our servers, ensuring complete privacy and security.",
  },
  {
    id: 8,
    question: "What frameworks can I use the exported JSON with?",
    answer: "The exported JSON is framework-agnostic. You can use it with React, Vue, Angular, Next.js, or any other framework. It's just clean, structured data that you can integrate anywhere.",
  },
];
