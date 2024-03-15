import { api } from "@/config/api";
import { useActions } from "@/hooks/useActions";
import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";
import { useQuery } from "react-query";

const FinanceService = {
  async fetchFinance() {
    return await api.get<ITransaction[]>("/transaction");
  },
};

export const useFinance = () => {
  const { setTransactions } = useActions();

  return useQuery(["fetchFinance"], () => FinanceService.fetchFinance(), {
    onSuccess: (data) => {
      setTransactions(data.data);
    },
  });
};
