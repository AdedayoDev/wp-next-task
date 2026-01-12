import "server-only";
import { gql, GraphQLClient } from "graphql-request";

const baseURL = process.env.WORDPRESS_URL;

if (!baseURL) {
  throw new Error("WORDPRESS_URL is not defined in .env.local");
}

const client = new GraphQLClient(`${baseURL}/graphql`);

export const getPosts = async () => {
  try {
    const query = gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            content
          }
        }
      }
    `;

    const data = await client.request(query);
    return data.posts?.nodes ?? [];
  } catch (error) {
    console.error("GraphQL error:", error);
    return []; // graceful fallback
  }
};
