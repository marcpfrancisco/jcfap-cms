import { ImageOff } from "lucide-react";
import Image from "next/image";
import React from "react";

export type FAQContentFragmentProps = {
  index: number;
  text: string;
  obj?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    title?: string;
    height?: number;
    width?: number;
    src?: string;
  };
  type?: string;
};

const FAQContentFragment: React.FC<FAQContentFragmentProps> = ({
  index,
  text,
  obj,
  type,
}) => {
  const formatText = (text: string, obj?: FAQContentFragmentProps["obj"]) => {
    if (!obj) return text;

    let formattedText: JSX.Element | string = text;

    if (obj.bold) formattedText = <b>{formattedText}</b>;
    if (obj.italic) formattedText = <em>{formattedText}</em>;
    if (obj.underline) formattedText = <u>{formattedText}</u>;

    return formattedText;
  };

  const formattedText = formatText(text, obj);

  switch (type) {
    case "heading-two":
      return (
        <h2 key={index} className="text-2xl text-gray-700 font-semibold mb-4">
          {formattedText}
        </h2>
      );
    case "heading-three":
      return (
        <h3 key={index} className="text-xl font-semibold mb-4">
          {formattedText}
        </h3>
      );
    case "heading-four":
      return (
        <h4 key={index} className="text-md font-semibold mb-4">
          {formattedText}
        </h4>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8 indent-10">
          {formattedText}
        </p>
      );
    case "image":
      return obj?.src ? (
        <Image
          key={index}
          alt={obj.title || "Image"}
          height={obj.height}
          width={obj.width}
          src={obj.src}
          className="my-4"
        />
      ) : (
        // Display broken image icon if image failed to load
        <div className="place-self-center mt-8 mb-8">
          <ImageOff width={60} height={60} color="#ff4dc6" />
        </div>
      );
    default:
      return <span key={index}>{formattedText}</span>;
  }
};

export default FAQContentFragment;
