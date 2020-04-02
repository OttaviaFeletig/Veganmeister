import { gql } from "apollo-server";
import Restaurant from "./restaurant/typeDefs";
import Post from "./post/typeDefs";
import { resolvers as restaurantResolvers } from "./restaurant/resolvers";
import { resolvers as postResolvers } from "./post/resolvers";
import { scalarTypesResolverMap } from "./scalarTypes/resolvers";
import { merge } from "lodash";
import { makeExecutableSchema } from "graphql-tools";

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

const typeDefs = [Restaurant, Post, Query];
const resolvers = merge(
  restaurantResolvers,
  postResolvers,
  scalarTypesResolverMap
);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
