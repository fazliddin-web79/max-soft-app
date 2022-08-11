import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: {},
  },
  reducers: {
    getUser: (state, payload) => {
      state.user = payload.payload;
      console.log(state.user, "user from user reduser");
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
