import {
  Category,
  ITransaction,
} from "@/types/FinanceTypes/Transaction.interface";
import dayjs from "dayjs";
import { FC } from "react";

const CostCard: FC<ITransaction> = ({ title, price, createdAt, category }) => {
  const timeCreated = dayjs(createdAt).format("DD MMMM YYYY");
  const timeCreatedHourMin = dayjs(createdAt).format("HH:mm");

  return (
    <div className="flex flex-col p-5 bg-bgCard rounded-2xl gap-5 h-max">
      <div>
        <h1 className="font-bold">{title}</h1>
        <div className="text-[15px] text-textGray font-medium mt-2">
          Тип операции:
          <span
            className={`ml-1 p-1 rounded-lg  ${
              category === Category["expense"]
                ? "bg-expense text-white"
                : "bg-income text-black"
            }`}
          >
            {category}
          </span>
        </div>
      </div>
      <div>price: {price}р</div>
      <div className="flex justify-between items-center">
        <div className="bg-bgTime w-max px-4 py-2 rounded-2xl font-bold text-[14px] text-textGray ">
          {timeCreated}
        </div>
        <div className="bg-bgTime w-max px-4 py-2 rounded-2xl font-bold text-[14px] text-textGray ">
          {timeCreatedHourMin}
        </div>
      </div>
    </div>
  );
};

export default CostCard;
