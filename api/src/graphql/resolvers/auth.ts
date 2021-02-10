import bcrypt from 'bcrypt';
import { validateUser } from './utils';
import User, { IUser } from '../modals/user';

interface CreateUser {
  email: string;
  password: string;
  username: string;
}

interface GetUser {
  email: string;
}

export default {
  async createUser(args:  CreateUser, _req: Request): Promise<IUser> {
    const { email, username, password } = args;
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
    } catch(err) {
      console.log(err);
      throw err;
    }
  },
  async user(args: GetUser, _req: Request): Promise<IUser> {
    const { email } = args;
    const user = await User.findOne({email});

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  },
}