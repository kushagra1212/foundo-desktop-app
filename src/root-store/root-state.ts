import * as AuthState from './auth/state';
import { SharedState } from './shared';



export interface State {
  auth: AuthState.State;
  shared: SharedState.State;
}
