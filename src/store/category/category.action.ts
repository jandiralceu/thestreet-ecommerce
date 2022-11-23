import { Category } from "../../models";
import { createAction, withMatcher } from "../../utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const onFetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORY_ACTION_TYPES.FETCH)
);

export const onFetchErrorCategories = withMatcher((error: string) =>
  createAction(CATEGORY_ACTION_TYPES.ERROR, error)
);

export const onFetchSuccessCategories = withMatcher((categories: Category[]) =>
  createAction(CATEGORY_ACTION_TYPES.SUCCESS, categories)
);
