import { UserN } from "../../@types";
const bcrypt = require("bcryptjs");

import UserModel from "../../models/User";

export const addUser = async (input: UserN.UserI) => {
  const { username, name, surname, email, password, avatar, rank } = input;
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  const newUser = new UserModel({
    username,
    email,
    name,
    surname,
    password: hash,
    avatar,
    rank,
    posts: [],
    isAdmin: true,
    isLoggedIn: false,
  });
  const savedUser = await newUser.save();
  return savedUser;
};
