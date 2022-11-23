import { CartItem } from "../../models";
import { createAction, withMatcher } from "../../utils";
import { CART_ACTION_TYPES } from "./cart-types";

export const addToCart = withMatcher((item: CartItem) =>
  createAction(CART_ACTION_TYPES.ADD_TO_CART, item));

export const removeFromCart = withMatcher((id: number) =>
  createAction(CART_ACTION_TYPES.REMOVE_FROM_CART, id));

export const setDiscount = withMatcher((value: number) =>
  createAction(CART_ACTION_TYPES.SET_DISCOUNT, value));

export const setShipping = withMatcher((value: number) =>
  createAction(CART_ACTION_TYPES.SET_SHIPPING, value));

export const increaseQuantity = withMatcher((id: number) =>
  createAction(CART_ACTION_TYPES.INCREASE_PRODUCT_QUANTITY, id));

export const decreaseQuantity = withMatcher((id: number) =>
  createAction(CART_ACTION_TYPES.DECREASE_PRODUCT_QUANTITY, id));

export const clearCart = withMatcher(() => createAction(CART_ACTION_TYPES.CLEAR_CART));

