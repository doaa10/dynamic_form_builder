import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useFormStore } from "@/lib/store/formStore";

const FieldPropertiesPanel = () => {
  const selectedField = useFormStore((state) => state.selectedFieldId);
  const field = useFormStore((state) =>
    state.fields.find((f) => f.id === selectedField)
  );
  const updateField = useFormStore((state) => state.updateField);

  if (!field) {
    return (
      <div className="border-r border-border bg-card p-6 flex items-center justify-center h-full">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">Select a field to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-r border-border bg-card p-4 overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Field Properties</h3>
          <p className="text-xs text-muted-foreground">
            Edit the selected field
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Field Type</Label>
          <Badge variant="outline" className="text-sm">
            {field.type}
          </Badge>
        </div>

        <div className="space-y-2">
          <Label htmlFor="field-label" className="text-sm font-medium">
            Label
          </Label>
          <Input
            id="field-label"
            value={field.label}
            onChange={(e) => updateField(field.id, { label: e.target.value })}
            placeholder="Enter field label"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="field-placeholder" className="text-sm font-medium">
            Placeholder
          </Label>
          <Input
            id="field-placeholder"
            value={field.placeholder || ""}
            onChange={(e) =>
              updateField(field.id, { placeholder: e.target.value })
            }
            placeholder="Enter placeholder text"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="field-required" className="text-sm font-medium">
              Required Field
            </Label>
            <p className="text-xs text-muted-foreground">
              Make this field mandatory
            </p>
          </div>
          <Switch
            id="field-required"
            checked={field.required}
            onCheckedChange={(checked) =>
              updateField(field.id, { required: checked })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FieldPropertiesPanel;
