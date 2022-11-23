import { AnyAction } from "redux";
import { CartItem } from "../../models";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setDiscount,
  setShipping,
  clearCart,
} from "./cart.action";

export type TCartState = {
  readonly items: Map<number, CartItem>;
  readonly shippingPrice: number;
  readonly discount: number;
};

const INITIAL_STATE: TCartState = {
  items: new Map(),
  shippingPrice: 0,
  discount: 0,
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (addToCart.match(action)) {
    const { id, quantity, ...rest } = action.payload;
    const items = new Map(state.items);
    const item = items.get(id);

    if (item)
      items.set(id, { id, quantity: item.quantity + quantity, ...rest });
    else items.set(id, { id, quantity, ...rest });

    return {
      ...state,
      items,
    };
  }

  if (increaseQuantity.match(action)) {
    const id = action.payload;
    const items = new Map(state.items);
    const item = items.get(action.payload) as CartItem;

    items.set(id, { ...item, quantity: item.quantity + 1 });

    return {
      ...state,
      items,
    };
  }

  if (decreaseQuantity.match(action)) {
    const id = action.payload;
    const items = new Map(state.items);
    const item = items.get(action.payload) as CartItem;

    if (item.quantity > 1) {
      items.set(id, { ...item, quantity: item.quantity - 1 });
    }

    return {
      ...state,
      items,
    };
  }

  if (removeFromCart.match(action)) {
    const items = new Map(state.items);
    items.delete(action.payload);

    return { ...state, items };
  }

  if (setDiscount.match(action)) {
    return {
      ...state,
      discount: state.discount + action.payload,
    };
  }

  if (setShipping.match(action)) {
    return {
      ...state,
      shippingPrice: action.payload,
    };
  }

  if (clearCart.match(action)) {
    return INITIAL_STATE;
  }

  return state;
};
