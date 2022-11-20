import { CartItem } from "../../models";
import { CART_ACTION_TYPES } from "./cart-types";

export type ICartState = {
  items: Map<number, CartItem>;
  shippingPrice: number;
  discount: number;
};

type IAction = {
  type: CART_ACTION_TYPES;
  payload: any;
};

const INITIAL_STATE: ICartState = {
  items: new Map(),
  shippingPrice: 0,
  discount: 0,
};

export const cartReducer = (
  state: ICartState = INITIAL_STATE,
  action: IAction
): ICartState => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id, quantity, ...rest } = action.payload as CartItem;
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
    case CART_ACTION_TYPES.INCREASE_PRODUCT_QUANTITY: {
      const id = action.payload;
      const items = new Map(state.items);
      const item = items.get(action.payload) as CartItem;

      items.set(id, { ...item, quantity: item.quantity + 1 });

      return {
        ...state,
        items,
      };
    }
    case CART_ACTION_TYPES.DECREASE_PRODUCT_QUANTITY: {
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
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const items = new Map(state.items);
      items.delete(action.payload);

      return { ...state, items };
    }
    case CART_ACTION_TYPES.SET_DISCOUNT:
      return {
        ...state,
        discount: state.discount + action.payload,
      };
    case CART_ACTION_TYPES.SET_SHIPPING:
      return {
        ...state,
        shippingPrice: action.payload,
      };
    default:
      return state;
  }
};
