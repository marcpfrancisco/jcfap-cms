import CategoryWidget from "@/components/Categories";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/Comments/CommentsForm";
import PostDetails from "@/components/Post/PostDetails";
import PostWidget from "@/components/Post/PostWidget";
import { getCategories, getPostDetails } from "@/services";
import { CategoryNode, PostNode } from "@/types";

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post: PostNode | null = (await getPostDetails(slug)) || null;
  // const relatedPosts: PostNode[] = (await getRelatedPosts(slug)) || [];
  const categories: CategoryNode[] = (await getCategories()) || [];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <main className="py-[100px] flex-grow">
        <div className="mx-auto container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8 px-4 lg:px-0">
              <PostDetails post={post} />
              <CommentsForm slug={slug} />
              <Comments slug={slug} />
            </div>

            {/* Right Column: Featured Section (Fixed) */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-20">
                <PostWidget slug={slug} categories={categories} />
                <CategoryWidget />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
