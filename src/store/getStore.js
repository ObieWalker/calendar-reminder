import { configureStore } from "@reduxjs/toolkit";
import reminderReducer from "reducers";

export const getStore = configureStore({
  reducer: { reminders: reminderReducer },
  devTools: process.env.NODE_ENV !== "production",
});
