import { MobileMenuProps } from "@/types";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderMobileNav: React.FC<MobileMenuProps> = ({
  routes,
  isOpen,
  toggleMenu,
}) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black-300 transition-transform transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-between space-y-4 px-4 py-4">
        <div className="h-[80vh] flex flex-col items-center justify-center space-y-4">
          {routes?.map((route) => (
            <Link
              key={route.title}
              href={route.link}
              onClick={toggleMenu}
              className="font-bold text-gray-50"
            >
              {route.title}
            </Link>
          ))}
        </div>

        <a className="md:px-[6rem] btn btn--stretched flex flex-row items-center justify-self-center self-center md:justify-self-start md:mx-[2rem] text-black-300 font-semibold bg-yellow-100 rounded-[4rem] cursor-pointer">
          Let&apos;s connect{" "}
          <MoveRight width={14} height={10} className="icon ml-2" />
        </a>
      </div>
    </div>
  );
};

export default HeaderMobileNav;
