import React, { useEffect, useRef, useState } from "react";
import { updateLinePosition } from "../../helper/tab.helper";
import { Tab } from "./Tab";

export const Overview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [linePosition, setLinePosition] = useState<{
    width: string;
    left: string;
  }>({
    width: "80px",
    left: "0px",
  });

  const lineRef = useRef<HTMLDivElement | null>(null);

  // To make tab selection easier by only using first letter of activeTab
  const tabSelected = activeTab.slice(0, 1);

  useEffect(() => {
    updateLinePosition({ tabSelected, lineRef, setLinePosition });
  }, [activeTab]);

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
      <ul className="bg-white flex items-center py-2.5 pl-4 gap-32 text-xs mb-4 relative">
        {overview.map((item) => {
          return (
            <li
              key={item}
              className={`tab-${item.slice(0, 1)} cursor-pointer ${
                activeTab === item ? "text-highlight" : "text-list"
              }`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          );
        })}
        <div
          ref={lineRef}
          className="absolute h-0.5 bg-highlight bottom-0 transition-all"
          style={{
            width: linePosition.width,
            left: linePosition.left,
            transition: "all 0.3s ease",
          }}
        />
      </ul>

      {/* Conditionally render content based on activeTab */}
      <div className="grid grid-cols-4 justify-between gap-12 font-semibold mb-7">
        <Tab activeTab={activeTab} />
      </div>
    </div>
  );
};
