import React from "react";
import {
  currentDate,
  currentMonth,
  currentYear,
} from "../../../utils/dateUtils";
import caret from "../../../assets/caret.png";

export const TodayDate: React.FC = () => {
  // Fixed today's date
  const date = currentDate();
  const month = currentMonth();
  const year = currentYear();

  return (
    <div className="mb-9">
      <p className="font-medium text-base mb-6">From</p>

      <div className="text-primary flex items-center gap-5">
        <div className="flex gap-6 items-center opacity-50 bg-secondary rounded-md px-2.5 py-3">
          <p className="font-bold text-base">{String(date).padStart(2, "0")}</p>
          <img src={caret} alt="caret" />
        </div>
        <div className="flex gap-6 items-center opacity-50 bg-secondary rounded-md px-2.5 py-3">
          <p className="font-bold text-base">
            {String(month).padStart(2, "0")}
          </p>
          <img src={caret} alt="caret" />
        </div>
        <div className="flex gap-6 items-center opacity-50 bg-secondary rounded-md px-2.5 py-3">
          <p className="font-bold text-base">{year}</p>
          <img src={caret} alt="caret" />
        </div>
      </div>
    </div>
  );
};
