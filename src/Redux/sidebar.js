import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { sidebarOpen: true },
  reducers: {
    sidebarActive: (state, payload) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { sidebarActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
