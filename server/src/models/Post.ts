import mongoose, { Schema, Model } from "mongoose";
import { PostN } from "../@types";
import RestaurantModel from "./Restaurant";
import { ObjectID } from "bson";

const PostSections = {
  indexSection: { type: Number, required: true },
  header: { type: String, required: true },
  body: { type: String, required: true },
  img: { type: String, required: true },
  sideImg: { type: Boolean, required: true },
};
const Comments: Schema = new Schema({
  id: { type: ObjectID, required: true },
  dateC: { type: Date, required: true },
  user: { type: String, required: true }, // user model definition
  bodyC: { type: String, required: true },
  likes: { type: Number, required: true },
  likedBy: { type: [String], required: true },
});
const PostSchema: Schema = new Schema({
  date: { type: Date, required: true },
  restaurant: { type: ObjectID, ref: "restaurant" },
  mainPicture: { type: String, required: true },
  pictures: { type: [String], required: true },
  author: { type: ObjectID, ref: "user" }, // user model definition
  likes: { type: Number, required: true },
  title: { type: String, required: true },
  postSections: { type: [PostSections], required: true }, //post sections def
  hashtags: { type: Array, required: true },
  comments: { type: [Comments] }, //comments def
  published: { type: Boolean, required: true },
  archived: { type: Boolean, required: true },
  rating: { type: Number, required: true },
});

const PostModel: Model<PostN.PostSchemaData> = mongoose.model(
  "post",
  PostSchema
);
export default PostModel;
