import React from "react";
import {
  HeartBorderIcon,
  HeartIcon,
  LocationIcon,
  UserIcon,
} from "../../ui/svg/Svg";
import { useNavigate } from "react-router-dom";

interface StatusProps {
  status: "In-shelf" | "Borrowed";
  id: number;
  location: string;
}

function Status({ status, id, location }: StatusProps): React.ReactElement {
  const navigate = useNavigate();

  const handlePreview = (id: number) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="flex gap-24">
      {/* Status */}
      <div className="flex flex-col gap-3">
        <div className="bg-status py-1 w-20 text-center rounded shadow-low text-white text-base">
          {status}
        </div>
        <div className="flex items-center gap-1.5">
          {status === "In-shelf" ? <UserIcon /> : <LocationIcon />}

          <p className="text-base text-primary">{location}</p>
        </div>
      </div>

      {/* Preview */}
      <div className="flex justify-center items-center gap-16 flex-grow">
        {status === "In-shelf" ? <HeartIcon /> : <HeartBorderIcon />}

        <button
          onClick={() => handlePreview(id)}
          className="border border-preview text-preview text-base px-3 py-1.5 rounded"
        >
          Preview
        </button>
      </div>
    </div>
  );
}

export default Status;
