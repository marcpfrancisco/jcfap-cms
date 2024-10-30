import { CategoryNode, PostNode, PostQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getPosts = async (): Promise<PostNode[]> => {
  const query = gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const result: PostQueryResult = await request(graphqlAPI, query);

    return result.postsConnection.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPostDetails = async (
  slug: string
): Promise<PostNode | null> => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          json
        }
      }
    }
  `;

  try {
    const result: PostQueryResult = await request(graphqlAPI, query, { slug });
    return result.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

export const getRecentPosts = async (): Promise<PostNode[]> => {
  const query = gql`
    query GetRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result: PostQueryResult = await request(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getRelatedPosts = async (
  slug: string,
  categories: CategoryNode[]
): Promise<PostNode[]> => {
  const query = gql`
    query GetRelatedPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  try {
    const result: PostQueryResult = await request(graphqlAPI, query, {
      slug,
      categories: categories.map((category) => category.slug),
    });

    return result.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
