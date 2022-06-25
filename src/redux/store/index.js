/**
 * create store
 */
import { createStore, applyMiddleware } from "redux"

import rootReducer from "../reducers/index";
import reduxLogger from "redux-logger"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
//middleware 1
/*
const logger = store =>next =>action =>{
    console.log("dispatch ->",action)
    let result = next(action)
    console.log("next state->",store.getState());
    return result;
}
*/


/**
 * createStore(reducer,middleware)
 */
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(reduxLogger,thunk)));
export default store;