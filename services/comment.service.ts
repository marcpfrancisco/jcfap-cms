import { CommentQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const submitComment = async (obj: any) => {
  const result = await fetch("/api/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  try {
    const result: CommentQueryResult = await request(graphqlAPI, query, {
      slug,
    });

    return result.comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
