import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebar";

export const store = configureStore({
  reducer: {
    sidebar,
  },
});
