import { api } from "@/config/api";
import { useActions } from "@/hooks/useActions";
import { useQuery } from "react-query";

export const FinanceService = {
  async fetchFinance(page?: number, limit?: number) {
    return await api.get("/transaction", {
      params: {
        page,
        limit,
      },
    });
  },
};

export const useFinance = (page?: number, limit?: number) => {
  const { setTransactionsQuery } = useActions();

  return useQuery(
    ["fetchFinance", page, limit],
    () => FinanceService.fetchFinance(page, limit),
    {
      cacheTime: 600000,
      onSuccess: ({ data }) => {
        setTransactionsQuery({
          totalPages: data.totalPages,
          transactionsQuery: data.transactions,
        });
      },
    }
  );
};
