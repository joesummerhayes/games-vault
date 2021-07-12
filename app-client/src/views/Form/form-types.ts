import {Dispatch} from "redux";

export enum Valuetype {
  "string",
  "number",
  "boolean",
  "date"
}

export interface Validator {
  (arg: string): boolean;
}

export enum Selection {
  PS4 = "PlayStation 4",
  PS5 = "PlayStation 5",
  Switch = "Nintendo Switch",
  Xbox1 = "Xbox 1",
  XboxSX = "Xbox Series X",
  PC ="PC",
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
  selection?: string[];
}

export interface IForm {
  fields: IFormField[];

  // this actually needs to describe an action creator function
  // onSubmit<a, b>(inputdata: a): Promise<b>;
  onSubmit: any;
}

// const createReviewAction: (createReviewInputData: GVType.Review) => (dispatch: Dispatch) => Promise<void>