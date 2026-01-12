import "server-only";
import { gql, GraphQLClient } from "graphql-request";

const baseURL = process.env.WORDPRESS_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_URL is not defined");
}

const client = new GraphQLClient(`${baseURL}/graphql`);

export const getPosts = async () => {
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
  return data.posts.nodes;
};
