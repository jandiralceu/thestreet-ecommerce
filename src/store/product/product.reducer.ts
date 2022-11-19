import { Product } from "../../models";
import { PRODUCT_ACTION_TYPES } from "./product.types";

type IState = {
  products?: Product[];
}

type IAction = {
  type: PRODUCT_ACTION_TYPES,
  payload: any
}

const INITIAL_STATE: IState = {};

export const productReducer = (
  state: IState = INITIAL_STATE,
  action: IAction
): IState => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
