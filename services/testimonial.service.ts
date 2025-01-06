import { Testimonial, TestimonialQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const query = gql`
    query GetTestimonials {
      testimonials {
        id
        member {
          id
          name
          position
          image {
            url
          }
        }
        quote
      }
    }
  `;

  try {
    const result: TestimonialQueryResult = await request(graphqlAPI, query);

    return result.testimonials.map((testimonial: any) => testimonial);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
