import React from "react";
import search from "../assets/orange_search.png";
import caret from "../assets/caret.png";
import profilepic from "../assets/profilepic.png";
import menu from "../assets/menu_icon.png";
import { useNavigate } from "react-router-dom";

export interface BarProps {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

function TopBar({ setShowSideBar }: BarProps): React.ReactElement {
  const navigate = useNavigate();

  return (
    <nav
      className="md:bg-gradient-to-b from-white from-0% via-light via-50% to-light to-90% flex justify-between items-center md:gap-2 xl:gap-18 px-2 lg:px-12 pt-9.5 pb-6 text-primary"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <div className="flex items-center shadow-low rounded-5xl w-4/5 bg-white">
        <div className="flex items-center gap-2.5 text-xl py-3 pl-3 lg:pl-9.5 pr-5 rounded-l-5xl bg-small cursor-pointer">
          <p>All</p>
          <img src={caret} alt="caret" className="object-contain" />
        </div>

        <div className="flex items-center gap-1 w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none outline-none ml-5"
            onFocus={() => navigate("/search")}
          />
          <img src={search} alt="search" className="pr-5 object-contain" />
        </div>
      </div>

      <div className="md:flex items-center gap-1 xl:gap-4 rounded-4xl bg-white shadow-low p-1 cursor-pointer hidden">
        <img
          src={profilepic}
          alt="profile-picture"
          className="object-contain w-7 lg:w-12"
        />
        <div className="flex gap-1 xl:gap-4 items-center lg:pr-2 xl:pr-7">
          <p className="text-primary text-xs md:text-sm lg:text-xl">Kenson</p>
          <img src={caret} alt="caret" className="object-contain" />
        </div>
      </div>

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
