"use client";

import { useEffect, useState } from "react";
import { getNavigationLinks } from "@/services";
import { NavigationNode } from "@/types";

// Custom hook for fetching navigation routes
export const useNavigationRoutes = () => {
  const [routes, setRoutes] = useState<NavigationNode[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const navLinks = await getNavigationLinks();
        setRoutes(navLinks);
      } catch (err) {
        setError("Failed to fetch navigation links");
      }
    };

    fetchRoutes();
  }, []);

  return { routes, error };
};
