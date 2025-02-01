import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sortByYear(array, type) {
  return [...array].sort((a, b) => {
    const [dayA, monthA, yearA] = a.year.split(".").map(Number);
    const [dayB, monthB, yearB] = b.year.split(".").map(Number);

    if (yearA !== yearB && type === "inc") {
      return yearA - yearB;
    }
    if (monthA !== monthB && type === "inc") {
      return monthA - monthB;
    }
    if (type === "inc") {
      return dayA - dayB;
    } else {
      if (yearA !== yearB) {
        return yearB - yearA;
      }
      if (monthA !== monthB) {
        return monthB - monthA;
      }
      return dayB - dayA;
    }
  });
}

export function takeYears(array) {
  const emptyArray = [];
  array.forEach((element) => {
    const year = element.year.split(".")[2];
    emptyArray.push(year);
  });

  const result = Array.from(new Set(emptyArray));
  return result;
}
