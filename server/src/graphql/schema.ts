import { gql } from "apollo-server";
import Restaurant from "./restaurant/typeDefs";
import Post from "./post/typeDefs";
import User from "./user/typeDefs";
import { resolvers as restaurantResolvers } from "./restaurant/resolvers";
import { resolvers as postResolvers } from "./post/resolvers";
import { resolvers as userResolvers } from "./user/resolvers";
import { scalarTypesResolverMap } from "./scalarTypes/resolvers";
import { enumTypesResolverMap } from "./enumTypes/resolvers";
import { merge } from "lodash";
import { makeExecutableSchema } from "graphql-tools";
// const Coordinates = require("./scalarTypes/resolvers");
const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;
// const scalarResolvers = { Coordinates };
const typeDefs = [Restaurant, Post, User, Query];
const resolvers = merge(
  restaurantResolvers,
  postResolvers,
  userResolvers,
  scalarTypesResolverMap,
  enumTypesResolverMap
  // scalarResolvers
);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
