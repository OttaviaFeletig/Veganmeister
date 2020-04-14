import { find, filter } from "lodash";
import { posts } from "../post/resolvers";

import { UserN } from "../../@types";
import UserModel from "../../models/User";
// const bcrypt = require("bcryptjs");
import { ApolloError } from "apollo-server";
import { addUser } from "./mutations";
import { ObjectID } from "bson";

const ranks: UserN.RanksT = [
  {
    name: "Vegan Meister" as UserN.RankNames.VeganMeister,
    points: 100 as UserN.RankPoints.VeganMeister,
    logo: "" as UserN.RankLogo.VeganMeister,
  },
  {
    name: "Vegan Apprentice" as UserN.RankNames.VeganApprentice,
    points: 70 as UserN.RankPoints.VeganApprentice,
    logo: "" as UserN.RankLogo.VeganApprentice,
  },
  {
    name: "Vegan Student" as UserN.RankNames.VeganStudent,
    points: 40 as UserN.RankPoints.VeganStudent,
    logo: "" as UserN.RankLogo.VeganStudent,
  },
  {
    name: "Vegan Curious" as UserN.RankNames.VeganCurious,
    points: 10 as UserN.RankPoints.VeganCurious,
    logo: "" as UserN.RankLogo.VeganCurious,
  },
  {
    name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
    points: 0 as UserN.RankPoints.VeganVirgin,
    logo: "" as UserN.RankLogo.VeganVirgin,
  },
];
const users: UserN.UsersT = [
  {
    _id: "1",
    username: "TheVeganmeister",
    name: "Shmulik",
    surname: "Goldfein",
    email: "test@test.com",
    password: "test123",
    avatar: "",
    posts: posts,
    rank: {
      name: "Vegan Meister" as UserN.RankNames.VeganMeister,
      points: 100 as UserN.RankPoints.VeganMeister,
      logo: "" as UserN.RankLogo.VeganMeister,
    },
    isAdmin: true,
  },
  {
    _id: "2",
    username: "User2",
    name: "User",
    surname: "2",
    email: "test2@test.com",
    password: "test123",
    avatar: "",
    posts: [],
    rank: {
      name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
      points: 0 as UserN.RankPoints.VeganVirgin,
      logo: "" as UserN.RankLogo.VeganVirgin,
    },
    isAdmin: false,
  },
];

export const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await UserModel.find().populate({
          path: "post",
          populate: { path: "post", model: "post" },
        });
        return users;
      } catch (err) {
        console.error("users error", err);
        throw new ApolloError("Error retrieving all users", "400");
      }
    },
    user: async (
      parent: UserN.UserI,
      { id }: { id: string | number | ObjectID }
    ) => {
      try {
        return await UserModel.findById(id).populate({
          path: "post",
          populate: { path: "post", model: "post" },
        });
      } catch (err) {
        console.error("users error", err);
        throw new ApolloError("Error retrieving one user", "400");
      }
    },
  },
  Mutation: {
    addUser: async (parent: UserN.UserI, args: UserN.UserI) => {
      try {
        const { input } = JSON.parse(JSON.stringify(args));
        const { username, email } = input;
        const existingUser = await UserModel.findOne({ email, username });

        if (existingUser) {
          return new ApolloError(
            "User with same email or username already existing in DB",
            "409"
          );
        }
        const savedUser = await addUser(input);
        return savedUser;
      } catch (err) {
        return err;
      }
    },
  },
};
