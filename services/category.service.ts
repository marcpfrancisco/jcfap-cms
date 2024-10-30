import { CategoryNode, CategoryQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { gql, request } from "graphql-request";

export const getCategories = async (): Promise<CategoryNode[]> => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  try {
    const result: CategoryQueryResult = await request(graphqlAPI, query);

    return result.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
