import { createSlice } from "@reduxjs/toolkit";

export const foldedSlice = createSlice({
  name: "folded",
  initialState: {
    value: false,
  },
  reducers: {
    changeFolded: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeFolded } = foldedSlice.actions;

export default foldedSlice.reducer;
