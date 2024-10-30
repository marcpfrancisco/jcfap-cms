import { NavigationNode, NavigationQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { request, gql } from "graphql-request";

export const getNavigationLinks = async (): Promise<NavigationNode[]> => {
  const query = gql`
    query MyQuery {
      navigationsConnection {
        edges {
          node {
            title
            link
          }
        }
      }
    }
  `;

  try {
    const result: NavigationQueryResult = await request(graphqlAPI, query);

    return result.navigationsConnection.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("Error fetching navigation links:", error);
    return [];
  }
};
