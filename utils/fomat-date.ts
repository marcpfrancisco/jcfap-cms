import { DateTime } from "luxon";

// Function to convert a slug back to title format
export const formatDate = (date: string) => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
};
