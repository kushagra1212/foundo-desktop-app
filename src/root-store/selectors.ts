// Auth selectors
import { createSelector } from '@ngrx/store';
import User from '../models/user';
import { AuthSelectors } from './auth';
import { SharedSelectors } from './shared';

// Auth State Selector export

export const selectCurrentUser = createSelector(
  AuthSelectors.selectUserCurrent,
  (user: User | null) => user,
);
export const selectIsLoading = createSelector(
  AuthSelectors.selectUserIsLoading,
  (isLoading: boolean) => isLoading,
);
export const selectAuthError = createSelector(
  AuthSelectors.selectUserError,
  (errorMessage: boolean | null) => errorMessage,
);
export const selectUserResetPasswordLinkSent = createSelector(
  AuthSelectors.selectUserResetPasswordLinkSent,
  (status: boolean) => status,
);

// Shared State Selector export

export const selectisLoading = createSelector(
  SharedSelectors.selectSharedIsLoading,
  (isLoading: boolean) => isLoading,
);

