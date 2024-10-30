import { PostNode } from "@/types";
import { formatDate, slugify } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MoveRight } from "lucide-react";

const PostCard = ({ post }: { post: PostNode }) => {
  const slug = slugify(post.title);

  return (
    <div className="space-y-4 shadow-lg rounded-lg pb-12 mb-8 p-4">
      {/* Blog Post Title */}
      <Link href={`/blog/${slug}`} passHref>
        <h2 className="transition duration-500 text-2xl font-semibold text-gray-900 cursor-pointer hover:underline hover:text-yellow-100 whitespace-pre-line leading-7">
          {post?.title}
        </h2>
      </Link>

      {/* Date Created and Tags */}
      <div className="flex items-center text-sm text-gray-500">
        <div className="flex flex-row items-center mr-4">
          <CalendarDays size={24} height={24} color="#f3398a" />
          <span className="ml-2">{formatDate(post?.createdAt)}</span>
        </div>
        <div className="flex space-x-2">
          {post?.categories?.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs"
            >
              {category?.name}
            </span>
          ))}
        </div>
      </div>

      {/* Image Cover */}
      <div className="relative w-full h-[195px]">
        <Image
          src={post?.featuredImage?.url}
          alt={post?.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded-md"
        />
      </div>

      {/* Description */}
      <p className="text-gray-700">{post?.excerpt}</p>

      <div className="flex flex-row items-center ">
        <Image
          src={post?.author?.photo?.url}
          alt={post?.author?.name}
          width={30}
          height={30}
        />

        <p className="ml-2">{post?.author?.name}</p>
      </div>

      {/* Continue Reading */}
      <Link href={`/blog/${slug}`} passHref>
        <button className="mt-4 py-2 text-yellow-100 rounded-md text-sm hover:text-yellow-400 flex flex-row items-center justify-center cursor-pointer">
          Continue Reading
          <MoveRight width={14} height={10} className="icon ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default PostCard;
