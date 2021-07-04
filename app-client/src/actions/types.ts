import { LoginUserAction, FetchingUserAction } from './auth';
import { CreateReviewAction } from './review';

// export const LOGIN_USER = 'LOGIN_USER';

export enum ActionTypes {
  loginUser = 'loginUser',
  fetchUser = 'fetchUser',
  createReview = 'createReview',
}

export type Action = 
  LoginUserAction |
  FetchingUserAction |
  CreateReviewAction
