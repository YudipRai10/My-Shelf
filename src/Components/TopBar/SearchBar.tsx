import React from "react";
import { useNavigate } from "react-router-dom";
import caret from "../../assets/caret.png";
import search from "../../assets/search.png";

function SearchBar(): React.ReactElement {
  const navigate = useNavigate();

  return (
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
  );
}

export default SearchBar;
