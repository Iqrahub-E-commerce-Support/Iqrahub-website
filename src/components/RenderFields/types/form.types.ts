// Define a union type for field types

type FieldType =

  | "text"
  | "email"
  | "switch"
  |"radio"
// Define common properties for all fields
interface IBaseField {
  name: string;
  label: string;
  type: FieldType;
  lableName?: string;
  style?: { [key: string]: string };
  size: { xs: number; sm: number; md: number; lg: number };
  placeholder?: string;
  isMultipleDevice?: boolean;
  row?: number;
  multiline?: boolean;
  devices?: Array<{
    label: string;
    value: string;
  }>;
  disabled?: boolean;
  condition?: boolean; // Add the condition property
  children?: IBaseField[]; // Add children property if needed
  validation: {
    required?: {
      value: boolean;
      message: string;
    };
    max?: { value: number; message: string };
    min?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    validate?: any;
    pattern?: { value: string; message: string };
  };
}


interface ITextField extends IBaseField {
  type:
    | "text"
    | "email"
    | "switch"
    |"radio"
}







// Create a union type for all possible field interfaces
export type IFormField =
  | ITextField
