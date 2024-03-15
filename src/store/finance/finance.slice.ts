import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";
import { createSlice } from "@reduxjs/toolkit";

interface FinanceState {
  transactions: ITransaction[];
}

const initialState: FinanceState = {
  transactions: [],
};

export const FinanceSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setTransactions: (state, { payload: items }) => {
      state.transactions.push(...items);
    },
  },
});

export const { reducer: financeReducer, actions: financeActions } =
  FinanceSlice;
