import { Product } from "../../models";
import { createAction, withMatcher } from "../../utils";
import { PRODUCT_ACTION_TYPES } from "./product.types";

export const setProducts = withMatcher((products?: Product[]) =>
  createAction(PRODUCT_ACTION_TYPES.SET_PRODUCTS, products));

