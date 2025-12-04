import React from "react";
import { Inbox } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex-1 flex items-center justify-center h-full">
      <div className="text-center max-w-md px-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Inbox className="w-10 h-10 text-primary" />
        </div>

        <h3 className="text-xl font-semibold mb-2">No fields yet</h3>

        <p className="text-muted-foreground mb-6">
          Drag fields from the sidebar to start building your form. You can add
          text inputs, dropdowns, checkboxes, and more.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-2xl">👈</span>
            <span>Drag from sidebar</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-1">
            <span className="text-2xl">📋</span>
            <span>Drop here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
