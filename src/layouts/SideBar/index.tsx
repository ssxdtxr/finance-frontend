import { NavLink } from "react-router-dom";
import { sideBarData } from "./sidebar.data";
import cn from "clsx";

const SideBar = () => {
  return (
    <aside className="bg-sidebar items-center flex flex-col gap-5 py-[29px]">
      {sideBarData.map(({ icon: Icon, route, title }) => (
        <NavLink to={route} key={route}>
          {({ isActive }) => (
            <div
              className={cn(
                "cursor-pointer p-4 rounded-full hover:bg-hover transition-colors ",
                {
                  "bg-red-900  transition-all ": isActive,
                }
              )}
              title={title}
            >
              <Icon color="#fff" className="w-5 h-5" />
            </div>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
