import { Category } from "../../models";
import { createAction } from "../../utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categories?: Category[]) => {
  return createAction<CATEGORY_ACTION_TYPES>(
    CATEGORY_ACTION_TYPES.SET_CATEGORIES,
    categories
  );
};
