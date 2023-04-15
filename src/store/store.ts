import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";
import basketSlice from "./basket";
import blogSlice from './blog';

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  product: productSlice.reducer,
  blog: blogSlice.reducer,
  // user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
