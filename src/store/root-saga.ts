import { all, call } from "typed-redux-saga/macro";

import { authSaga } from "./auth";
import { categoriesSaga } from "./category";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(authSaga)]);
}
