import { fieldTypes } from "@/lib/types/fieldTypes";
import React from "react";
import FieldButton from "./FieldButton";

const FieldList = () => {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        Available Fields
      </h3>
      <div className="space-y-2">
        {fieldTypes.map((field) => (
          <FieldButton
            key={field.id}
            id={field.id}
            icon={field.icon}
            label={field.label}
            type={field.value}
            description={field.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FieldList;
