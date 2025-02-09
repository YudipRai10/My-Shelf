import React from "react";

interface TabProps {
  activeTab: string;
}

export const Tab: React.FC<TabProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Overview":
      return (
        <>
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
        </>
      );
    case "View 166 Editions":
      return (
        <div>
          <div className="bg-white text-center py-2.5">
            <p className="text-list text-xxs">Editions</p>
            <p className="text-highlight">166 Editions Available</p>
          </div>
        </div>
      );
    case "Details":
      return (
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Details</p>
          <p className="text-highlight">No Details</p>
        </div>
      );
    case "4.1k Reviews":
      return (
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Reviews</p>
          <p className="text-highlight">4.1k Reviews Available</p>
        </div>
      );
    case "Lists":
      return (
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Lists</p>
          <p className="text-highlight">No List</p>
        </div>
      );
    case "Related Books":
      return (
        <div className="bg-white text-center py-2.5">
          <p className="text-list text-xxs">Related Books</p>
          <p className="text-highlight">None</p>
        </div>
      );
  }
};
