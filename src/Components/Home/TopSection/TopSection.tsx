import React from "react";
import Today from "./TodayQuotes";
import NewArrival from "./NewArrival";

function TopSection(): React.ReactElement {
  return (
    <div className="border border-red-500 flex gap-11 px-2 lg:px-12 pt-6">
      <Today />
      <NewArrival />
    </div>
  );
}

export default TopSection;
