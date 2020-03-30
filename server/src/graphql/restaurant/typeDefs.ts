import { gql } from "apollo-server";

export default gql`
  type Restaurant {
    id: ID!
    name: String!
    description: String!
    location: String #Location definition
    images: [String]!
  }
  extend type Query {
    restaurants: [Restaurant!]!
    restaurant(id: ID!): Restaurant!
  }
`;
