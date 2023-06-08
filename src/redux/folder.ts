import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

export const foldedSlice = createSlice({
  name: "folded",
  initialState: {
    foldedState: false,
  },
  reducers: {
    setFoldedState: (state) => {
      state.foldedState = !state.foldedState;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.folded,
      };
    },
  },
});

export const { setFoldedState } = foldedSlice.actions;
export const selectFoldedState = (state: AppState) => state.folded.foldedState;
export default foldedSlice.reducer;
