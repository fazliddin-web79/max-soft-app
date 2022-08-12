import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: {},
    darkMode: false,
  },
  reducers: {
    getUser: (state, payload) => {
      state.user = payload.payload;
    },
    setDarkMode: (state, paylaod) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { getUser, setDarkMode } = userSlice.actions;
export default userSlice.reducer;
