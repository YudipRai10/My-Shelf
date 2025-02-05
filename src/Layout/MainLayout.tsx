import React, { useState } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import HiddenBar from "./HiddenBar";

function MainLayout(): React.ReactElement {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <main className="main h-screen flex flex-col px-8.5 pt-12 pb-9.5">
      <section className="flex h-full flex-grow">
        {/* Sidebar */}
        <aside
          className="w-60 2xl:w-side bg-white rounded-l-sidebar hidden flex-shrink-0 md:block"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </aside>

        {/* Main Area */}
        <div
          className="flex flex-col flex-grow"
          data-aos="fade-left"
          data-aos-duration="800"
        >
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
