import React from "react";
import SideBar, { SideBarProps } from "./SideBar";

function HiddenBar({
  showSideBar,
  setShowSideBar,
}: SideBarProps): React.ReactElement {
  return (
    <div
      className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all duration-300 z-10 ${
        showSideBar ? "w-4/5 shadow-custom" : "w-0"
      }`}
    >
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
}

export default HiddenBar;
