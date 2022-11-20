import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { composeWithDevToolsLogOnly } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";
import { transformItemsCartMap } from "./transforms";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  transforms: [transformItemsCartMap],
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? composeWithDevToolsLogOnly({ serialize: { options: { map: true, set: true }}})
    : compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);

export * from "./cart";
export * from "./user";
export * from "./product";
export * from "./category";

export const persistor = persistStore(store);

export default store;
