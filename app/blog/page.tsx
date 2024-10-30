import CategoryWidget from "@/components/Categories";
import Hero from "@/components/Hero";
import PostList from "@/components/Post/PostList";
import PostWidget from "@/components/Post/PostWidget";
import { getPosts } from "@/services";
import { PostNode } from "@/types";

const blogHero = {
  title: "JCFAP Blog",
  description:
    "Industry insights and business challenges that we're helping clients explore, navigate and succeed in.",
};

const Blog = async () => {
  // Fetch initial posts directly in the server component
  const posts: PostNode[] = (await getPosts()) || [];

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Hero title={blogHero.title} description={blogHero.description} />

      <main className="flex-grow">
        <div className="container mx-auto py-8">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Blog Posts (Scrollable) */}
            <div className="col-span-1 lg:col-span-8 space-y-4">
              {/* Infinite scroll component */}
              <PostList initialPosts={posts} />
            </div>

            {/* Right Column: Featured Section (Fixed) */}
            <div className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-20">
                <PostWidget />
                <CategoryWidget />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
