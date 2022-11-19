import { combineReducers } from "redux";

import { categoryReducer } from "./category/category.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
});
