import { Code2 } from "lucide-react";
import React from "react";

interface PillsProps {
  text: string;
  icon: React.ElementType;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}
const Pills = ({
  text,
  icon: Icon,
  bgColor,
  textColor,
  borderColor,
}: PillsProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${borderColor} ${bgColor} ${textColor} text-sm font-medium`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </span>
  );
};

export default Pills;
