import User from "../../models/user";

export interface State {
  user: User | null;
  jwt: string;
  message: string;
  isLoading: boolean;
  isLoggedin: boolean;
  error: boolean;
}

export const initialState: State = {
  user: null,
  jwt: 'DUMMY_JWT',
  message: 'DUMMY_MESSAGE',
  isLoading: false,
  isLoggedin: false,
  error: false,
};
