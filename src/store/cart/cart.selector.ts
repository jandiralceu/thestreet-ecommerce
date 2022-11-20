import { RootState } from "../store";
import { createSelector } from "reselect";

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartInfo = createSelector(
  [selectCartReducer],
  (categoryReducer) => {
    const items = Array.from(categoryReducer.items.values());
    const subTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemsQuantity = items.reduce((quantity, item) => quantity + item.quantity, 0)

    return {
      items,
      subTotal,
      itemsQuantity,
      discount: categoryReducer.discount,
      isEmpty: !items.length,
      shippingPrice: categoryReducer.shippingPrice,
      total: (subTotal + categoryReducer.shippingPrice) - categoryReducer.discount
    }
  }
);
