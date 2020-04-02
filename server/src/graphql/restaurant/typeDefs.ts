import { gql } from "apollo-server";

export default gql`
  type Restaurant {
    _id: ID!
    name: String!
    description: String!
    location: Location
    images: [String]!
  }

  type Location {
    geometry: GeoJSONPoint!
    district: String!
    city: String!
    country: String!
  }

  type GeoJSONPoint {
    type: GeoJSONPointType
    coordinates: Coordinates!
  }

  enum GeoJSONPointType {
    Point
  }

  input GeoJSONPointInput {
    type: GeoJSONPointType
    coordinates: Coordinates!
  }

  scalar Coordinates

  extend type Query {
    restaurants: [Restaurant!]!
    restaurant(_id: ID!): Restaurant!
    restaurantInRadius(
      radius: Int!
      location: GeoJSONPointInput!
    ): [Restaurant!]!
  }
`;
