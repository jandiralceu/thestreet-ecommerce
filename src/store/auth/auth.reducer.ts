import { User } from "../../models";
import { AUTH_ACTION_TYPES } from "./auth.types";

type IState = {
  currentUser?: User;
  loading: boolean
  error?: string
}

type IAction = {
  type: AUTH_ACTION_TYPES,
  payload: any
}

const INITIAL_STATE: IState = { loading: false };

export const authReducer = (state: IState = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, loading: !state.loading }
    case AUTH_ACTION_TYPES.SIGN_IN_FAILURE:
      return { ...state, error: action.payload, loading: !state.loading }
    default:
      return state;
  }
};
