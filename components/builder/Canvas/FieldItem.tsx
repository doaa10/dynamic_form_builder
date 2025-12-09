import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFormStore } from "@/lib/store/formStore";
import { FormField } from "@/lib/types/Store.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Trash2,
  GripVertical,
  Type,
  Mail,
  Hash,
  Calendar,
  AlignLeft,
  ChevronDown,
  Circle,
  CheckSquare,
  Phone,
  Link,
} from "lucide-react";
import React from "react";
interface FieldItemProps {
  field: FormField;
  isSelected?: boolean;
}

// Icon mapping
const getFieldIcon = (type: string) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    text: Type,
    email: Mail,
    number: Hash,
    date: Calendar,
    textarea: AlignLeft,
    select: ChevronDown,
    radio: Circle,
    checkbox: CheckSquare,
    phone: Phone,
    url: Link,
  };

  const Icon = icons[type] || Type;
  return <Icon className="w-5 h-5 text-primary" />;
};

const FieldItem = ({ field, isSelected }: FieldItemProps) => {
  const selectField = useFormStore((state) => state.selectField);
  const removeField = useFormStore((state) => state.removeField);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={() => selectField(field.id)}
      className={`
        p-4 cursor-pointer transition-all duration-200 group
        ${
          isSelected
            ? "border-primary border-2 bg-primary/5 shadow-md"
            : "border-border hover:border-primary/40 hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-start gap-3">
        {/* Drag Handle */}
        <div {...listeners} className="cursor-grab active:cursor-grabbing">
          <GripVertical
            aria-hidden="true"
            className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground mt-1"
          />
        </div>

        {/* Field Icon */}
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          {getFieldIcon(field.type)}
        </div>

        {/* Field Content */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Label & Required Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-base">{field.label}</h4>
            {field.required && (
              <Badge variant="destructive" className="text-xs px-2 py-0.5">
                Required
              </Badge>
            )}
          </div>

          {/* Type Badge */}
          <div>
            <Badge variant="outline" className="text-xs font-medium">
              {field.type}
            </Badge>
          </div>

          {/* Placeholder */}
          {field.placeholder && (
            <p className="text-sm text-muted-foreground italic">
              &ldquo;{field.placeholder}&rdquo;
            </p>
          )}
        </div>

        {/* Delete Button */}
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Delete ${field.label} field`}
          onClick={(e) => {
            e.stopPropagation();
            removeField(field.id);
          }}
          className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default FieldItem;
