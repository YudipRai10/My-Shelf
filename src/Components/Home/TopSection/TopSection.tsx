import React from "react";
import Today from "./TodayQuotes";
import NewArrival from "./NewArrival";

function TopSection(): React.ReactElement {
  return (
    <div className="flex lg:flex-row flex-col gap-10 px-2 lg:px-12 mt-6">
      {/* Display today's quote */}
      <Today />

      {/* Section for new arrivals */}
      <div className="">
        <NewArrival />
      </div>
    </div>
  );
}

export default TopSection;
