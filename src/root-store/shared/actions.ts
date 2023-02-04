import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
  SETLOADING = '[Shared on Application Start] Set Loading',
  APPSTARTED = '[Shared on Application Start] App Start',
}

export const setLoading = createAction(ActionTypes.SETLOADING, props<{ status: boolean }>());

export const appStarted = createAction(ActionTypes.APPSTARTED);
