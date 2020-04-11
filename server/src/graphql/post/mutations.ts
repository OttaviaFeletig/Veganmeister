import PostModel from "../../models/Post";
import { PostN, UserN, RestaurantN } from "../../@types";
import { ObjectID } from "bson";
import { ApolloError } from "apollo-server";

export const addPost = async (id: ObjectID, input: PostN.PostI) => {
  console.log(id);
  const {
    mainPicture,
    pictures,
    author,
    title,
    postSections,
    hashtags,
    published,
    archived,
  } = input;
  const newPost = new PostModel({
    date: new Date(),
    restaurant: id,
    mainPicture,
    pictures,
    author,
    likes: 0,
    title,
    postSections,
    hashtags,
    comments: [],
    published,
    archived,
    rating: 0,
  });
  const savedPost = await newPost.save();
  const populatedPost = await savedPost
    .populate({
      path: "restaurant",
      populate: { path: "restaurant", model: "restaurant" },
    })
    .execPopulate();
  return populatedPost;
};
