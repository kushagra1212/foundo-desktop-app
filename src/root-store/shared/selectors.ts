import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';

export const selectShared = createFeatureSelector<State>('shared');

const getIsLoading = (state: State): boolean => state.isLoading;

export const selectSharedIsLoading = createSelector(selectShared, getIsLoading);
