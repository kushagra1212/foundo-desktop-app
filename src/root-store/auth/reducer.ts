import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './actions';
import { initialState, State } from './state';



const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }
  ),
  on(AuthActions.loginSuccess, (state, { payload }) => {
    return {
      ...state,
      user: payload.user,
      message: `Welcome, ${payload.user.firstName} !`,
      jwt: payload.jwtToken,
      isLoading: false,
      isLoggedin: true,
      error: false,
    };
  }),
  on(AuthActions.loginFailure, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      error: true,
      message: payload.error.errorMessage,
    };
  }),
);
export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
