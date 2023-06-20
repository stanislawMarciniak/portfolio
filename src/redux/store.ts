import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { foldedSlice } from "./folder";
import { createWrapper, Context } from "next-redux-wrapper";
import { combineReducers, Store } from "redux";

const rootReducer = combineReducers({
  folded: foldedSlice.reducer,
});

const makeStore = (context: Context) =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export type AppStore = Store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
