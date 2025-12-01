"use client";

import React from "react";
import { Save, Download, Eye, Trash2 } from "lucide-react";

interface ToolbarProps {
  formName: string;
  onFormNameChange: (name: string) => void;
  onSave: () => void;
  onExport: () => void;
  onPreview: () => void;
  onClear: () => void;
}

export default function Toolbar({
  formName,
  onFormNameChange,
  onSave,
  onExport,
  onPreview,
  onClear,
}: ToolbarProps) {
  return (
    <div className="h-14 border-b border-border bg-card px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={formName}
          onChange={(e) => onFormNameChange(e.target.value)}
          placeholder="Untitled Form"
          className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onSave}
          className="px-4 py-2 text-sm font-medium bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save
        </button>

        <button
          onClick={onExport}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export JSON
        </button>

        <button
          onClick={onPreview}
          className="px-4 py-2 text-sm font-medium bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>

        <button
          onClick={onClear}
          className="px-4 py-2 text-sm font-medium bg-destructive/10 text-destructive border border-destructive/20 rounded-lg hover:bg-destructive/20 transition-colors flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
      </div>
    </div>
  );
}
