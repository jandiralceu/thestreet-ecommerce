import { User } from "../../models";
import { IAuthService } from "../../services";

export type UserContextProps = {
  currentUser?: User | null;
  authService?: IAuthService;
  authenticated: boolean;
  logout: () => void;
  setCurrentUser: (user: User) => void;
};

export enum UserActionTypes {
  setCurrentUser,
}

export interface IAction<T = any> {
  type: UserActionTypes;
  payload?: T | null;
}

export interface IState {
  currentUser?: User | null;
  authenticated: boolean;
}
