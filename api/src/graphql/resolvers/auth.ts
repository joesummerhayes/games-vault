import bcrypt from 'bcrypt';
import { Request } from 'express';
import { validateUser } from './utils';
import User, { IUser } from '../../modals/user';
import jwt from 'jsonwebtoken';

interface CreateUser {
  userInput: GVType.SignupUser
}
interface Login {
  email: string;
  password: string;
}

export default {
  async createUser(args:  CreateUser, _req: Request): Promise<IUser> {
    const { userInput: { email, username, password } } = args;
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return existingUser;
    }

    validateUser(email, password)

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
    });

    try {
      newUser.save();
      return newUser;
    } catch(err) {
      console.log(err);
      throw err;
    }
  },
  async user(_args: any, req: Request): Promise<IUser> {
    const { userId } = req;
    if (!userId) {
      throw new Error('can not query user as no id was provided in the request');
    }
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
  async login(args: Login, _req: Request): Promise<GVType.LoggedInUser> {
    const { email, password } = args;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('user not found');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error('password is incorrect');
      throw error;
    }
    const token = jwt.sign({
      userId: user._id.toString(),
      email: user.email,
    }, 'supersecretsecret', { expiresIn: '1h' });
    const parsedUser = {
      _id: user._id.toString(),
      email: user.email,
      username: user.username
    }

    return { token, user: parsedUser };
  }
}