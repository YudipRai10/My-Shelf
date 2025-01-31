import React from "react";
import Logo from "../Components/ui/logo/Logo";
import home from "../assets/home.png";
import homeActive from "../assets/homeActive.png";
import search from "../assets/search.png";
import searchActive from "../assets/searchActive.png";
import shelf from "../assets/shelf.png";
import shelfActive from "../assets/shelfActive.png";
import { NavLink, useLocation } from "react-router-dom";

function SideBar(): React.ReactElement {
  const location = useLocation();
  return (
    <div className="justify-center w-side h-full bg-white rounded-tl-lg rounded-bl-lg hidden sm:flex">
      <div className="flex flex-col gap-24 mt-9.5">
        <Logo width="w-small" height="h-auto" />

        <div className="flex flex-col gap-8 text-xl leading-6">
          <div className="flex gap-3">
            {location.pathname === "/home" ? (
              <img
                src={homeActive}
                alt="home-active"
                className="object-contain"
              />
            ) : (
              <img src={home} alt="home" className="object-contain" />
            )}
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-inactive"
              }
            >
              Home
            </NavLink>
          </div>

          <div className="flex gap-3">
            {location.pathname === "/search" ? (
              <img
                src={searchActive}
                alt="search-active"
                className="object-contain"
              />
            ) : (
              <img src={search} alt="search" className="object-contain" />
            )}
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-inactive"
              }
            >
              Search
            </NavLink>
          </div>

          <div className="flex gap-3">
            {location.pathname === "/my_shelf" ? (
              <img
                src={shelfActive}
                alt="shelf-active"
                className="object-contain"
              />
            ) : (
              <img src={shelf} alt="shelf" className="object-contain" />
            )}
            <NavLink
              to="/my_shelf"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-inactive"
              }
            >
              Shelf
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
