import React from "react";
import "../../../index.css";

import NewArrivalDisplay from "../UI/NewArrivalDisplay";

function NewArrival(): React.ReactElement {
  return (
    <div className="flex justify-center items-center relative rounded-bl-10 h-56 ">
      <div className="bg-[#FA7C54E5] text-white flex items-center justify-center h-full w-12 rounded-l-10">
        <p className="font-medium text-2xl -rotate-90 whitespace-nowrap">
          New Arrivals
        </p>
      </div>

      {/* Display New Arribval Boojs */}
      <NewArrivalDisplay />
    </div>
  );
}

export default NewArrival;
