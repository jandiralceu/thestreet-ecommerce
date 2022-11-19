import { Category } from "../../models";
import { CATEGORY_ACTION_TYPES } from "./category.types";

type IState = {
  categories?: Category[];
}

type IAction = {
  type: CATEGORY_ACTION_TYPES,
  payload: any
}

const INITIAL_STATE: IState = {};

export const categoryReducer = (state: IState = INITIAL_STATE, action: IAction): IState => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
