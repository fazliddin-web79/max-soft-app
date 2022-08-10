import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {},
  reducers: {
    getUser: (state, payload) => {},
  },
});

export default userSlice.reducer;
