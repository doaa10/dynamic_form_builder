import React from "react";
import { Button } from "@/components/ui/button";
import { Trash2, FileJson, Save } from "lucide-react";

const ActionsPanel = () => {
  const handleClearAll = () => {
    console.log("Clear all fields");
  };

  const handleLoadTemplate = () => {
    console.log("Load template");
  };

  const handleSaveTemplate = () => {
    console.log("Save as template");
  };

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start"
        onClick={handleLoadTemplate}
      >
        <FileJson className="w-4 h-4 mr-2" />
        Load Template
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="w-full justify-start"
        onClick={handleSaveTemplate}
      >
        <Save className="w-4 h-4 mr-2" />
        Save Template
      </Button>

      <Button
        variant="destructive"
        size="sm"
        className="w-full justify-start"
        onClick={handleClearAll}
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Clear All
      </Button>
    </div>
  );
};

export default ActionsPanel;
