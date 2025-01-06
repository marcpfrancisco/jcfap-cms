import { ImageOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    href?: string; // For links
    type?: string; // For links
    className?: string;
    openInNewTab?: boolean;
  };
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block: any;
};

const FAQContentFragment: React.FC<FAQContentFragmentProps> = ({
  index,
  text,
  obj,
  type,
  block,
}) => {
  const formatText = (
    text: string,
    obj?: FAQContentFragmentProps["obj"]
  ): JSX.Element | string => {
    if (!obj) return text;

    let formattedText: JSX.Element | string = text || "";

    if (obj.bold) formattedText = <strong>{formattedText}</strong>;
    if (obj.italic) formattedText = <em>{formattedText}</em>;
    if (obj.underline) formattedText = <u>{formattedText}</u>;

    // Handle links
    if (obj.type === "link" && obj.href) {
      formattedText = (
        <Link
          href={obj.href}
          className={obj.className || "text-blue-500 underline"}
          target={obj.openInNewTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
        >
          {formattedText}
        </Link>
      );
    }

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
        <p key={index} className="mb-8 indent-10 text-lg text-gray-600">
          {formattedText}
        </p>
      );
    case "image":
      return block?.src ? (
        <Image
          key={index}
          alt={block.title || "Image"}
          height={block.height}
          width={block.width}
          src={block.src}
          className="my-4"
        />
      ) : (
        // Display broken image icon if image failed to load
        <div className="place-self-center mt-8 mb-8">
          <ImageOff width={60} height={60} color="#ff4dc6" />
        </div>
      );
    default:
      return <span key={index}>{formatText(text, obj)}</span>;
  }
};

export default FAQContentFragment;
