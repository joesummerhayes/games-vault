import { LoginUserAction, FetchingUserAction } from './auth';

// export const LOGIN_USER = 'LOGIN_USER';

export enum ActionTypes {
  loginUser,
  fetchUser,
}

export type Action = 
  LoginUserAction |
  FetchingUserAction
