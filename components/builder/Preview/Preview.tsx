import { Input } from "@/components/ui/input";
import { useFormStore } from "@/lib/store/formStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const Preview = () => {
  const Fields = useFormStore((state) => state.fields);
  const formName = useFormStore((state) => state.formName);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Preview: {formName}</h2>
      {Fields.length === 0 ? (
        <p className="text-muted-foreground">No fields to preview.</p>
      ) : (
        <form className="space-y-4">
          {Fields.map((field) => (
            <div key={field.id} className="flex flex-col">
              <label className="font-medium mb-1">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              {(() => {
                switch (field.type) {
                  case "text":
                    return (
                      <Input
                        type="text"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  case "email":
                    return (
                      <Input
                        type="email"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  case "number":
                    return (
                      <Input
                        type="number"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  case "date":
                    return (
                      <Input
                        type="date"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                  case "textarea":
                    return (
                      <Textarea
                        placeholder={field.placeholder}
                        required={field.required}
                        className="resize-y min-h-[100px]"
                      />
                    );
                  case "select":
                    return (
                      <Select required={field.required}>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              field.placeholder || "Select an option"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  case "radio":
                    return (
                      <RadioGroup required={field.required}>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="option1"
                              id={`${field.id}-option1`}
                            />
                            <Label
                              htmlFor={`${field.id}-option1`}
                              className="font-normal cursor-pointer"
                            >
                              Option 1
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="option2"
                              id={`${field.id}-option2`}
                            />
                            <Label
                              htmlFor={`${field.id}-option2`}
                              className="font-normal cursor-pointer"
                            >
                              Option 2
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="option3"
                              id={`${field.id}-option3`}
                            />
                            <Label
                              htmlFor={`${field.id}-option3`}
                              className="font-normal cursor-pointer"
                            >
                              Option 3
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    );
                  case "checkbox":
                    return (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`checkbox-${field.id}`}
                          required={field.required}
                        />
                        <Label
                          htmlFor={`checkbox-${field.id}`}
                          className="font-normal cursor-pointer"
                        >
                          {field.placeholder || "Check this box"}
                        </Label>
                      </div>
                    );
                  default:
                    return (
                      <Input
                        type="text"
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    );
                }
              })()}
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default Preview;
