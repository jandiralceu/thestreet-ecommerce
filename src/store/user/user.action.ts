import { ICredentials, User } from "../../models";
import { createAction } from "../../utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user?: User) => {
  return createAction<USER_ACTION_TYPES>(
    USER_ACTION_TYPES.SET_CURRENT_USER,
    user
  );
};

export const checkUserSession = () =>
  createAction<USER_ACTION_TYPES>(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignIn = () =>
  createAction<USER_ACTION_TYPES>(USER_ACTION_TYPES.GOOGLE_SIGN_IN);

export const emailAndPasswordSignIn = (credentials: ICredentials) =>
  createAction<USER_ACTION_TYPES>(
    USER_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_IN,
    credentials
  );

export const signInSuccess = (user: User) =>
  createAction<USER_ACTION_TYPES>(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailure = (error: string) =>
  createAction<USER_ACTION_TYPES>(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
