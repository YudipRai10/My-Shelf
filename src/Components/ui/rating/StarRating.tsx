import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa"; // Import the half star icon

export const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const totalNoOfStars = 5;

  return (
    <div className="flex gap-1">
      {Array.from({ length: totalNoOfStars }, (_, index) => {
        if (index < Math.floor(rating)) {
          return <FaStar key={index} className="text-star" />;
        } else if (index < Math.floor(rating) + 0.5 && rating % 1 !== 0) {
          return <FaStarHalfAlt key={index} className="text-star" />;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </div>
  );
};
