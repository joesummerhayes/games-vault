import validator from 'validator';

interface ValidationError {
  message: string;
}

export const validateUser = (email: string, password: string): void => {
  const errors: ValidationError[] = [];
  if (!validator.isEmail(email)) {
    errors.push({ message: 'Email is not valid' });
  }
  if (validator.isEmpty(password) || !validator.isLength(password, { min: 5 })) {
    errors.push({ message: 'password is too short' });
  }
  if (errors.length > 0) {
    const reducer = (acc, cur) => {
      if (cur.message) {
        acc += cur.message;
      }
      return acc;
    };

    const errorString = errors.map((error) => error.message).reduce(reducer);
    const error = new Error(errorString);
    throw error;
  }
};
