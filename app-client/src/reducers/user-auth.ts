import { ActionTypes } from '../actions/types';
import { Action } from '../actions/types';

export interface UserState {
  details: GVType.User;
  loggedIn: boolean;
}

const userAuthReducer = (state: UserState = { details: { _id: '', email: '', username: ''}, loggedIn: false }, action: Action): UserState => {
  switch (action.type) {
    // case ActionTypes.fetchingData: {
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };
    // }
    case ActionTypes.loginUser: {
      const { payload } = action;
      return {
        ...payload
      }
    }
    case ActionTypes.fetchUser: {
      const { payload } = action;
      return {
        ...payload
      }
    }
    // case ActionTypes.logoutUser: {
    //   return {
    //     ...state,
    //     userDetails: {
    //       _id: '',
    //       name: '',
    //     },
    //     loggedIn: false,
    //     isFetching: false,
    //   };
    // }
    default:
      return state;
  }
};

export default userAuthReducer;
