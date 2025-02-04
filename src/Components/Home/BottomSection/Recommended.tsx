import React from "react";
import DisplayBook from "../UI/DisplayBook";

function Recommended(): React.ReactElement {
  return (
    <div className="mt-4">
      <p className="text-2xl mb-1">Recommended for You</p>

      {/* Display Books */}
      <DisplayBook />
    </div>
  );
}

export default Recommended;
