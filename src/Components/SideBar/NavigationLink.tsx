import React from "react";
import home from "../../assets/home.png";
import homeActive from "../../assets/homeActive.png";
import search from "../../assets/search.png";
import searchActive from "../../assets/searchActive.png";
import shelf from "../../assets/shelf.png";
import shelfActive from "../../assets/shelfActive.png";
import { NavLink, useLocation } from "react-router-dom";
import { BarProps } from "../../Layout/TopBar";

function NavigationLink({ setShowSideBar }: BarProps): React.ReactElement {
  const location = useLocation();

  const navData = [
    {
      path: "/home",
      imgActive: homeActive,
      altActive: "home-active",
      img: home,
      alt: "home",
      label: "Home",
    },
    {
      path: "/search",
      imgActive: searchActive,
      altActive: "search-active",
      img: search,
      alt: "search",
      label: "Search",
    },
    {
      path: "/my_shelf",
      imgActive: shelfActive,
      altActive: "shelf-active",
      img: shelf,
      alt: "shelf",
      label: "Shelf",
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-xl leading-6">
      {navData.map((data, index) => (
        <div key={index} className="flex gap-3">
          {location.pathname === `${data.path}` ? (
            <img
              src={data.imgActive}
              alt={data.altActive}
              className="object-contain"
            />
          ) : (
            <img src={data.img} alt={data.alt} className="object-contain" />
          )}
          <NavLink
            to={data.path}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-side"
            }
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            {data.label}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default NavigationLink;
