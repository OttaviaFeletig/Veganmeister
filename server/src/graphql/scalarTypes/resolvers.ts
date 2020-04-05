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
  // RankNamesType: new GraphQLScalarType({
  //   name: "RankNamesType",
  //   description: "Rank names types",
  //   serialize(value) {
  //     switch (value) {
  //       case "Vegan Meister":
  //         return "Vegan Meister";
  //       case "Vegan Apprentice":
  //         return "Vegan Apprentice";
  //       case "Vegan Student":
  //         return "Vegan Student";
  //       case "Vegan Curious":
  //         return "Vegan Curious";
  //       case "Vegan Virgin":
  //         return "Vegan Virgin";
  //       default:
  //         return "Value not possible";
  //     }
  //   }
  // }),
  // RankPointsType: new GraphQLScalarType({
  //   name: "RankPointsType",
  //   description: "Rank points types",
  //   serialize(value) {
  //     switch (value) {
  //       case 100:
  //         return 100;
  //       case 70:
  //         return 70;
  //       case 40:
  //         return 40;
  //       case 10:
  //         return 10;
  //       case 0:
  //         return 0;
  //       default:
  //         return "Value not possible";
  //     }
  //   }
  // }),
  // RankLogosType: new GraphQLScalarType({
  //   name: "RankLogosType",
  //   description: "Rank logos types",
  //   serialize(value) {
  //     switch (value) {
  //       case "":
  //         return "";
  //       case "":
  //         return "";
  //       case "":
  //         return "";
  //       case "":
  //         return "";
  //       case "":
  //         return "";
  //       default:
  //         return "Value not possible";
  //     }
  //   }
  // })
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
