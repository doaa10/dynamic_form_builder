import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FormField, FormStore } from "../types/Store.types";

//store
export const useFormStore = create<FormStore>()(
  devtools(
    (set, get) => ({
      // Initial state
      fields: [],
      selectedFieldId: null,
      formName: "",
      isDirty: false,
      
      //actions
    addField:(field: Omit<FormField, 'id'>) =>
        set((state) => ({
            fields: [
                ...state.fields, 
                { 
                    ...field, 
                    id: crypto.randomUUID() // Auto-generate unique ID
                }
            ],
            isDirty: true,
        })),    
        
  updateField:(id:string, updates: Partial<FormField>) =>
    set((state)=>({
        fields: state.fields.map((field) =>
            field.id === id ? { ...field, ...updates } : field
        ),
        isDirty: true,
    }))
    ,
    removeField:(id:string) =>
    set((state) => ({
        fields: state.fields.filter((field) => field.id !== id),
        isDirty: true,
    })),
    selectField:(id:string | null) =>
    set(() => ({
        selectedFieldId: id,
    })),
    reorderFields:(fields: FormField[]) =>
    set(() => ({
        fields,
        isDirty: true,
    })),
    setFormName:(name:string) =>
    set(() => ({
        formName: name,
        isDirty: true,
    })),
    markDirty:() =>
    set(() => ({
        isDirty: true,
    })),
    reset:() =>
    set(() => ({
        fields: [],
        selectedFieldId: null,
        formName: "",
        isDirty: false,
    })),

    //computed
    getFieldById:(id:string) => {
        const { fields } = get();
        return fields.find((field) => field.id === id);
    },
    getRequiredFields:() => {
        const { fields } = get();
        return fields.filter((field) => field.required);
    },
    isVaild:() => {
        const { fields } = get();
        return fields.every((field) => {
            if (field.required) {
                return true; // In a real scenario, you'd check if the field has a value
            }
            return true;
        });
    },
    }),
    { name: 'FormBuilderStore' }
  )
);


