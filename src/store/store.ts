import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { transformItemsCartMap } from "./transforms";
import { composeWithDevToolsLogOnly } from "@redux-devtools/extension";

const persistConfig = {
  key: "root",
  storage,
  transforms: [transformItemsCartMap],
  blacklist: ["user", "product", "category"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares: any[] = [];

if (process.env.NODE_ENV !== "production") {
    middleWares.push(logger);
}

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? composeWithDevToolsLogOnly({})
    : compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;

export * from "./cart";
export * from "./user";
export * from "./product";
export * from "./category";
export const persistor = persistStore(store);

export default store;
