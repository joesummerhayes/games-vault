import { Request } from 'express';
import User, { IUser } from '../modals/user';
import bcrypt from 'bcrypt';
import { validateUser } from './utils';

interface GetUser {
  email: string;
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

    validateUser(email, password)

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
