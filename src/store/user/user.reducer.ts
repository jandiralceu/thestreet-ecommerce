import { User } from "../../models";
import { USER_ACTION_TYPES } from "./user.types";

type IState = {
  currentUser?: User;
  loading: boolean
  error?: string
}

type IAction = {
  type: USER_ACTION_TYPES,
  payload: any
}

const INITIAL_STATE: IState = { loading: false };

export const userReducer = (state: IState = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    // case USER_ACTION_TYPES.SET_CURRENT_USER:
    //   return INITIAL_STATE;
    // case USER_ACTION_TYPES.FETCH_USER:
    //   return { ...state, loading: true };
    // case USER_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_IN:
    // case USER_ACTION_TYPES.GOOGLE_SIGN_IN:
    //   return { ...state, currentUser: action.payload, loading: false, error: undefined };
    // case USER_ACTION_TYPES.:
    //   return { ...state, currentUser: action.payload, loading: false, error: undefined };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload }
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
};
