import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { financeReducer } from "./finance/finance.slice";

const reducers = combineReducers({
  finance: financeReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
