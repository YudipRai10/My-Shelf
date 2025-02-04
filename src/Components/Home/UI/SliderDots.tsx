import React from "react";
import { QuotesDataProps } from "../TopSection/TodayQuotes";

interface DotsProps extends QuotesDataProps {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

function SliderDots({
  quotes,
  currentSlide,
  setCurrentSlide,
}: DotsProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2.5">
      {quotes.map((item) => (
        <button
          key={item.id}
          onClick={() => setCurrentSlide(item.id)}
          className={`w-3 h-3 rounded-full ${
            currentSlide === item.id
              ? "bg-white"
              : "bg-ellipse border border-white"
          }`}
        ></button>
      ))}
    </div>
  );
}

export default SliderDots;
