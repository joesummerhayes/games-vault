import { combineReducers } from 'redux';
import { AppState } from '../app-state';
import userAuthReducer from './user-auth';

export default combineReducers<AppState>({
  user: userAuthReducer
});
