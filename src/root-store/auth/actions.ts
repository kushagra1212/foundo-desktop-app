import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth API] Login Success',
  LOGIN_FAILURE = '[Auth API] Login Failure',
  CHECK_LOGIN = '[Auth on Application Start] Check Login',
  LOGOUT = '[Header] Confirm Logout',
  SIGNUP = '[Signup Page] Signup',
  RESET_PASSWORD = '[Reset Password Page] Reset Password',
  FORGOT_PASSWORD = '[Forgot Password Page] Forgot Password',
  RESET_PASSWORD_LINK_SENT = '[Reset Password Page] Reset Password Link Sent',
  VERRIY_TOKEN = '[Verify Token Page] Verify Token',

}

export const login = createAction(ActionTypes.LOGIN, props<{ payload: any }>());
export const loginSuccess = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ payload: any }>(),
);
export const loginFailure = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ payload: any }>(),
);

export const signup = createAction(ActionTypes.SIGNUP, props<{ payload: any }>());
export const forgotPassword = createAction(
  ActionTypes.FORGOT_PASSWORD,
  props<{ payload: any }>(),
);
export const resetPasswordLinkSent = createAction(
  ActionTypes.RESET_PASSWORD_LINK_SENT,
  props<{ payload: any }>(),
);

export const resetPassword = createAction(
  ActionTypes.RESET_PASSWORD,
  props<{ payload: any }>(),
);
export const logout = createAction(ActionTypes.LOGOUT);
export const verifyToken = createAction(
  ActionTypes.VERRIY_TOKEN,
  props<{ payload: any }>(),
);
