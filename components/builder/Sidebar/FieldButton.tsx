import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useDraggable } from "@dnd-kit/core";

interface FieldButtonProps {
  id: number;
  icon: LucideIcon;
  label: string;
  type: string;
  description?: string;
}

const FieldButton = ({
  id,
  icon: Icon,
  label,
  type,
  description,
}: FieldButtonProps) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `field-type-${type}`,
    data: { type, label, description }, // Pass field data
  });

  return (
    <Card
      id={id.toString()}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`p-3 cursor-grab active:cursor-grabbing hover:border-primary hover:bg-primary/5 transition-all group ${
        isDragging ? "opacity-50 scale-95" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{label}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FieldButton;
