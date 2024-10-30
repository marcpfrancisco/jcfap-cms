import { NavigationNode } from "@/types";
import Link from "next/link";
import React from "react";

interface HeaderNavProps {
  routes: NavigationNode[];
  scrolledPast: boolean;
  isBlogDetailsPage: boolean;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  routes,
  scrolledPast,
  isBlogDetailsPage,
}) => {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      {routes?.map((route) => (
        <Link
          key={route.title}
          href={route.link}
          className={`font-bold ${
            scrolledPast || isBlogDetailsPage ? "text-gray-900" : "text-gray-50"
          }`}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderNav;
