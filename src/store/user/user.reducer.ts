import { User } from "../../models";
import { USER_ACTION_TYPES } from "./user.types";

type IState = {
  currentUser?: User;
  authenticated: boolean;
}

const INITIAL_STATE: IState = { authenticated: false };

export const userReducer = (state: IState = INITIAL_STATE, action: any): IState => {
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
