import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

function MainLayout(): React.ReactElement {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <main className="main h-screen px-8.5 pt-12 pb-9.5">
      <section className="flex justify-start h-full">
        {/* Sidebar */}
        <aside
          className="w-40 md:w-side bg-white rounded-l-sidebar hidden md:block"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </aside>

        {/* Content Area */}
        <div className="flex-grow">
          <TopBar setShowSideBar={setShowSideBar} />
          <Outlet />
        </div>
      </section>

      {/* For small screen Sidebar */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-300 z-10 ${
          showSideBar ? "w-4/5 shadow-custom" : "w-0"
        }`}
      >
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
    </main>
  );
}

export default MainLayout;
