export interface Validator {
  (arg: string): boolean;
}
export interface FormItem {
  value: string;
  touched: boolean;
  valid: boolean;
  validators: Validator[];
}


export const required = (value: string): boolean => value.trim() !== '';

export const length = (config: {min?: number; max?: number}) => (value: string): boolean => {
  let isValid = true;
  if (config.min) {
    isValid = isValid && value.trim().length >= config.min;
  }
  if (config.max) {
    isValid = isValid && value.trim().length <= config.max;
  }
  return isValid;
};

export const email = (value: string): boolean => /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);

export const confirmPass = (password: string, confirmPassword: string): boolean => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
};

export const formValidationCheck = (formToCheck: any): boolean => {
  const formEntries: [string, FormItem][] = Object.entries(formToCheck);

  const validations = formEntries.map((item: [string, FormItem]) => {
    return item[1].valid;
  });
  const reducer = (acc: boolean, item: boolean): boolean => {
    if (acc && item) {
      return item;
    }
    return false;
  };

  return validations.reduce(reducer, true);
};

export const maxTen = (num: string): boolean => parseInt(num) <= 10;
