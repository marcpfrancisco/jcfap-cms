import { NextResponse } from "next/server";
import { gql } from "graphql-request";
import { graphQLClient } from "@/utils";

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a function for API route to work
export async function POST(req: Request) {
  const { name, subject, email, message } = await req.json(); // Get the body data

  const query = gql`
    mutation CreateContact(
      $name: String!
      $subject: String!
      $email: String!
      $message: String!
    ) {
      createContact(
        data: {
          name: $name
          subject: $subject
          email: $email
          message: $message
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, {
      name,
      subject,
      email,
      message,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Error submitting contact form", error);
    return NextResponse.json(
      { error: "Error submitting contact form" },
      { status: 500 }
    );
  }
}
