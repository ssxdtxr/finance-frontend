import dayjs from "dayjs";
import "dayjs/locale/ru";

import { FaCalendarDays } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

dayjs.locale("ru");
export const Header = () => {
  const formattedDate = dayjs(new Date()).format("DD MMMM YYYY");

  return (
    <div className="py-[29px] font-bold flex items-center justify-between border-b-[1px] border-[#3f4043] ">
      <h1>Welcome back, Liza 👋</h1>
      <ul className="flex items-center text-[16px] text-[#949597] gap-5">
        <li>
          <IoIosSearch size={30} />
        </li>
        <li className="flex items-center gap-2 card">
          <FaCalendarDays />
          <span>{formattedDate}</span>
        </li>
      </ul>
    </div>
  );
};
