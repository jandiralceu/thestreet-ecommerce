import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./category";

export function* rootSaga() {
  yield* all([call(categoriesSaga)]);
}
