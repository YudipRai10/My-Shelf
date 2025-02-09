export const currentDate = () => {
  const date = new Date().getDate();
  return date;
};

export const currentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month;
};

export const currentYear = () => {
  const year = new Date().getFullYear();
  return year;
};
