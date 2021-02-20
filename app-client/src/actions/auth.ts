import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import login from '../data/login';
import getUser from '../data/get-user';
import history from '../history';
import { UserState } from '../reducers/user-auth';

export interface LoginUserAction {
  type: ActionTypes;
  payload: UserState;
}

export const loginAction = (loginInputData: GVType.LoginUserArgs) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const loggedInUser = await login(loginInputData);
    if (!loggedInUser) {
      throw new Error('no user found with these credentials');
    }

    console.log('333', loggedInUser);
    const { token, user: { _id } } = loggedInUser;

    localStorage.setItem('token', token);
    localStorage.setItem('userId', _id);
    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(
      new Date().getTime() + remainingMilliseconds,
    );
    localStorage.setItem('expiryDate', expiryDate.toISOString());
    // const user = await getUser();
    // history.push('/');
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
