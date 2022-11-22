import { RootState } from "../store";
import { createSelector } from "reselect";

const selectCategoryReducer = (state: RootState) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoryReducer) => categoryReducer.categories
);
