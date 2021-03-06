import { combineReducers, createStore } from "redux";
import cartReducer from "../reducers/CartReducers";

const rootReducer = combineReducers({
  cart: cartReducer,
});
export const store = createStore(rootReducer);
