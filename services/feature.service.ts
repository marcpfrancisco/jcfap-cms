import {
  FeatureNode,
  FeatureQueryResult,
  ShowcaseNode,
  ShowcaseQueryResult,
} from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getFeatures = async (): Promise<FeatureNode[]> => {
  const query = gql`
    query GetFeatures {
      featuresConnection {
        edges {
          node {
            title
            description
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  try {
    const result: FeatureQueryResult = await request(graphqlAPI, query);

    return result.featuresConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching features:", error);
    return [];
  }
};

export const getShowcases = async (): Promise<ShowcaseNode[]> => {
  const query = gql`
    query GetShowcases {
      showcasesConnection {
        edges {
          node {
            title
            description
            image {
              url
            }
            checklist
          }
        }
      }
    }
  `;

  try {
    const result: ShowcaseQueryResult = await request(graphqlAPI, query);

    return result.showcasesConnection.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching showcases:", error);
    return [];
  }
};
