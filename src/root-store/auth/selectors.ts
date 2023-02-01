import { createSelector, createFeatureSelector } from '@ngrx/store';
import User from 'src/models/user';
import { State } from './state';


export const selectUser = createFeatureSelector<State>('auth');


const getUser = (state: State): User | null => state.user;

const getJWT = (state: State): string => state.jwt;

const getIsLoading = (state: State): boolean => state.isLoading;
const getIsLoggedIn = (state: State): boolean => state.isLoggedin;
const getError = (state: State): string | null => state.error;
const getMessage = (state: State): string | null => state.message;

export const selectUserCurrent = createSelector(selectUser, getUser);
export const selectUserJWT = createSelector(selectUser, getJWT);
export const selectUserIsLoading = createSelector(selectUser, getIsLoading);
export const selectUserIsLoggedIn = createSelector(selectUser, getIsLoggedIn);
export const selectUserError = createSelector(selectUser, getError);
export const selectUserMessage = createSelector(selectUser, getMessage);
