import { Loader } from "@/components/ui/Loader";
// import Logo from "@assets/img/Logo.svg";
import { Suspense } from "react";
import SideBar from "./SideBar";

import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";

export const Layout = () => {
  // const navigate = useNavigate();

  return (
    <main className="grid grid-cols-[1fr__24fr] h-screen">
      <SideBar />
      <Suspense fallback={<Loader />}>
        {/* <div className="bg-info">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <Logo />
          </div>
        </div> */}
        <div className="bg-mainPart px-[32px] text-[20px]">
          <Header />
          <div className="relative">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </main>
  );
};
