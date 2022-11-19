import { Product } from "../../models";
import { createAction } from "../../utils";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setProducts = (products?: Product[]) => {
  return createAction<PRODUCT_ACTION_TYPES>(
    PRODUCT_ACTION_TYPES.SET_PRODUCTS,
    products
  );
};
