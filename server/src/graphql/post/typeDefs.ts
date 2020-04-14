import { gql } from "apollo-server";

export default gql`
  scalar Date

  type Post {
    id: ID!
    date: Date!
    restaurant: Restaurant!
    mainPicture: String!
    pictures: [String!]!
    author: User
    likes: Int!
    title: String!
    postSections: [PostSection!]!
    hashtags: [String!]!
    comments: [Comment]
    published: Boolean!
    archived: Boolean!
    rating: Int!
  }

  type PostSection {
    indexSection: Int!
    header: String!
    body: String!
    img: String!
    sideImg: Boolean!
  }

  type Comment {
    id: ID!
    dateC: Date!
    user: User!
    bodyC: String!
    likes: Int!
    likedBy: [User!]!
  }

  input PostInput {
    id: ID
    date: Date
    restaurant: RestaurantInput!
    mainPicture: String!
    pictures: [String!]!
    author: UserInput!
    likes: Int
    title: String!
    postSections: [PostSectionInput!]!
    hashtags: [String!]!
    comments: [CommentInput]
    published: Boolean!
    archived: Boolean!
    rating: Int
  }

  input PostSectionInput {
    indexSection: Int!
    header: String!
    body: String!
    img: String!
    sideImg: Boolean!
  }

  input CommentInput {
    id: ID!
    dateC: Date!
    user: UserInput!
    bodyC: String!
    likes: Int!
    likedBy: [UserInput!]!
  }

  extend type Query {
    posts: [Post!]!
    post(id: ID!): Post!
  }
  extend type Mutation {
    addPost(input: PostInput): Post
  }
`;
