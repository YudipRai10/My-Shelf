import { useEffect, useState } from "react";

export const UseDateSelector = () => {
  const today = new Date();
  const submitDate = today.getDate();
  const submitMonth = today.getMonth() + 1; // Months are 0-indexed
  const submitYear = today.getFullYear();

  const [selectedDate, setSelectedDate] = useState<number>(submitDate);
  const [selectedMonth, setSelectedMonth] = useState<number>(submitMonth);
  const [selectedYear, setSelectedYear] = useState<number>(submitYear);

  // Determine the number of days in a month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  // Update days list based on the selected month and year
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  useEffect(() => {
    const days = Array.from(
      { length: getDaysInMonth(selectedMonth, selectedYear) },
      (_, i) => i + 1
    );

    setDaysInMonth(days);

    // If new month does not have the same number of days as the previous month
    if (selectedDate > getDaysInMonth(selectedMonth, selectedYear)) {
      setSelectedDate(1);
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  // Filtered days: If the current month and year are selected, hide past days
  const filteredDays = daysInMonth.filter((day) => {
    if (selectedMonth === submitMonth && selectedYear === submitYear) {
      return day >= submitDate; // Show days equal to or after today's day
    }
    return true; // Show all days for other months or years
  });

  // Filtered months: If the current year is selected, hide months before the current month
  const filteredMonths = Array.from({ length: 12 }, (_, i) => i + 1).filter(
    (month) => selectedYear > submitYear || month >= submitMonth
  );

  // Filtered years: Hide years before the current year
  const filteredYears = Array.from({ length: 20 }, (_, i) => submitYear + i);

  return {
    selectedDate,
    setSelectedDate,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    filteredDays, // Return filtered days
    filteredMonths, // Return filtered months
    filteredYears, // Return filtered years
    submitYear,
    submitMonth,
    submitDate,
  };
};
