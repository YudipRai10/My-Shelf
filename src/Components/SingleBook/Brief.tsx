import React from "react";

const Brief: React.FC = () => {
  return (
    <div className="text-xs max-w-5xl">
      <p className="text-list">
        Previews available in:{" "}
        <span className="underline text-highlight">English</span>
      </p>
      <p className="py-3  text-feature">
        Since Don’t Make Me Think was first published in 2000, hundreds of
        thousands of Web designers and developers have relied on usability guru
        Steve Krug’s guide to help them understand the principles of intuitive
        navigation and information design. Witty, commonsensical, and eminently
        practical, it’s one of the best-loved and most...{" "}
        <span className="text-highlight">Read more</span>
      </p>
    </div>
  );
};

export default Brief;
