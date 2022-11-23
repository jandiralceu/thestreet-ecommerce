import { combineReducers } from "redux";

import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";
import { cartReducer } from "./cart/cart-reducer";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
});
