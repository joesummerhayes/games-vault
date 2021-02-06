import { Request } from 'express';
import User, { IUser } from '../modals/user';
import bcrypt from 'bcrypt';
import validator from 'validator';

interface GetUser {
  email: string;
}

interface ValidationError {
  message: string;
}

interface CreateUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export default {
  async user(args: GetUser, req: Request): Promise<IUser> {
    const { email } = args;
    const user = await User.findOne({email});

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },

  async createUser(args:  CreateUser, req: Request): Promise<IUser> {
    const { email, firstName, lastName, password } = args;
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return existingUser;
    }

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
      }

      const errorString = errors.map((error) => error.message).reduce(reducer);
      const error = new Error(errorString);
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    try {
      newUser.save();      
    } catch(err) {
      console.log(err);
      throw err;
    }
  }
};
