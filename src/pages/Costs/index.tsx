import { useTypedSelectorHook } from "@/hooks/useTypedSelectorHook";
import { useFinance } from "@/services/finance.service";
import CostCard from "./CostCard";

const Costs = () => {
  const { isLoading } = useFinance();
  const { transactions } = useTypedSelectorHook((state) => state.finance);

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading
        ? "Loading..."
        : transactions.map((item) => <CostCard key={item.id} {...item} />)}
    </div>
  );
};

export default Costs;
