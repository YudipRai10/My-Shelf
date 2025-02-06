import React from "react";
import { LeftArrow } from "../ui/svg/Svg";
import { useNavigate } from "react-router-dom";

export const GoBack: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-5">
        <LeftArrow />
        <span
          className="text-base text-primary tracking-wide cursor-pointer hover:scale-105"
          onClick={() => navigate("/search")}
        >
          Back to results
        </span>
      </div>
    </div>
  );
};
