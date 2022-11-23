import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { AUTH_ACTION_TYPES } from "./auth.types";
import { signInSuccess, authFailure, signOutSuccess } from "./auth.action";
import { UserService, AuthService } from "../../services";
import { UserRepository, AuthRepository } from "../../repositories";
import { ICredentials, IRegistration } from "../../models";

const userServices = new UserService(new UserRepository());
const authServices = new AuthService(new AuthRepository());

function* isUserAuthenticated() {
  try {
    const result = yield* call(() => userServices.getCurrentUser());
    if (!result) return;
    yield* put(signInSuccess(result));
  } catch (error: any) {
    yield* put(authFailure(error?.message ?? "User not authenticated"));
  }
}

function* signInWithGoogle() {
  try {
    const result = yield* call(() => authServices.loginWithGoogle());
    yield* put(signInSuccess(result));
  } catch (error: any) {
    yield* put(
      authFailure(error?.message ?? "Error on authenticating the user.")
    );
  }
}

function* signWithEmailAndPassword({ payload: credentials }: any) {
  try {
    const result = yield* call(() => authServices.login(credentials as ICredentials));
    yield* put(signInSuccess(result));
  } catch (error: any) {
    yield* put(
      authFailure(error?.message ?? "Error on authenticating the user.")
    );
  }
}

function* registerWithEmailAndPassword({ payload: userData }: any) {
  try {
    const result = yield* call(() => authServices.registerWithEmailAndPassword(userData as IRegistration));
    yield* put(signInSuccess(result));
  } catch (error: any) {
    yield* put(
      authFailure(error?.message ?? "Error on creating account.")
    );
  }
}

function* signOut() {
  try {
    yield* call(() => authServices.logout());
    yield* put(signOutSuccess());
  } catch(error: any) {
    yield* put(
      authFailure(error?.message ?? "Error on creating account.")
    );
  }
}

function* onRegisterWithEmailAndPassword() {
  yield* takeLatest(
    AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_UP,
    registerWithEmailAndPassword
  );
}

function* onSignWithEmailAndPassword() {
  yield* takeLatest(
    AUTH_ACTION_TYPES.EMAIL_AND_PASSWORD_SIGN_IN,
    signWithEmailAndPassword
  );
}

function* onSignInWithGoogle() {
  yield* takeLatest(AUTH_ACTION_TYPES.GOOGLE_SIGN_IN, signInWithGoogle);
}

function* onCheckUserSession() {
  yield* takeLatest(AUTH_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOut() {
  yield* takeLatest(AUTH_ACTION_TYPES.SIGN_OUT, signOut);
}

export function* authSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onSignInWithGoogle),
    call(onSignWithEmailAndPassword),
    call(onRegisterWithEmailAndPassword),
    call(onSignOut),
  ]);
}
