"use client";

import { useNavigationScroll } from "@/hooks";
import { NavigationNode } from "@/types";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderMobileNav from "./MobileNav";
import HeaderNav from "./Nav";

const Navbar = ({ routes }: { routes: NavigationNode[] }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isVisible, scrolledPast } = useNavigationScroll();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const pathName = usePathname();
  // Function to determine if the current path is a blog details page
  const isBlogDetailsPage =
    pathName.startsWith("/blog/") && pathName.split("/").length === 3;

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 py-8 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrolledPast ? "bg-white shadow-md" : "bg-transparent"}
        ${isBlogDetailsPage ? "bg-white  border-b-2" : "bg-transparent b-none"}
        `}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between h-10 px-4">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="sm:flex sm:flex-row sm:items-center">
                <Image
                  src="/assets/images/logo.png" // Adjust path based on your logo
                  alt="Logo"
                  width={80}
                  height={80}
                />
                <h2
                  className={`text-4xl font-bold hidden md:block ml-4 ${
                    scrolledPast ? "text-gray-900" : "text-gray-50"
                  }
                  ${isBlogDetailsPage ? "text-gray-900" : "text-gray-50"}
                  `}
                >
                  JCFAP
                </h2>
              </Link>
            </div>
            {/* Desktop Links */}
            <HeaderNav
              routes={routes}
              scrolledPast={scrolledPast}
              isBlogDetailsPage={isBlogDetailsPage}
            />
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      scrolledPast
                        ? "text-gray-900"
                        : isMenuOpen
                        ? "text-gray-50"
                        : "text-gray-900"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      scrolledPast && isBlogDetailsPage
                        ? "text-gray-700"
                        : "text-gray-50"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Component */}
      <HeaderMobileNav
        routes={routes}
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrolledPast={scrolledPast}
      />
    </>
  );
};

export default Navbar;
