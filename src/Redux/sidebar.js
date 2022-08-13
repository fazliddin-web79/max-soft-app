import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { sidebarOpen: true, sidebarResponsive: false },
  reducers: {
    sidebarActive: (state, payload) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    sidebarActiveResponsive: (state, payload) => {
      state.sidebarResponsive = !state.sidebarResponsive;
    },
  },
});

export const { sidebarActive, sidebarActiveResponsive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
