import React, { useContext } from "react";
import { LocationIcon, UserIcon } from "../../ui/svg/Svg";
import { BookContext } from "../../../Context/Context";

interface StatusProps {
  status: "In-shelf" | "Borrowed";
  id: number;
  location: string;
}

function Status({ status, location, id }: StatusProps): React.ReactElement {
  const { booksSaved } = useContext(BookContext);

  // To change the status if borrowed
  const book = booksSaved.find((book) => book.id === id);

  const currentStatus = book ? book.status : status;
  const currentLocation = book ? book.location : location;

  return (
    <div className="flex gap-24">
      {/* Status */}
      <div className="flex flex-col gap-3">
        <div className="bg-status py-1 w-24 text-center rounded shadow-low text-white text-base">
          {currentStatus}
        </div>
        <div className="flex items-center gap-1.5">
          {currentStatus === "In-shelf" ? <UserIcon /> : <LocationIcon />}

          <p className="text-base text-primary">{currentLocation}</p>
        </div>
      </div>
    </div>
  );
}

export default Status;
