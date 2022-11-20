import { Category } from "../../models";
import { CATEGORY_ACTION_TYPES } from "./category.types";

type IState = {
  categories?: Category[];
  loading: boolean;
  error?: string;
}

type IAction = {
  type: CATEGORY_ACTION_TYPES,
  payload?: any
}

const INITIAL_STATE: IState = {
  loading: false,
};

export const categoryReducer = (state: IState = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPES.FETCH:
      return {
        ...state,
        loading: !state.loading,
        error: undefined,
      };
    case CATEGORY_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: !state.loading,
        error: undefined,
      };
    case CATEGORY_ACTION_TYPES.ERROR:
      return {
        ...state,
        loading: !state.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};
