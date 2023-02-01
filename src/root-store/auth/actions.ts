import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth API] Login Success',
  LOGIN_FAILURE = '[Auth API] Login Failure',
  CHECK_LOGIN = '[Auth on Application Start] Check Login',
  CHECK_JWT = '[Auth on Application Start] Check JWT',
  CHECK_JWT_SUCCESS = '[Auth on Application Start] Check JWT Success',
  CHECK_JWT_FAIL = '[Auth on Application Start] Check JWT fail',
  LOGOUT = '[Header] Confirm Logout',
  JWT_UPDATE = '[Auth] Update new JWT',
  LOGIN_USER_UPDATE = '[Auth] Update Login User data',
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
