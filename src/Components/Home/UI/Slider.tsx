import React from "react";
import { QuotesDataProps } from "../TopSection/TodayQuotes";

function Slider({ data, currentSlide }: QuotesDataProps): React.ReactElement {
  return (
    <div className="w-carousel">
      {data.map((item) => (
        <div
          key={item.id}
          className={`transition-all duration-700 ease-in-out ${
            currentSlide === item.id ? "block" : "hidden"
          }`}
        >
          <p className="text-2xl font-medium tracking-wide mb-4">
            Today's Quote
          </p>
          <p className="text-xl mb-6 pr-6 animate-fadeIn">{item.text}</p>
          <p className="text-right text-xl pr-3 animate-fadeIn">
            {item.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Slider;
