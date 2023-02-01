import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './actions';
import { State } from './state';



const authReducer = createReducer(
  {},
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }
  ),
  on(AuthActions.loginSuccess, (state, { payload }) => {
    return {
      ...state,
      user: payload.user,
      message: payload.message,
      jwt: payload.jwtToken,
      isLoading: false,
      isLoggedin: true,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      error: payload.errorMessage,
    };
  }),
);
export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
