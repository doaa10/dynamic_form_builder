import {
  MousePointer2,
  Code2,
  Sparkles,
  Palette,
  Zap,
  Layout,
  LucideIcon,
} from "lucide-react";

export interface Feature {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  image: {
    light: string;
    dark: string;
  };
}

export const features: Feature[] = [
  {
    id: 1,
    icon: MousePointer2,
    title: "Drag & Drop Simplicity",
    description:
      "No-code, high-performance form building with intuitive interface",
    gradient: "from-blue-500 to-cyan-500",
    image: {
      light: "/images/drag-light.jpg",
      dark: "/images/drag.jpg",
    },
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Live Preview",
    description:
      "See your form come to life as you build with instant real-time updates",
    gradient: "from-purple-500 to-pink-500",
    image: {
      light: "/images/form-preview-light.jpg",
      dark: "/images/form-preview-dark.jpg",
    },
  },
  {
    id: 3,
    icon: Code2,
    title: "Export JSON Schema",
    description: "Clean, typed JSON output ready for any project or framework",
    gradient: "from-green-500 to-emerald-500",
    image: {
      light: "/images/export-light.jpg",
      dark: "/images/export-dark.jpg",
    },
  },
  {
    id: 4,
    icon: Palette,
    title: "Customizable Fields",
    description: "8+ field types with full validation and styling control",
    gradient: "from-orange-500 to-red-500",
    image: {
      light: "/images/custom-form-light.jpg",
      dark: "/images/custom-form-dark.jpg",
    },
  },
  {
    id: 5,
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance for instant form building and rendering",
    gradient: "from-yellow-500 to-orange-500",
    image: {
      light: "/images/fast-light.jpg",
      dark: "/images/fast-dark.jpg",
    },
  },
  {
    id: 6,
    icon: Layout,
    title: "Fully Responsive",
    description: "Forms look perfect on any device, automatically optimized",
    gradient: "from-indigo-500 to-purple-500",
    image: {
      light: "/images/responsive-light.jpg",
      dark: "/images/responsive.jpg",
    },
  },
];

export const pills = [
  {
    text: "DRAG & DROP",
    icon: MousePointer2,
    borderColor: "border-primary/20",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    text: "NO-CODE",
    icon: Code2,
    borderColor: "border-accent/20",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
  },
  {
    text: "AI-POWERED",
    icon: Sparkles,
    borderColor: "border-primary/20",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
];
