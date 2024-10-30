import { Author } from "./author";
import { CategoryNode } from "./category";
import { FeaturedImage } from "./featuredImage";

export interface PostNode {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  content: { json: Record<any, any> };
  featuredImage: FeaturedImage;
  categories: CategoryNode[];
}

export interface PostEdge {
  node: PostNode;
}

export interface PostsConnection {
  edges: PostEdge[];
}

export interface PostQueryResult {
  postsConnection: PostsConnection;
  posts: PostNode[];
  post: PostNode;
}
