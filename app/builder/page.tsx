"use client";

import Toolbar from "@/components/builder/Toolbar/Toolbar";
import Sidebar from "@/components/builder/Sidebar/Sidebar";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useFormStore } from "@/lib/store/formStore";
import Canvas from "@/components/builder/Canvas/Canvas";
import { FormField } from "@/lib/types/Store.types";
import { fieldTypes } from "@/lib/types/fieldTypes";
import FieldPropertiesPanel from "@/components/builder/properties/FieldPropertiesPanel";
import Preview from "@/components/builder/Preview/Preview";
import { arrayMove } from "@dnd-kit/sortable";

// Type guard to validate field type
const isValidFieldType = (type: string): type is FormField["type"] => {
  return fieldTypes.some((ft) => ft.value === type);
};
export default function BuilderPage() {
  const Fields = useFormStore((state) => state.fields);
  const formName = useFormStore((state) => state.formName);
  const setFormName = useFormStore((state) => state.setFormName);
  const addField = useFormStore((state) => state.addField);
  const reorderFields = useFormStore((state) => state.reorderFields);
  const clearAllFields = useFormStore((state) => state.reset);
  const handleSave = () => {
    console.log("Save form:", formName);
  };

  const handleExport = () => {
    const fields = useFormStore.getState().fields;
    const formData = { formName, fields };

    // Create JSON file
    const json = JSON.stringify(formData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Download file
    const a = document.createElement("a");
    a.href = url;
    const sanitizedName = formName.replace(/[/\\:*?"<>|]/g, "_");
    a.download = `${sanitizedName}.json`;
    a.click();
  };

  const handlePreview = () => {
    console.log("Preview form");
  };

  const handleClear = () => {
    clearAllFields();
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    // Case 1: Reordering existing fields within canvas
    if (active.id !== over.id && Fields.find((f) => f.id === active.id)) {
      const oldIndex = Fields.findIndex((f) => f.id === active.id);
      const newIndex = Fields.findIndex((f) => f.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        const reorderedFields = arrayMove(Fields, oldIndex, newIndex);
        reorderFields(reorderedFields);
      }
      return;
    }

    // Case 2: Adding new field from sidebar to canvas
    if (over.id === "canvas-drop-zone") {
      const fieldData = active.data.current;
      const fieldType = fieldData?.type;

      // Validate and use the field type, fallback to 'text' if invalid
      const validatedType = isValidFieldType(fieldType) ? fieldType : "text";

      addField({
        type: validatedType,
        label: fieldData?.label || "New Field",
        placeholder: `Enter ${fieldData?.label}`,
        required: false,
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="fixed inset-0 top-16 flex flex-col ">
        <Toolbar
          formName={formName}
          onFormNameChange={setFormName}
          onSave={handleSave}
          onExport={handleExport}
          onPreview={handlePreview}
          onClear={handleClear}
        />

        <div className="flex-1 grid grid-cols-[300px_1fr_320px_400px] gap-0 overflow-hidden">
          <div className="border-r border-border bg-card p-4 flex flex-col min-h-0">
            <Sidebar />
          </div>

          <div className="border-r border-border bg-background overflow-y-auto">
            <Canvas />
          </div>

          <FieldPropertiesPanel />

          <div className="bg-card p-4 flex flex-col overflow-y-auto">
            <Preview />
          </div>
        </div>
      </div>
    </DndContext>
  );
}
