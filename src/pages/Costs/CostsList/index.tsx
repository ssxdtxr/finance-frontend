import { FC } from "react";
import CostCard from "../CostCard";
import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";

interface ICostsList {
  transactionsQuery: ITransaction[];
}

export const CostsList: FC<ICostsList> = ({ transactionsQuery }) => {
  return (
    <>
      {transactionsQuery?.map((item) => (
        <CostCard key={item.id} {...item} />
      ))}
    </>
  );
};
