import {
  Type,
  Hash,
  Calendar,
  Mail,
  ChevronDown,
  Circle,
  CheckSquare,
  AlignLeft,
  Phone,
  Link,
  LucideIcon,
} from "lucide-react";

export interface FieldType {
  id: number;
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

export const fieldTypes: FieldType[] = [
  {
    id: 1,
    label: "Text Input",
    value: "text",
    icon: Type,
    description: "Single line text field",
  },
  {
    id: 2,
    label: "Number",
    value: "number",
    icon: Hash,
    description: "Numeric input only",
  },
  {
    id: 3,
    label: "Email",
    value: "email",
    icon: Mail,
    description: "Email address field",
  },
  {
    id: 4,
    label: "Date",
    value: "date",
    icon: Calendar,
    description: "Date picker",
  },
  {
    id: 5,
    label: "Textarea",
    value: "textarea",
    icon: AlignLeft,
    description: "Multi-line text area",
  },
  {
    id: 6,
    label: "Select",
    value: "select",
    icon: ChevronDown,
    description: "Dropdown selection",
  },
  {
    id: 7,
    label: "Radio Group",
    value: "radio",
    icon: Circle,
    description: "Single choice options",
  },
  {
    id: 8,
    label: "Checkbox",
    value: "checkbox",
    icon: CheckSquare,
    description: "Multiple choices",
  },
  {
    id: 9,
    label: "Phone",
    value: "phone",
    icon: Phone,
    description: "Phone number field",
  },
  {
    id: 10,
    label: "URL",
    value: "url",
    icon: Link,
    description: "Website URL field",
  },
];