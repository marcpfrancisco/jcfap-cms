"use client";

import { useState, useEffect, useCallback } from "react";

export const useNavigationScroll = (scrollThreshold: number = 100) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolledPast, setScrolledPast] = useState(false);

  // useCallback ensures that the function reference doesn't change unless dependencies change
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    // Hide navbar when scrolling down, show when scrolling up
    if (
      currentScrollPos > prevScrollPos &&
      currentScrollPos > scrollThreshold
    ) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Change background when scrolling past a certain height
    setScrolledPast(currentScrollPos > scrollThreshold);

    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, scrollThreshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Include handleScroll in the dependency array

  return { isVisible, scrolledPast };
};
