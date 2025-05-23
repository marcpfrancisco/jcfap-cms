import { graphQLClient } from "@/utils";
import { gql } from "graphql-request";
import { NextResponse } from "next/server";

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a function for API route to work
export async function POST(req: Request) {
  const { name, email, comment, slug } = await req.json(); // Get the body data

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name,
      email,
      comment,
      slug,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error submitting comment", error);
    return NextResponse.json(
      { error: "Error submitting comment" },
      { status: 500 }
    );
  }
}
