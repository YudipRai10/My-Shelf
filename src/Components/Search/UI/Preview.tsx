import React from "react";
import { HeartBorderIcon, HeartIcon } from "../../ui/svg/Svg";
import { useNavigate } from "react-router-dom";

interface PreviewProps {
  id: number;
  status: "In-shelf" | "Borrowed";
}

export const Preview: React.FC<PreviewProps> = ({ status, id }) => {
  const navigate = useNavigate();
  const handlePreview = (id: number) => {
    navigate(`/book/${id}`);
  };
  return (
    <div className="flex justify-center items-center gap-16 flex-grow">
      {status === "In-shelf" ? <HeartIcon /> : <HeartBorderIcon />}

      <button
        onClick={() => handlePreview(id)}
        className="border border-preview text-preview text-base px-3 py-1.5 rounded hover:bg-preview hover:text-white transition-colors duration-300 ease-in-out"
      >
        Preview
      </button>
    </div>
  );
};
