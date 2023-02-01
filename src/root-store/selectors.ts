// Auth selectors
import { createSelector } from '@ngrx/store';
import User from '../models/user';
import { AuthSelectors } from './auth';
export const selectCurrentUser = createSelector(
  AuthSelectors.selectUserCurrent,
  (user: User | null) => user,
);
export const selectIsLoading = createSelector(
  AuthSelectors.selectUserIsLoading,
  (isLoading: boolean) => isLoading,
);
export const selectJWT = createSelector(
  AuthSelectors.selectUserJWT,
  (jwt: string) => jwt,
);
export const selectAuthError = createSelector(
  AuthSelectors.selectUserError,
  (errorMessage: string | null) => errorMessage,
);
