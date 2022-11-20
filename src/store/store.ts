import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { transformItemsCartMap } from "./transforms";

const persistConfig = {
  key: "root",
  storage,
  transforms: [transformItemsCartMap],
  blacklist: ["user", "product", "category"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;

export * from "./cart";
export * from "./user";
export * from "./product";
export * from "./category";
export const persistor = persistStore(store);

export default store;
