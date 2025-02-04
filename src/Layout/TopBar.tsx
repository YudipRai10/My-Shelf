import React from "react";
import menu from "../assets/menu_icon.png";
import SearchBar from "../Components/TopBar/SearchBar";
import ProfileBar from "../Components/TopBar/ProfileBar";

export interface BarProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function TopBar({ setShowSideBar }: BarProps): React.ReactElement {
  return (
    <nav className="md:bg-gradient-to-b from-white from-0% via-light via-50% to-light to-90% flex justify-between items-center md:gap-2 xl:gap-18 px-2 lg:px-12 pt-9.5 pb-6 text-primary">
      <SearchBar />

      <ProfileBar />

      {/* Hidden Menu Bar */}
      <div className="block md:hidden">
        <img
          src={menu}
          alt="menu-icon"
          className="object-contain w-7 cursor-pointer"
          onClick={() => setShowSideBar(true)}
        />
      </div>
    </nav>
  );
}

export default TopBar;
