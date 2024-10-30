import { FeatureNode } from "@/types";
import Image from "next/image";
import React from "react";

const FeatureBlock = ({ features }: { features: FeatureNode[] }) => {
  return (
    <>
      {features?.map((feature, index) => (
        <article
          key={index}
          className="feature block sm:grid sm:grid-cols-2 px-4 sm:px-0"
        >
          <div className="feature__content">
            <h3 className="text-black-100 font-bold text-lg">
              {feature?.title}
            </h3>
            <p className="text-base">{feature?.description}</p>
          </div>

          <Image
            className="feature__img rounded-xl"
            width={700}
            height={470}
            src={feature?.featuredImage?.url}
            alt={feature?.title}
          />
        </article>
      ))}
    </>
  );
};

export default FeatureBlock;
