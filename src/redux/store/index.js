/**
 * create store
 */
import { createStore } from "redux"
import count from "../reducers/count";
/**
 * createStore(reducer,middleware)
 */
const store = createStore(count);
export default store;