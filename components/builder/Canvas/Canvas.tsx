import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useFormStore } from "@/lib/store/formStore";
import FieldItem from "./FieldItem";
import EmptyState from "./EmptyState";

const Canvas = () => {
  const fields = useFormStore((state) => state.fields);
  const selectedFieldId = useFormStore((state) => state.selectedFieldId);

  const { setNodeRef, isOver } = useDroppable({
    id: "canvas-drop-zone",
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-6 overflow-y-auto transition-colors min-h-full ${
        isOver
          ? "bg-primary/5 border-2 border-primary border-dashed"
          : "bg-background"
      }`}
    >
      {fields.length > 0 ? (
        <SortableContext
          items={fields.map((f) => f.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3 max-w-3xl mx-auto">
            {fields.map((field) => (
              <FieldItem
                key={field.id}
                field={field}
                isSelected={field.id === selectedFieldId}
              />
            ))}
          </div>
        </SortableContext>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Canvas;
