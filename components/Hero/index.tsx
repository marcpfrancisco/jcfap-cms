"use client";

import { usePathname } from "next/navigation";
import { Card } from "../Card";

const defaultHero = {
  title: `Be the Difference. Experience JCFAP.`,
  description: `Founded in June 2006, JCFAP is the national umbrella organization for associations of college students in finance or financial management`,
};

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const pathName = usePathname();

  const isHomePage = pathName === "/";
  const heroTitle = isHomePage ? defaultHero.title : title;
  const heroDescription = isHomePage ? defaultHero.description : description;
  return (
    <section className="py-[10rem] px-4 w-full hero">
      <div className="max-w-7xl mx-auto h-[30rem] flex flex-col md:flex-row justify-between items-center">
        {/* Left Column: Text Content */}
        <div className="max-w-[35rem] py-4 text-center md:text-justify">
          <h1 className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line">
            {heroTitle}
          </h1>
          <p className="mt-4 text-white font-normal">{heroDescription}</p>
        </div>

        {/* Right Column: Image and Card */}
        {isHomePage && (
          <div className="py-4">
            <Card />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
