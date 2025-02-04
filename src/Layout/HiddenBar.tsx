import React from "react";
import SideBar, { SideBarProps } from "./SideBar";

function HiddenBar({
  showSideBar,
  setShowSideBar,
}: SideBarProps): React.ReactElement {
  return (
    <>
      {/* Overlay */}
      {showSideBar && (
        <div
          className={`bg-[rgba(0,0,0,0.1)] absolute top-0 right-0 bottom-0 transition-all duration-300 z-10 ${
            showSideBar ? "w-full" : "w-0"
          }`}
          onClick={() => setShowSideBar(false)} // Close sidebar when clicking overlay
        />
      )}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-300 z-20 ${
          showSideBar ? "w-3/5 shadow-custom" : "w-0"
        }`}
      >
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      </div>
    </>
  );
}

export default HiddenBar;
