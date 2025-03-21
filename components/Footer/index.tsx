"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavigationNode } from "@/types";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = ({ routes }: { routes: NavigationNode[] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="container h-[50rem] md:h-[25rem] py-[5rem] lg:py-[6rem] px-4 grid md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger>
            <h2 className="text-xl font-bold">Site Map</h2>
          </CollapsibleTrigger>
          <CollapsibleContent className="text-gray-300 cursor-pointer">
            <ul className="flex flex-col">
              {routes?.map((route) => (
                <li
                  key={route.title}
                  className="border-b border-gray-700 last:border-b-0 sm:border-0"
                >
                  <Link
                    href={route.link}
                    className="text-gray-300 hover:text-white block py-2"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <section className="flex flex-col space-y-4">
          <div className="flex items-center">
            <MapPin width={32} height={32} color="#FCDA05" className="mr-4" />
            <p className="text-gray-300">
              Unit 603, Cityland 10 Tower 1 <br />
              H.V. Dela Costa Street, Salcedo Village Bel-air <br />
              Makati City, NCR <br />
              Philippines, 1209
            </p>
          </div>

          <div className="flex items-center">
            <Mail width={30} height={30} color="#FCDA05" className="mr-4" />
            <p className="text-gray-300">email: secretariat@jcfap.org</p>
          </div>
        </section>

        <div className="md:-order-1 md:mt-[1rem] mt-[5rem] place-self-center md:place-self-start">
          <Link href="/">
            <Image
              width={230}
              height={100}
              style={{ width: "auto", height: "auto" }}
              className="max-w-[230px]"
              src="/assets/images/logo-alt.png"
              alt="Footer Brand"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
