import Author from "@/components/Author";
import { PostNode } from "@/types";
import { formatDate } from "@/utils";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import React from "react";
import PostContentFragment from "../PostContentFragment";

const PostDetails = async ({ post }: { post: PostNode | null }) => {
  const createdAt = formatDate(post?.createdAt || "");

  return (
    <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
      <div className="flex flex-row items-center">
        {post?.featuredImage?.url ? (
          <Image
            src={post.featuredImage.url}
            alt={post.title || "Post image"}
            width={800}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        ) : (
          // Display broken image icon if image failed to load
          <span>
            <ImageOff width={60} height={60} color="#ff4dc6" />
          </span>
        )}
      </div>

      <div className="heading mt-8 mb-4">
        <h1 className="title text-lg lg:text-3xl text-center lg:text-left font-bold text-gray-900">
          {post?.title}
        </h1>
      </div>

      <div>
        <div className="flex flex-row items-center justify-center">
          {post?.author?.photo ? (
            <Image
              src={post?.author?.photo?.url}
              alt={post?.author?.name}
              width={30}
              height={30}
            />
          ) : null}

          <span className="ml-2">
            {post?.author ? <Author author={post?.author} /> : "No Author"}
          </span>

          <span className="date ml-2">{createdAt}</span>
        </div>

        <div className="content mt-8">
          {post?.content?.json?.children?.map(
            (block: { children: any[]; type: string }, blockIndex: number) => (
              <React.Fragment key={blockIndex}>
                {block.children.map((child, childIndex) => (
                  <PostContentFragment
                    key={childIndex}
                    index={childIndex}
                    text={child.text || ""}
                    obj={child}
                    type={block.type}
                    block={block}
                  />
                ))}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
