import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function MainLayout(): React.ReactElement {
  return (
    <div className="border border-red-500 h-dvh px-8.5 pt-12 pb-9.5">
      <section className="border border-blue-500 h-full flex">
        <SideBar />
        <div className="flex-grow"> 
          <TopBar />
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default MainLayout;
