import React from "react";
import { CrossIcon, TickIcon } from "../../ui/svg/Svg";
import { Avail } from "../../../bookdata/book";

interface AvailabilityProps {
  availability: Avail;
}

function Availability({ availability }: AvailabilityProps): React.ReactElement {
  const availabilityList: (keyof Avail)[] = [
    "Hard Copy",
    "E-Book",
    "Audio Book",
  ];

  return (
    <ul className="text-base flex flex-col gap-2">
      {availabilityList.map((list) => (
        <li key={list} className="flex items-center gap-2">
          {availability[list] ? <TickIcon /> : <CrossIcon />}
          {list}
        </li>
      ))}
    </ul>
  );
}

export default Availability;
