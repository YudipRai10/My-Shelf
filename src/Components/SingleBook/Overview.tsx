import React, { useState } from "react";

export const Overview: React.FC = () => {
  const [active, setActive] = useState<string>("Overview");

  const overview: string[] = [
    "Overview",
    "View 166 Editions",
    "Details",
    "4.1k Reviews",
    "Lists",
    "Related Books",
  ];
  return (
    <div>
      <ul className="bg-white flex items-center py-2.5 pl-4 gap-32  text-xs mb-4">
        {overview.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              active === item ? "text-highlight" : "text-list"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-4 justify-between gap-12 font-semibold mb-7">
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Publish Date</p>
          <p className="">2000</p>
        </div>
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Publisher</p>
          <p className="text-highlight">New Riders Press</p>
        </div>
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Language</p>
          <p className="text-highlight">English</p>
        </div>
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Pages</p>
          <p className="text-feature">216</p>
        </div>
      </div>
    </div>
  );
};
