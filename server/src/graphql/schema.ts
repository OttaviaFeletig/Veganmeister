import { gql } from "apollo-server";
import Restaurant from "./restaurant/typeDefs";
import Post from "./post/typeDefs";
import User from "./user/typeDefs";
import PictureUpload from "./pictureUpload/typeDefs";
import { resolvers as restaurantResolvers } from "./restaurant/resolvers";
import { resolvers as postResolvers } from "./post/resolvers";
import { resolvers as userResolvers } from "./user/resolvers";
import { resolvers as uploadResolvers } from "./pictureUpload/pictureUpload";
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
const typeDefs = [Restaurant, Post, User, PictureUpload, Query];
const resolvers = merge(
  restaurantResolvers,
  postResolvers,
  userResolvers,
  uploadResolvers,
  scalarTypesResolverMap,
  enumTypesResolverMap
);
export const schema = makeExecutableSchema({ typeDefs, resolvers });
