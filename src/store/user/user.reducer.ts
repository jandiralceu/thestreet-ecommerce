import { User } from "../../models";
import { USER_ACTION_TYPES } from "./user.types";

interface IAction<T = any> {
  type: USER_ACTION_TYPES;
  payload?: T | null;
}

interface IState {
  currentUser?: User | null;
  authenticated: boolean;
}

const INITIAL_STATE: IState = { currentUser: null, authenticated: false };

export const userReducer = (state: IState = INITIAL_STATE, action: IAction<User>): IState => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: !!action.payload,
      };
    default:
      return state;
  }
};
