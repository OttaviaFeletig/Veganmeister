import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

export const scalarTypesResolverMap = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }),
  Coordinates: new GraphQLScalarType({
    name: "Coordinates",
    description: "A set of coordinates. x, y",
    serialize(value) {
      return isCoordinate(value);
    },
    parseValue(value) {
      return isCoordinate(value);
    },
    parseLiteral(ast: any) {
      return isCoordinate(ast.value);
    }
  })
};
// helper function for coordinates scalar
const isCoordinate = (value: Array<number>) => {
  if (
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  ) {
    return value;
  }
  return null;
};
