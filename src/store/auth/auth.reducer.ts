import { AnyAction } from "redux";
import { User } from "../../models";
import { signInSuccess, signOutSuccess, authFailure } from "./auth.action";

type TAuthState = {
  readonly currentUser?: User;
  readonly loading: boolean;
  readonly error?: string;
};

const INITIAL_STATE: TAuthState = { loading: false };

export const authReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload, loading: !state.loading };
  }
  if (authFailure.match(action)) {
    return { ...state, error: action.payload, loading: !state.loading };
  }
  if (signOutSuccess.match(action)) {
    return INITIAL_STATE;
  }

  return state;
};
