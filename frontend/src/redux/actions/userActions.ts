// userActions.ts
import { Dispatch } from 'redux';
import { LOGIN, LOGOUT, SIGNUP, AUTH_ERROR } from './actionTypes';
import { authService } from '../../services/apiService';

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    console.log('-------actions')
    const user = await authService.login(email, password);
    dispatch({ type: LOGIN, payload: user });
  } catch (error: any) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};

export const signup = (username: string, password: string) => async (dispatch: Dispatch) => {
  try {
    const user = await authService.signup(username, password);
    dispatch({ type: SIGNUP, payload: user });
  } catch (error: any) {
    dispatch({ type: AUTH_ERROR, payload: error.message });
  }
};
