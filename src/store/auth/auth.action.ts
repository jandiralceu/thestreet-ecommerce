import { ICredentials, IRegistration, User } from "../../models";
import { createAction } from "../../utils";
import { AUTH_ACTION_TYPES } from "./auth.types";

export const checkUserSession = () =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignIn = () =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.GOOGLE_SIGN_IN);

export const emailAndPasswordSignIn = (credentials: ICredentials) =>
  createAction<AUTH_ACTION_TYPES>(
    AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_IN,
    credentials
  );

export const emailAndPasswordRegistration = (userData: IRegistration) =>
  createAction<AUTH_ACTION_TYPES>(
    AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_UP,
    userData
  );

export const signInSuccess = (user: User) =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const authFailure = (error: string) =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.FAILURE, error);

export const signOut = () =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.SIGN_OUT);

export const signOutSuccess = () =>
  createAction<AUTH_ACTION_TYPES>(AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS);
