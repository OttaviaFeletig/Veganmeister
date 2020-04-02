import { gql } from "apollo-server";

export default gql`
  scalar Date

  type Post {
    _id: ID!
    date: Date!
    restaurant: Restaurant!
    mainPicture: String!
    images: [String!]!
    author: String! #Author definition
    likes: Int!
    title: String!
    postSections: [PostSection!]!
    hashtags: [String!]!
    comments: [Comment!] #Comment definition
    published: Boolean!
    archived: Boolean!
    rating: Int!
  }

  type PostSection {
    index: Int!
    header: String!
    body: String!
    img: String!
    sideImg: Boolean!
  }

  type Comment {
    _id: ID!
    date: Date!
    user: String! #user definition
    body: String!
    likes: Int!
    likedBy: [String!]! #user definition
  }
  extend type Query {
    posts: [Post!]!
    post(_id: ID!): Post!
  }
`;
