import { LucideIcon } from "lucide-react";

interface HeroBadgeProps {
  icon?: LucideIcon;
  text: string;
  className?: string;
}

export function HeroBadge({
  icon: Icon,
  text,
  className = "",
}: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{text}</span>
    </div>
  );
}
