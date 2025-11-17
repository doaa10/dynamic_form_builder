import { Plus, MousePointer, Eye, Download } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Step {
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

export const steps: Step[] = [
  {
    id: 1,
    icon: Plus,
    title: "Create Your Form",
    description: "Start with a blank canvas or choose from our templates. Add your project name and description.",
    gradient: "from-blue-500 to-cyan-500",
    image: {
      light: "/images/create-light.jpg",
      dark: "/images/create-dark.jpg",
    },
  },
  {
    id: 2,
    icon: MousePointer,
    title: "Design & Customize",
    description: "Drag and drop fields, configure validation rules, and customize every detail to match your needs.",
    gradient: "from-purple-500 to-pink-500",
    image: {
      light: "/images/design-light.jpg",
      dark: "/images/design-dark.jpg",
    },
  },
  {
    id: 3,
    icon: Eye,
    title: "Preview in Real-Time",
    description: "Test your form live with instant updates. See exactly how it will look and work for your users.",
    gradient: "from-green-500 to-emerald-500",
    image: {
      light: "/images/preview-light.jpg",
      dark: "/images/preview-dark.jpg",
    },
  },
  {
    id: 4,
    icon: Download,
    title: "Export & Integrate",
    description: "Download your form as JSON schema and integrate it seamlessly into any project or framework.",
    gradient: "from-orange-500 to-red-500",
    image: {
      light: "/images/export2-light.jpg",
      dark: "/images/export2-dark.jpg",
    },
  },
];
