import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./authentication/reducers";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
