import mongoose, { Schema, Model } from "mongoose";
import { UserN } from "../@types";
import { ObjectID } from "bson";
// i don't need auto generated id for rank
const RankSchema: Schema = new Schema({
  name: { type: String, required: true },
  points: { type: Number, required: true },
  logo: { type: String, required: true },
});

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  posts: [{ type: ObjectID, ref: "post" }],
  isAdmin: { type: Boolean, required: true },
  // rank: { type: RankSchema, required: true },
  rank: {
    name: { type: String, required: true },
    points: { type: Number, required: true },
    logo: { type: String, required: true },
  },
  isLoggedIn: { type: Boolean, required: true },
});

const UserModel: Model<UserN.UserSchemaData> = mongoose.model(
  "user",
  UserSchema
);
export default UserModel;
