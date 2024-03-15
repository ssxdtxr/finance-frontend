import { ITransaction } from "@/types/FinanceTypes/Transaction.interface";
import { FC } from "react";

const CostCard: FC<ITransaction> = ({ id, title, price }) => {
  return (
    <div className="card flex-col">
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default CostCard;
