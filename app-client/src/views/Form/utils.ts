import {IFormField} from "./form-types";

export const validateForm = (fields: IFormField[]): boolean | undefined => {
  const requiredFields = fields.filter((field) => field.required)
    const validations = requiredFields.map((field) => field.valid);
    const readyCheck = validations.reduce((acc, cur) => {
      if (acc && cur) {
        return cur
      };
      return false
    });
    return readyCheck;
}