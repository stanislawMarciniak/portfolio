import { configureStore } from "@reduxjs/toolkit";
import foldedReducer from "./folder";

export const store = configureStore({
  reducer: {
    folded: foldedReducer,
  },
});
