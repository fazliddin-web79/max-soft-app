import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebar";
import user from "./user";

export const store = configureStore({
  reducer: {
    sidebar,
    user,
  },
});
