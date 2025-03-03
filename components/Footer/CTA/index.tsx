"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTA = () => {
  const path = usePathname();
  const isNotContactPage = path !== "/contact";
  return (
    <section className={`container ${isNotContactPage ? "block" : "hidden"}`}>
      <div className="callout bg-yellow-100 p-8 md:p-16 rounded-md transform translate-y-20">
        <div className="grid md:grid-cols-[1fr_auto] items-center">
          <div className="callout-content text-center md:text-left">
            <h2 className="callout-heading text-white font-bold text-2xl mb-2">
              Ready to get started?
            </h2>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus quo vitae magnam quisquam facere temporibus ducimus.
              Molestias explicabo nostrum aperiam.
            </p>
          </div>

          <Link href="/contact">
            <button className="btn-connect !bg-black-300 !text-white !px-[6rem] !rounded-[4rem] h-12">
              <p>Let&apos;s connect </p>
              <MoveRight width={14} height={10} className="icon ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
