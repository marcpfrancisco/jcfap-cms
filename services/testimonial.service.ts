import { TestimonialNode, TestimonialQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getTestimonials = async (): Promise<TestimonialNode[]> => {
  const query = gql`
    query GetTestimonials {
      testimonialsConnection {
        edges {
          node {
            author {
              name
            }
            quote
            title
          }
        }
      }
    }
  `;

  try {
    const result: TestimonialQueryResult = await request(graphqlAPI, query);

    return result.testimonialsConnection.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
