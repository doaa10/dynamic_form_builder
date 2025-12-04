"use client";

import React, { useState } from "react";
import Toolbar from "@/components/builder/Toolbar/Toolbar";
import Sidebar from "@/components/builder/Sidebar/Sidebar";
import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";
import { useFormStore } from "@/lib/store/formStore";
import Canvas from "@/components/builder/Canvas/Canvas";

export default function BuilderPage() {
  const [formName, setFormName] = useState("Untitled Form");
  const addField = useFormStore((state) => state.addField);
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

    if (over && over.id === "canvas-drop-zone") {
      const fieldData = active.data.current;
      addField({
        type: fieldData?.type || "text",
        label: fieldData?.label || "New Field",
        placeholder: `Enter ${fieldData?.label}`,
        required: false,
      });

      console.log("Field added!");
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

        <div className="flex-1 grid grid-cols-[300px_1fr_400px] gap-0 overflow-hidden">
          <div className="border-r border-border bg-card p-4 flex flex-col min-h-0">
            <Sidebar />
          </div>

          <Canvas />

          <div className="bg-card p-4 flex flex-col overflow-y-auto">
            <h3 className="font-semibold mb-4">Preview Placeholder</h3>
            <p className="text-sm text-muted-foreground">
              Live preview will go here
            </p>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

// Test Drop Zone Component
function TestDropZone() {
  const { setNodeRef, isOver } = useDroppable({
    id: "canvas-drop-zone",
  });

  return (
    <div
      ref={setNodeRef}
      className={`border-r border-border bg-background p-4 flex flex-col overflow-y-auto transition-colors ${
        isOver ? "bg-primary/10 border-primary" : ""
      }`}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">👇</div>
          <h3 className="font-semibold mb-2">Test Drop Zone</h3>
          <p className="text-sm text-muted-foreground">
            {isOver ? "Release to drop!" : "Drag a field from sidebar here"}
          </p>
        </div>
      </div>
    </div>
  );
}
