import React from "react";

interface TitleProps {
  img: string;
  title: string;
  year: number;
  author: string;
  edition?: string;
}

function Title({
  img,
  title,
  year,
  author,
  edition,
}: TitleProps): React.ReactElement {
  return (
    <div className="flex items-center gap-12 ml-6">
      <img
        src={img}
        alt={title}
        className="object-contain w-search rounded-sm border border-cover"
      />
      <div className="py-3">
        <p className="text-lg tracking-wide mb-2">{title}</p>
        <p className="text-sm tracking-wide mb-1">
          {author}, {year}
        </p>
        <p className="text-xs">{edition}</p>
      </div>
    </div>
  );
}

export default Title;
