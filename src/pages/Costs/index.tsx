import { useTypedSelectorHook } from "@/hooks/useTypedSelectorHook";
import { FinanceService, useFinance } from "@/services/finance.service";
import ReactPaginate from "react-paginate";

import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from "react-query";
import { InfoBar } from "./InfoBar";
import { CostsList } from "./CostsList";

const toastTransactionsLoading = "loadingTrans";

const Costs = () => {
  const [page, setPage] = useState<number>(1);
  const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);

  const { isLoading: isLoadingAllTransactions } = useQuery(
    ["allTransactions"],
    () => FinanceService.fetchFinance(),
    {
      onSuccess: ({ data }) => {
        setAllTransactions(data);
      },
    }
  );

  const { isLoading: isLoadingTransactions } = useFinance(page, 9);

  const { transactionsQuery, totalPages } = useTypedSelectorHook(
    (state) => state.finance
  );

  useEffect(() => {
    if (isLoadingAllTransactions) {
      toast.loading("Загрузка транзакций...", {
        id: toastTransactionsLoading,
      });
    } else {
      toast.dismiss(toastTransactionsLoading);
      toast.success("Транзакции успешно подгрушены", { duration: 1000 });
    }
  }, [isLoadingAllTransactions]);

  useEffect(() => {
    if (!transactionsQuery && !isLoadingTransactions) {
      window.location.reload();
    }
  }, [transactionsQuery]);

  return (
    <main className="grid grid-cols-[6fr_18fr] gap-5 ">
      <div className="border-[1px] border-[#3f4043] h-[800px] rounded-xl mt-4">
        <div className="flex flex-col items-center mt-5 gap-6">
          {isLoadingAllTransactions ? (
            <div>Всего средств: Loading...</div>
          ) : (
            <InfoBar allTransactions={allTransactions} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {transactionsQuery && (
          <ReactPaginate
            containerClassName="flex items-center"
            pageCount={totalPages as number}
            className="flex justify-center  items-center gap-4 bg-cardSection p-4 rounded-2xl "
            pageLinkClassName="flex justify-center  items-center w-8 h-8 bg-black hover:bg-red-900 transition-colors rounded-full text-[13px] font-semibold"
            pageRangeDisplayed={7}
            nextLabel={<IoIosArrowForward />}
            previousLabel={<IoIosArrowBack />}
            onPageChange={(e) => setPage(e.selected + 1)}
            activeLinkClassName="bg-white text-black hover:bg-white"
            nextClassName=" bg-bgCard rounded-sm"
            previousClassName=" bg-bgCard rounded-sm"
            disabledClassName="opacity-5"
          />
        )}
        <div className="grid  grid-cols-3 gap-8 bg-cardSection p-4 rounded-2xl ">
          {isLoadingTransactions ? (
            "Loading..."
          ) : transactionsQuery ? (
            <CostsList transactionsQuery={transactionsQuery} />
          ) : (
            <div>Данные не получены, перезагрузите страницу</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Costs;
