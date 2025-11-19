import { Github, Twitter, Linkedin } from "lucide-react";

export  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
      { name: "Get Started", href: "/builder" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "My Forms", href: "/my-forms" },
      {
        name: "GitHub",
        href: "https://github.com/doaa10/dynamic_form_builder",
      },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      {
        name: "License",
        href: "https://github.com/doaa10/dynamic_form_builder/blob/main/LICENSE",
      },
    ],
  };

  export const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/doaa10/dynamic_form_builder",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
  ];