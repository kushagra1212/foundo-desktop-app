import { createSelector, createFeatureSelector } from '@ngrx/store';
import User from 'src/models/user';
import { State } from './state';


export const selectUser = createFeatureSelector<State>('auth');


const getUser = (state: State): User | null => state.user;

const getIsLoading = (state: State): boolean => state.isLoading;
const getIsLoggedIn = (state: State): boolean => state.isLoggedin;
const getError = (state: State): boolean => state.error;
const getMessage = (state: State): string => state.message;
const getResetPasswordLinkSent = (state: State): boolean => state.resetPasswordLinkSent;
export const selectUserCurrent = createSelector(selectUser, getUser);
export const selectUserIsLoading = createSelector(selectUser, getIsLoading);
export const selectUserIsLoggedIn = createSelector(selectUser, getIsLoggedIn);
export const selectUserError = createSelector(selectUser, getError);
export const selectUserMessage = createSelector(selectUser, getMessage);
export const selectUserResetPasswordLinkSent = createSelector(selectUser, getResetPasswordLinkSent);
