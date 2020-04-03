import { gql } from "apollo-server";

export default gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    surname: String!
    email: String!
    password: String!
    avatar: String!
    posts: [Post!]!
    rank: Rank!
    isAdmin: Boolean!
  }

  type Rank {
    name: RankNamesType
    points: RankPointsType
    logo: RankLogosType
  }

  enum RankNamesType {
    VeganMeisterName
    VeganApprenticeName
    VeganStudentName
    VeganCuriousName
    VeganVirginName
  }
  enum RankPointsType {
    VeganMeisterPoint
    VeganApprenticePoint
    VeganStudentPoint
    VeganCuriousPoint
    VeganVirginPoint
  }
  enum RankLogosType {
    VeganMeisterLogo
    VeganApprenticeLogo
    VeganStudentLogo
    VeganCuriousLogo
    VeganVirginLogo
  }
  extend type Query {
    users: [User!]!
    user(_id: ID!): User!
  }
`;
