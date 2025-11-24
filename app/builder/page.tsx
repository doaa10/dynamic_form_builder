"use client";

import React, { useState } from "react";
import Toolbar from "@/components/builder/Toolbar/Toolbar";
import Sidebar from "@/components/builder/Sidebar/Sidebar";

export default function BuilderPage() {
  const [formName, setFormName] = useState("Untitled Form");

  const handleSave = () => {
    console.log("Save form:", formName);
  };

  const handleExport = () => {
    console.log("Export JSON");
  };

  const handlePreview = () => {
    console.log("Preview form");
  };

  const handleClear = () => {
    console.log("Clear all");
  };

  return (
    <div className="fixed inset-0 top-16 flex flex-col">
      <Toolbar
        formName={formName}
        onFormNameChange={setFormName}
        onSave={handleSave}
        onExport={handleExport}
        onPreview={handlePreview}
        onClear={handleClear}
      />

      <div className="flex-1 grid grid-cols-[300px_1fr_400px] gap-0">
        <div className="border-r border-border bg-card p-4 overflow-y-auto">
          <Sidebar/>
        </div>

        <div className="border-r border-border bg-background p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4">Canvas Placeholder</h3>
          <p className="text-sm text-muted-foreground">
            Drop zone will go here
          </p>
        </div>

        <div className="bg-card p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4">Preview Placeholder</h3>
          <p className="text-sm text-muted-foreground">
            Live preview will go here
          </p>
        </div>
      </div>
    </div>
  );
}
