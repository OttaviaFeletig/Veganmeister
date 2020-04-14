import { UserN } from "../../@types";
import UserModel from "../../models/User";
// const bcrypt = require("bcryptjs");
import { ApolloError } from "apollo-server";
import { addUser } from "./mutations";
import { ObjectID } from "bson";

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
