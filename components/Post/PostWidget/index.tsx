import { getRecentPosts, getRelatedPosts } from "@/services";
import { CategoryNode } from "@/types";
import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const PostWidget = async ({
  categories = [],
  slug,
}: {
  categories?: CategoryNode[];
  slug?: string;
}) => {
  const posts = slug
    ? await getRelatedPosts(slug, categories)
    : await getRecentPosts();

  return (
    <div className="shadow-lg rounded-lg pb-12 mb-8 p-4">
      <h2 className="text-normal border-b mb-8 pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h2>

      {posts?.map((post) => (
        <div className="pt-4 flex flex-col w-full mb-4" key={post?.title}>
          <div className="relative w-full h-[75px] mb-2">
            <Image
              src={post?.featuredImage?.url}
              alt={post?.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="300px"
            />
          </div>

          <div className="flex-row">
            <p className="text-gray-500 font-xs">
              {formatDate(post?.createdAt)}
            </p>
            <Link href={`/blog/${post?.slug}`} key={post?.title}>
              <p className="text-md transition duration-400 hover:text-yellow-100 hover:underline">
                {post?.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
