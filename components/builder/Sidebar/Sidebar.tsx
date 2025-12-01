import React from "react";
import FieldList from "./FieldList";
import ActionsPanel from "./ActionsPanel";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Form Builder</h2>
        <p className="text-sm text-muted-foreground">Drag fields to canvas</p>
      </div>

      <Separator className="mb-4" />

      <div className="flex-1 overflow-y-auto pr-2 min-h-0">
        <FieldList />
      </div>

      <div className="mt-4 pt-4 border-t">
        <ActionsPanel />
      </div>
    </div>
  );
};

export default Sidebar;
