import React from "react";
import DisplayBook from "../UI/DisplayBook";

function RecentReading(): React.ReactElement {
  return (
    <div className="my-5">
      <p className="text-2xl mb-1">Recent Readings</p>

      {/* Display Books */}
      <DisplayBook />
    </div>
  );
}

export default RecentReading;
