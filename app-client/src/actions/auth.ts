import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import login from '../data/login';
import history from '../history';
import { UserState } from '../reducers/user-auth';
import getUser from '../data/get-user';

export interface LoginUserAction {
  type: ActionTypes.loginUser;
  payload: UserState;
};

export interface FetchingUserAction {
  type: ActionTypes.fetchUser;
  payload: UserState
};

export const loginAction = (loginInputData: GVType.LoginUserArgs) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const loggedInUser = await login(loginInputData);
    if (!loggedInUser) {
      throw new Error('no user found with these credentials');
    }
    const { token, user: { _id } } = loggedInUser;

    localStorage.setItem('token', token);
    localStorage.setItem('userId', _id);
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(
      new Date().getTime() + remainingMilliseconds,
    );
    localStorage.setItem('expiryDate', expiryDate.toISOString());

    // dispatch({
    //   type: ActionTypes.clearError,
    // });

    const user = {
      loggedIn: true,
      details: {
        username: loggedInUser?.user?.username,
        email: loggedInUser?.user?.email || '',
        _id: loggedInUser?.user?._id
      }
    }

    history.push('/');

    dispatch<LoginUserAction>({
      type: ActionTypes.loginUser,
      payload: user,
    });
  } catch (err) {
    // dispatch({
    //   type: ActionTypes.getError,
    //   payload: err,
    // });
    return err;
  }
};



// export const logoutAction = () => (dispatch: Dispatch): void => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('expiryDate');
//   localStorage.removeItem('userId');
//   dispatch<LogoutUserAction>({
//     type: ActionTypes.logoutUser,
//   });
// };

export const getUserAction = () => async (dispatch: Dispatch): Promise<void> => {
  const user = await getUser();
  const userState = {
    details: user,
    loggedIn: true,
  }
  dispatch<FetchingUserAction>({
    type: ActionTypes.fetchUser,
    payload: userState,
  });
  // dispatch<LoginUserAction>({
  //   type: ActionTypes.loginUser,
  //   payload: user,
  // });
};
