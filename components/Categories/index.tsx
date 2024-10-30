import { getCategories } from "@/services";
import { CategoryNode } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryWidget = async () => {
  const categories: CategoryNode[] = (await getCategories()) || [];

  return (
    <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
      <h2 className="text-normal border-b mb-8 pb-4">Categories</h2>
      {categories?.map((category, index) => (
        <Link key={category?.slug} href={`/category/${category?.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryWidget;
