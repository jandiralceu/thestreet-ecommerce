import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { setCurrentUser } from "./user";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export type RootState = ReturnType<typeof store.getState>;
export { setCurrentUser }
export default store;