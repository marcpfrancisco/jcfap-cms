import { FAQNode, FAQQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getFAQs = async (): Promise<FAQNode[]> => {
  const query = gql`
    query GetFeatures {
      faqsConnection {
        edges {
          node {
            title
            content {
              json
            }
          }
        }
      }
    }
  `;

  try {
    const result: FAQQueryResult = await request(graphqlAPI, query);

    return result.faqsConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
};
