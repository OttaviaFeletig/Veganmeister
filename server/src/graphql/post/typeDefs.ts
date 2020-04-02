import { gql } from "apollo-server";

export default gql`
  scalar Date

  type Post {
    id: ID!
    date: Date!
    restaurant: Restaurant!
    mainPicture: String!
    images: [String!]!
    author: String! #Author definition
    likes: Int!
    title: String!
    body: String!
    hashtags: [String!]!
    comments: [Comment!] #Comment definition
    published: Boolean!
    archived: Boolean!
  }

  type Comment {
      
  }
  extend type Query {
    posts: [Post!]!
    post(id: ID!): Post!
  }
`;
