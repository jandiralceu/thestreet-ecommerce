import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailure } from './user.action';
import { UserService } from "../../services";
import { UserRepository } from "../../repositories";

const userServices = new UserService(new UserRepository());

export function* isUserAuthenticated() {
  try {
    const result = yield* call(() => userServices.getCurrentUser());
    if (!result) return;
    yield* put(signInSuccess(result));
  } catch (error: any) {
    yield* put(signInFailure(error?.message ?? 'User not authenticated'));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
