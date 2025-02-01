import React from "react";
import Logo from "../Components/ui/logo/Logo";
import InfoLink from "../Components/SideBar/InfoLink";
import NavigationLink from "../Components/SideBar/NavigationLink";
import { BarProps } from "./TopBar";
import cross from "../assets/cross_icon.png";

export interface SideBarProps extends BarProps {
  showSideBar: boolean;
}

function SideBar({
  showSideBar,
  setShowSideBar,
}: SideBarProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-24 h-full items-center pt-9.5 pb-12 relative">
      {/* Cross Icon */}
      {showSideBar && (
        <img
          src={cross}
          alt="cross-icon"
          className="absolute right-5 transition-all duration-300 object-contain cursor-pointer"
          onClick={() => setShowSideBar(false)}
        />
      )}

      <Logo width="w-small" />

      <div className="flex flex-col justify-between h-full">
        <NavigationLink setShowSideBar={setShowSideBar} />
        {!showSideBar && <InfoLink />}
      </div>
    </div>
  );
}

export default SideBar;
