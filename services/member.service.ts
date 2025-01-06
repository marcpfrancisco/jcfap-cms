import { Member, MemberQueryResult } from "@/types";
import { graphqlAPI } from "@/utils";
import { request, gql } from "graphql-request";

export const getTeamMembers = async (): Promise<Member[]> => {
  const query = gql`
    query GetTeamMembers {
      members(first: 20) {
        id
        name
        image {
          url
        }
        position
      }
    }
  `;

  try {
    const result: MemberQueryResult = await request(graphqlAPI, query);

    return result.members.map((member: any) => member);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};
