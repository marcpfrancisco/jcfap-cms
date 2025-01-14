"use client";

import { getNavigationLinks } from "@/services/navigation.service";
import { NavigationNode } from "@/types";
import AOS from "aos";
import { useEffect, useState } from "react";
import DefaultLayout from "./DefaultLayout";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routes, setRoutes] = useState<NavigationNode[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const data = await getNavigationLinks();
      setRoutes(data);
    };

    fetchRoutes();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DefaultLayout
      classsName="w-full min-h-screen flex flex-col relative"
      routes={routes}
    >
      {children}
    </DefaultLayout>
  );
}
