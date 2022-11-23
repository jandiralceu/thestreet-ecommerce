import { AnyAction } from "redux";
import { Product } from "../../models";
import { setProducts } from "./product.action";

type TProductState = {
  readonly products?: Product[];
};

const INITIAL_STATE: TProductState = {};

export const productReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setProducts.match(action)) {
    return {
      ...state,
      products: action.payload,
    };
  }

  return state;
};
