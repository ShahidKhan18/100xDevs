import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    incCount: (state) => {
      return  state + 1;
    },
    decCount: (state) => {
      return  state - 1;
    },
  },
});


export const {incCount,decCount}=countSlice.actions;
export default countSlice.reducer;