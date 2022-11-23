import { Category } from "../../models";
import {
  onFetchCategoriesStart,
  onFetchErrorCategories,
  onFetchSuccessCategories,
} from "./category.action";
import { AnyAction } from "redux";

type TCategoryState = {
  readonly categories?: Category[];
  readonly loading: boolean;
  readonly error?: string;
};

const INITIAL_STATE: TCategoryState = {
  loading: false,
};

export const categoryReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (onFetchCategoriesStart.match(action)) {
    return {
      ...state,
      loading: !state.loading,
      error: undefined,
    };
  }

  if (onFetchSuccessCategories.match(action)) {
    return {
      ...state,
      categories: action.payload,
      loading: !state.loading,
      error: undefined,
    };
  }

  if (onFetchErrorCategories.match(action)) {
    return {
      ...state,
      loading: !state.loading,
      error: action.payload,
    };
  }

  return state;
};
