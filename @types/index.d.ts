import { User as IUser, SignupUser as ISignupUser, LoggedInUser as ILoggedInUser, LoginUserArgs as ILoginUserArgs } from './user';
import { FormItem as IFormItem, Validator as IValidator } from './form';

declare namespace GVType {
  export type User = IUser;
  export type SignupUser = ISignupUser;
  export type LoggedInUser = ILoggedInUser;
  export type LoginUserArgs = ILoginUserArgs;

  export type FormItem = IFormItem;
  export type Validator = IValidator;
}

export = GVType;
export as namespace GVType;
