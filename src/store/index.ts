import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./employeesSlice";

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
