export const getMonth = (date:Date) => {
  return date.toLocaleString("en-us", { month: "long" });
};

export const getDay = (date:Date) => {
  return date.getDay();
};

export const getYear = (date:Date) => {
  return date.getFullYear();
};

export const customDateformatted = (d:string) => {
  const date = new Date(d);
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  return `${month} ${day}, ${year}`;
};