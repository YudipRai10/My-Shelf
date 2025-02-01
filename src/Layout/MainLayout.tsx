import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import HiddenBar from "./HiddenBar";

function MainLayout(): React.ReactElement {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <main className="main h-screen px-8.5 pt-12 pb-9.5">
      <section className="flex h-full">
        {/* Sidebar */}
        <aside
          className="w-40 md:w-side bg-white rounded-l-sidebar hidden md:block"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </aside>

        {/* Main Area */}
        <div className="flex-grow">
          <TopBar setShowSideBar={setShowSideBar} />
          <Outlet />
        </div>
      </section>

      {/* For small screen Sidebar */}
      <HiddenBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </main>
  );
}

export default MainLayout;
