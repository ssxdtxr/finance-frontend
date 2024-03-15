import { FaBook, FaMoneyCheckAlt } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { SideBarData } from "./sidebar.types";
export const sideBarData: SideBarData[] = [
  {
    title: "Финансы",
    route: "costs",
    icon: FaMoneyCheckAlt,
  },
  {
    title: "Книги",
    route: "books",
    icon: FaBook,
  },
  {
    title: "Дела",
    route: "todo",
    icon: LuListTodo,
  },
];
