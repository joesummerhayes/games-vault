export interface User {
  _id: string;
  email?: string;
  username: string;
}

export interface SignupUser {
  username: string;
  email: string;
  password: string;
}

export interface LoggedInUser {
  token: string;
  user: User;
}

export interface LoginUserArgs {
  email: string;
  password: string;
}