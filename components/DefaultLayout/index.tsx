import Navbar from "@/components/Header";
import React from "react";

import { NavigationNode } from "@/types";
import Footer from "../Footer";

const DefaultLayout = ({
  classsName,
  children,
  routes,
}: {
  classsName: string;
  children: React.ReactNode;
  routes: NavigationNode[];
}) => {
  return (
    <div className={classsName}>
      <div className="min-h-screen">
        <header className="relative">
          <Navbar routes={routes} />
        </header>

        <main>{children}</main>

        <footer className="mt-auto w-full">
          <Footer routes={routes} />
        </footer>
      </div>
    </div>
  );
};

export default DefaultLayout;
