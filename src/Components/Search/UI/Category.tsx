import React from "react";

interface CategoryProps {
  category: string;
  subCategory?: string;
}

function Category({
  category,
  subCategory,
}: CategoryProps): React.ReactElement {
  return (
    <div>
      <p className="text-xl mb-2.5">{category}</p>
      <p className="text-sm">{subCategory}</p>
    </div>
  );
}

export default Category;
