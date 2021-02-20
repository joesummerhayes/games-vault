import { User as IUser, SignupUser as ISignupUser, LoggedInUser as ILoggedInUser, LoginUserArgs as ILoginUserArgs } from './user';

declare namespace GVType {
  export type User = IUser;
  export type SignupUser = ISignupUser;
  export type LoggedInUser = ILoggedInUser;
  export type LoginUserArgs = ILoginUserArgs;
}

export = GVType;
export as namespace GVType;
