// userReducer.ts
import { LOGIN, LOGOUT, SIGNUP, AUTH_ERROR } from '../actions/actionTypes';

interface UserState {
  isAuthenticated: boolean;
  username: string | null;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  username: null,
  error: null,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
