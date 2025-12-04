export interface FormField {
  id: string;
  type: 'text' | 'number' | 'email' | 'date' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'phone' | 'url';
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: ValidationRule;
}
export interface ValidationRule {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export interface FormStore {

    //state
    fields: FormField[];
    formName: string;
    selectedFieldId: string | null;
    isDirty: boolean;

    //actions
    addField: (field: Omit<FormField, 'id'>) => void;
    removeField: (id: string) => void;
    updateField: (id: string, updates: Partial<FormField>) => void;
    selectField: (id: string | null) => void;
    reorderFields: (fields: FormField[]) => void;
    setFormName: (name: string) => void;
    markDirty: () => void;
    reset: () => void;

    //computed
    getFieldById: (id: string) => FormField | undefined;
    getRequiredFields: () => FormField[];
    isValid: () => boolean;



}
