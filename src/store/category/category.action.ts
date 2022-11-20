import { Category } from "../../models";
import { createAction } from "../../utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const onFetchCategoriesStart = () => {
  return createAction<CATEGORY_ACTION_TYPES>(CATEGORY_ACTION_TYPES.FETCH);
};

export const onFetchErrorCategories = (error: string) => {
  return createAction<CATEGORY_ACTION_TYPES>(
    CATEGORY_ACTION_TYPES.ERROR,
    error
  );
};

export const onFetchSuccessCategories = (categories: Category[]) => {
  return createAction<CATEGORY_ACTION_TYPES>(
    CATEGORY_ACTION_TYPES.SUCCESS,
    categories
  );
};

