import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./category";
import { userSagas } from "./user";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
