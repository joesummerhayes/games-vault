
export enum Valuetype {
  "string",
  "number",
  "boolean",
  "date"
}

export interface Validator {
  (arg: string): boolean;
}

export interface IFormField {
  key: string;
  valueType: Valuetype;
  validators: Validator[];
  value: any;
  touched?: boolean;
  valid?: boolean;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  label?: string;
}

export interface IForm {
  fields: IFormField[];
  onSubmit: () => any;
}