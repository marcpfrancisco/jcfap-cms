// Function to convert a string to slug format
export const slugify = (title: string) => {
  return title
    .toString()
    .toLowerCase()
    .replace(/ /g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove all non-word characters except hyphens
};
