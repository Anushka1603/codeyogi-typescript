import { FC } from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "./SideBar";
import MiniSideBar from "./SideBar1";

const MainLayout: FC = (props: any) => {
  return (
    <div className="sm:flex">
      <div className="">
        <LeftSideBar></LeftSideBar>
        <MiniSideBar></MiniSideBar>
      </div>
      <div className="p-4 bg-gray-200 sm:p-14 grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
