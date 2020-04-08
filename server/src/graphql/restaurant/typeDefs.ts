import { gql } from "apollo-server";

export default gql`
  type Restaurant {
    id: ID!
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

  input RestaurantInput {
    id: ID
    name: String!
    description: String!
    location: LocationInput!
    images: [String]!
  }

  input LocationInput {
    geometry: GeoJSONPointInput!
    district: String!
    city: String!
    country: String!
  }

  input GeoJSONPointInput {
    type: GeoJSONPointType
    coordinates: Coordinates!
  }

  enum GeoJSONPointType {
    Point
  }

  scalar Coordinates

  extend type Query {
    restaurants: [Restaurant!]!
    restaurant(id: ID!): Restaurant!
    restaurantInRadius(
      radius: Int!
      location: GeoJSONPointInput!
    ): [Restaurant!]!
  }
  extend type Mutation {
    addRestaurant(input: RestaurantInput): Restaurant
  }
`;
