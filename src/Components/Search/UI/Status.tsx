import React from "react";
import { LocationIcon, UserIcon } from "../../ui/svg/Svg";

interface StatusProps {
  status: "In-shelf" | "Borrowed";
  id: number;
  location: string;
}

function Status({ status, location }: StatusProps): React.ReactElement {
  return (
    <div className="flex gap-24">
      {/* Status */}
      <div className="flex flex-col gap-3">
        <div className="bg-status py-1 w-24 text-center rounded shadow-low text-white text-base">
          {status}
        </div>
        <div className="flex items-center gap-1.5">
          {status === "In-shelf" ? <UserIcon /> : <LocationIcon />}

          <p className="text-base text-primary">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default Status;
