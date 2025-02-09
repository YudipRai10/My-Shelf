import { useState } from "react";

export const UseDateToggle = () => {
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  // Handlers for toggling dropdowns
  const toggleDate = () => setShowDateDropdown(!showDateDropdown);
  const toggleMonth = () => setShowMonthDropdown(!showMonthDropdown);
  const toggleYear = () => setShowYearDropdown(!showYearDropdown);

  return {
    showDateDropdown,
    setShowDateDropdown,
    showMonthDropdown,
    setShowMonthDropdown,
    showYearDropdown,
    setShowYearDropdown,
    toggleDate,
    toggleMonth,
    toggleYear,
  };
};
