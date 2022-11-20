import { combineReducers } from "redux";

import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
});
