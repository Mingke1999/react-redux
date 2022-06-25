import { combineReducers } from "redux";
import count from "./count";
import order from "./order";

const rootReducer = combineReducers({
    count,
    order
});

export default rootReducer