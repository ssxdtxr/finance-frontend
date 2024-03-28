import {
  Category,
  ITransaction,
} from "@/types/FinanceTypes/Transaction.interface";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

interface InfoBar {
  allTransactions: ITransaction[];
}

export const InfoBar: FC<InfoBar> = ({ allTransactions }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const expenseTransactions = allTransactions?.reduce(
    (accumulator, currentValue) =>
      (accumulator +=
        currentValue.category === Category["expense"]
          ? Number(currentValue.price)
          : 0),
    0
  );

  const incomeTransactions = allTransactions?.reduce(
    (accumulator, currentValue) =>
      (accumulator +=
        currentValue.category === Category["income"]
          ? Number(currentValue.price)
          : 0),
    0
  );
  return (
    <>
      <span>
        Всего доходов:
        {expenseTransactions}
        Рублей
      </span>

      <Doughnut
        data={{
          labels: ["Траты", "Доход"],
          datasets: [
            {
              label: "Количество измеряемое в (руб.)",
              data: [expenseTransactions, incomeTransactions],
              borderWidth: 1,
              backgroundColor: ["#ff7979", "#78d700"],
            },
          ],
        }}
      />

      <form
        action=""
        className="flex flex-col gap-5 bg-cardSection p-7 rounded-2xl text-black"
      >
        <input type="text" placeholder="title" />
        <select name="" id="">
          <option value="INCOME">Доход</option>
        </select>
        <input type="number" placeholder="price" />
        <button>отправить</button>
      </form>
    </>
  );
};
