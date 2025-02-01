import React, { useState } from "react";
import Slider from "../UI/Slider";
import SliderDots from "../UI/SliderDots";

interface QuoteProps {
  id: number;
  text: string;
  author: string;
}

export interface QuotesDataProps {
  data: QuoteProps[];
  currentSlide: number;
}

const data = [
  {
    id: 1,
    text: "“There is more treasure in books than in all the pirate’s loot on Treasure Island.”",
    author: "- Walt Disney",
  },
  {
    id: 2,
    text: "“You ain't seen nothing yet, and the best is yet to come.”",
    author: "- Michael Jackson",
  },
  {
    id: 3,
    text: "“The best way to find yourself is to lose yourself in the service of others.”",
    author: "- Mahatma Gandhi",
  },
  {
    id: 4,
    text: "“I don't mind people hating me, because it pushes me.”",
    author: "- Cristiano Ronaldo",
  },
];

function Today(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="text-white bg-quote py-8 px-6 rounded-sidebar">
      <Slider data={data} currentSlide={currentSlide} />
      <SliderDots
        data={data}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default Today;
