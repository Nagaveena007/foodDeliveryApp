import { configureStore, combineReducers } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice";
//import restaurantReducer from "../slices/restaurantSlice";

const reducer = combineReducers({
  basket: basketReducer,
 // restaurant: restaurantReducer,
});

export const store = configureStore({
  reducer,
});
