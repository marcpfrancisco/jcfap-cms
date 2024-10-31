"use client";

import { useEffect, useState } from "react";
import { NavigationNode } from "@/types";
import { getNavigationLinks } from "@/services/navigation.service";
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

  return (
    <DefaultLayout
      classsName="w-full min-h-screen flex flex-col relative"
      routes={routes}
    >
      {children}
    </DefaultLayout>
  );
}
