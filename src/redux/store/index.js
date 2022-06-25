/**
 * create store
 */
import { createStore } from "redux"

import rootReducer from "../reducers/index";
import {composeWithDevTools} from "redux-devtools-extension"
/**
 * createStore(reducer,middleware)
 */
const store = createStore(rootReducer,composeWithDevTools());
export default store;