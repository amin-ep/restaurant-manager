import { format, formatDistanceToNow } from "date-fns";

export const calculateDiscountPercentage: (
  price: number,
  discount: number
) => number | string = (price, discount) => {
  const discountPercentage = ((discount * 100) / price).toFixed(0);
  if (Number(discountPercentage) == 0) {
    return "-";
  } else {
    return `%${discountPercentage}`;
  }
};

export const calculatePastTime = (date: string): string => {
  const currentTime = Date.now();

  const pastDays = Math.floor(
    (currentTime - Date.parse(date)) / (1000 * 60 * 60 * 24)
  );

  if (pastDays < 1) return `today at ${format(date, "HH:MM")}`;
  if (pastDays > 1) return formatDistanceToNow(date, { addSuffix: true });
  if (pastDays === 1) return "yesterday";
  if (pastDays < 7) return `${pastDays} days ago`;
  if (pastDays < 14) return "last week";
  if (pastDays < 21) return "two weeks ago";
  if (pastDays < 30) return `${Math.floor(pastDays / 7)} weeks ago`;

  return format(date, "MMM d, yyyy");
};

export const formateRatingsAverage = (ratingsAverage: number) => {
  if (ratingsAverage) {
    if (Number.isInteger(ratingsAverage)) {
      return ratingsAverage;
    } else {
      return ratingsAverage.toFixed(1);
    }
  }
};
