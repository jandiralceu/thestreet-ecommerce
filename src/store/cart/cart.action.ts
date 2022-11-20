import { CartItem } from "../../models";
import { createAction } from "../../utils";
import { CART_ACTION_TYPES } from "./cart-types";

export const addToCart = (item: CartItem) => {
  return createAction<CART_ACTION_TYPES>(CART_ACTION_TYPES.ADD_TO_CART, item);
};

export const removeFromCart = (id: number) => {
  return createAction<CART_ACTION_TYPES>(
    CART_ACTION_TYPES.REMOVE_FROM_CART,
    id
  );
};

export const setDiscount = (value: number) => {
  return createAction<CART_ACTION_TYPES>(CART_ACTION_TYPES.SET_DISCOUNT, value);
};

export const setShipping = (value: number) => {
  return createAction<CART_ACTION_TYPES>(CART_ACTION_TYPES.SET_SHIPPING, value);
};

export const increaseQuantity = (id: number) => {
  return createAction<CART_ACTION_TYPES>(
    CART_ACTION_TYPES.INCREASE_PRODUCT_QUANTITY,
    id
  );
};

export const decreaseQuantity = (id: number) => {
  return createAction<CART_ACTION_TYPES>(
    CART_ACTION_TYPES.DECREASE_PRODUCT_QUANTITY,
    id
  );
};

export const clearCart = () => {
  return createAction<CART_ACTION_TYPES>(CART_ACTION_TYPES.CLEAR_CART);
};
