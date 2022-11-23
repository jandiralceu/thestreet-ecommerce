import { ICredentials, IRegistration, User } from "../../models";
import { createAction, withMatcher } from "../../utils";
import { AUTH_ACTION_TYPES } from "./auth.types";

export const checkUserSession = withMatcher(() =>
  createAction(AUTH_ACTION_TYPES.CHECK_USER_SESSION));

export const googleSignIn = withMatcher(() =>
  createAction(AUTH_ACTION_TYPES.GOOGLE_SIGN_IN));

export const emailAndPasswordSignIn = withMatcher((credentials: ICredentials) =>
  createAction(AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_IN, credentials));

export const emailAndPasswordRegistration = withMatcher((userData: IRegistration) =>
  createAction(AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_UP, userData));

export const signInSuccess = withMatcher((user: User) =>
  createAction(AUTH_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const authFailure = withMatcher((error: string) =>
  createAction(AUTH_ACTION_TYPES.FAILURE, error));

export const signOut = withMatcher(() => createAction(AUTH_ACTION_TYPES.SIGN_OUT));

export const signOutSuccess = withMatcher(() =>
  createAction(AUTH_ACTION_TYPES.SIGN_OUT_SUCCESS));
