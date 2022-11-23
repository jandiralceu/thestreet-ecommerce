import { createTransform } from "redux-persist";

import { CartItem } from "../models";
import { TCartState } from "./cart";

export const transformItemsCartMap: any = createTransform<TCartState, string>(
  (onSerialize, _) => {
    /// Converting Map into Array
    return JSON.stringify({ ...onSerialize, items: Array.from(onSerialize.items.values()) });
  },
  (onDeserialize, _) => {
    /// Convert back into Map
    const cart = JSON.parse(onDeserialize);
    const items = new Map<number, CartItem>();

    cart.items.forEach((item: CartItem) => {
      items.set(item.id, item);
    });

    return { ...cart, items };
  },
  { whitelist: ["cart"] }
);
