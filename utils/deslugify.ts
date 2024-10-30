// Function to convert a slug back to title format
export const deslugify = (slug: string | string[]) => {
  return slug
    .toString()
    .split("-") // Split slug by hyphen
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join words with space
};
