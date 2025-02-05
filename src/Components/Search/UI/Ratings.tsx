import React from "react";

interface RatingProps {
  rating: number;
}

function Ratings({ rating }: RatingProps): React.ReactElement {
  return (
    <p className="text-xl">
      {rating}
      <span className="text-base text-rating">/5</span>
    </p>
  );
}

export default Ratings;
