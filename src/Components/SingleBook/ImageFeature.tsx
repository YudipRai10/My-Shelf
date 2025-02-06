import React from "react";
import { NoteIcon, ReviewIcon, ShareIcon } from "../ui/svg/Svg";

interface FeatureProps {
  img: string;
  title: string;
}

export const ImageFeature: React.FC<FeatureProps> = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-8 px-8 py-6 rounded-10 bg-white">
      <img
        src={img}
        alt={title}
        className="object-contain w-52 border border-primary rounded-10"
      />
      <div className="flex justify-around font-bold text-feature text-xs leading-3">
        <div className="flex flex-col items-center cursor-pointer">
          <ReviewIcon />
          <p>Reviews</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <NoteIcon />
          <p>Notes</p>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};
