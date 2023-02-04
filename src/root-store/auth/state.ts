import User from "../../models/user";

export interface State {
  user: User | null;
  message: string;
  isLoading: boolean;
  isLoggedin: boolean;
  error: boolean;
  resetPasswordLinkSent: boolean;
}

export const initialState: State = {
  user: null,
  message: 'DUMMY_MESSAGE',
  isLoading: false,
  isLoggedin: false,
  error: false,
  resetPasswordLinkSent: false,
};
