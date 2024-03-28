import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";
import { createSlice } from "@reduxjs/toolkit";

interface FinanceState {
  totalPages: number | null;
  transactionsQuery: ITransaction[];
}

const initialState: FinanceState = {
  totalPages: null,
  transactionsQuery: [],
};

export const FinanceSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setTransactionsQuery: (
      state,
      { payload: { totalPages, transactionsQuery } }: { payload: FinanceState }
    ) => {
      state.totalPages = totalPages;
      state.transactionsQuery = transactionsQuery;
    },
  },
});

export const { reducer: financeReducer, actions: financeActions } =
  FinanceSlice;
