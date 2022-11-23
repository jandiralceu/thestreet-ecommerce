import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { composeWithDevToolsLogOnly } from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";
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

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? composeWithDevToolsLogOnly({ serialize: { options: { map: true, set: true }}})
    : compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

const store = createStore(persistedReducer, undefined, composedEnhancers);


export * from "./cart";
export * from "./auth";
export * from "./product";
export * from "./category";

export const persistor = persistStore(store);

export default store;

sagaMiddleware.run(rootSaga);