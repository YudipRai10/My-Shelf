import React from "react";
import search from "../assets/orange_search.png";
import caret from "../assets/caret.png";

function TopBar(): React.ReactElement {
  return (
    <div className="border border-purple-500 bg-gradient-to-b from-white from-0% via-[#F3F3F7] via-50% to-[#F3F3F7] to-90%  flex gap-18 px-12 pt-9.5 pb-6 text-primary">
      <div className="flex items-center bg-white shadow-low rounded-4xl border w-[1177px]">
        <div className="flex items-center gap-2.5 text-xl px-9.5 rounded-l-4xl bg-small py-3 cursor-pointer">
          <p>All</p>
          <img src={caret} alt="caret" className="object-contain" />
        </div>

        <div className="flex justify-between w-full">
          <input
            type="text"
            className="ml-5 outline-none border-none"
            placeholder="Search"
          />

          <img src={search} alt="search" className="pr-5 object-contain" />
        </div>
      </div>

      <div className="flex items-center">
        <div>hi</div>
        <p>Kenson</p>
      </div>
    </div>
  );
}

export default TopBar;
