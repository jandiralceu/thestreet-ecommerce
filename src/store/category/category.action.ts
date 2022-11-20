import { Category } from "../../models";
import { CategoryRepository } from "../../repositories";
import { CategoryService } from "../../services";
import { createAction } from "../../utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

const categoriesService = new CategoryService(new CategoryRepository());

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

export const onFetchCategoriesAsync: any = () => async (dispatch: any) => {
  dispatch(onFetchCategoriesStart());

  try {
    const categories = await categoriesService.getAll();
    dispatch(onFetchSuccessCategories(categories));
  } catch (error: any) {
    dispatch(onFetchErrorCategories(error?.message ?? 'Sorry, try again later.'));
  }
}
