import React, { useState } from "react";
import Slider from "../UI/Slider";
import SliderDots from "../UI/SliderDots";
import { quotes } from "../../../bookdata/quotes";

interface QuoteProps {
  id: number;
  text: string;
  author: string;
}

export interface QuotesDataProps {
  quotes: QuoteProps[];
  currentSlide: number;
}

function Today(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="text-white bg-quote py-7 px-4 lg:px-6 rounded-sidebar">
      <Slider quotes={quotes} currentSlide={currentSlide} />
      <SliderDots
        quotes={quotes}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default Today;
