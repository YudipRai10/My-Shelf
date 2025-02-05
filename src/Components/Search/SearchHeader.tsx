import React from "react";

function SearchHeader(): React.ReactElement {
  const headers: string[] = [
    "Title",
    "Ratings",
    "Category",
    "Availability",
    "Status",
  ];
  return (
    <div className="grid grid-cols-5 2xl:grid-cols-[440px_130px_260px_210px_auto]">
      {headers.map((header) => (
        <div key={header} className="font-medium text-xl text-primary mb-7">
          {header}
        </div>
      ))}
    </div>
  );
}

export default SearchHeader;
