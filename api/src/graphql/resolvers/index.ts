import { Request } from 'express';
import User, { IUser } from '../modals/user';

interface GetUser {
  email: string;
}

export default {
  async user(args: GetUser, req: Request): Promise<IUser> {
    const { email } = args;
    console.log(email)
    const user = await User.findOne({email});

    if (!user) {
      throw new Error('User not found');
    }

    console.log(user);
    return user;
  }
};
