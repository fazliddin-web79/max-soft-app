import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { data: 5 },
  reducers: {},
});

export default sidebarSlice.reducer;
