import { createReducer, on, Action } from '@ngrx/store';
import * as SharedActions from './actions';

import { initialState, State } from './state';

const sharedReducer = createReducer(
  initialState,
  on(SharedActions.setLoading, (state, { status }) => {
    return {
      ...state,
      isLoading: status,
    };
  }
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return sharedReducer(state, action);
}
