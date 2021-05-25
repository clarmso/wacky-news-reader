export const formatDate = (date: string) => {
  const formattedDate = new Intl.DateTimeFormat("default", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(Date.parse(date));
  return formattedDate;
};
