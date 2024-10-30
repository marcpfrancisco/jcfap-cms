import type { Author } from "@/types";
import React from "react";

const Author = ({ author }: { author: Author }) => {
  return <div>{author.name}</div>;
};

export default Author;
