/**
 * create store
 */
import { createStore } from "redux"

import count from "../reducers/count";
import {composeWithDevTools} from "redux-devtools-extension"
/**
 * createStore(reducer,middleware)
 */
const store = createStore(count,composeWithDevTools());
export default store;