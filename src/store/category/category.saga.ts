import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { CategoryRepository } from "../../repositories";
import { CategoryService } from "../../services";
import * as action from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

const categoriesService = new CategoryService(new CategoryRepository());

function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(() => categoriesService.getAll());
    yield* put(action.onFetchSuccessCategories(categories));
  } catch (error: any) {
    yield* put(
      action.onFetchErrorCategories(error?.message ?? "Sorry, try again later.")
    );
  }
}

function* onFetchCategories() {
  yield* takeLatest(CATEGORY_ACTION_TYPES.FETCH, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
