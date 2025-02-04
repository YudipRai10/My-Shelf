import React from "react";
import Recommended from "./Recommended";
import RecentReading from "./RecentReading";

function BottomSection(): React.ReactElement {
  return (
    <main className="flex flex-col px-2 lg:px-12 mt-10 text-primary hide-scrollbar overflow-y-auto">
      <p className="text-4xl font-semibold">Good Morning</p>

      {/* Recommended Section*/}
      <Recommended />

      {/* Reacent Reading Section */}
      <RecentReading />
    </main>
  );
}

export default BottomSection;
