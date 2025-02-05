import React from "react";
import SearchHeader from "../../Components/Search/SearchHeader";
import SearchBody from "../../Components/Search/SearchBody";

function Search(): React.ReactElement {
  return (
    <div className="mt-7 px-2 lg:px-12 h-full overflow-y-auto hide-scrollbar">
      {/* Header Row */}
      <SearchHeader />

      {/* Display Book Row */}
      <SearchBody />
    </div>
  );
}

export default Search;
