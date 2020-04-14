import PostModel from "../../models/Post";
import { PostN, UserN, RestaurantN } from "../../@types";
import { ObjectID } from "bson";
import { ApolloError } from "apollo-server";

export const addPost = async (
  restaurantId: ObjectID,
  input: PostN.PostI,
  authorId: ObjectID
) => {
  console.log(restaurantId);

  const {
    mainPicture,
    pictures,
    // author,
    title,
    postSections,
    hashtags,
    published,
    archived,
  } = input;
  // const authorId = author.id;
  const newPost = new PostModel({
    date: new Date(),
    restaurant: restaurantId,
    mainPicture,
    pictures,
    author: authorId,
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
  //edit user posts array in user collection
  const populatedRestaurantPost = await savedPost
    .populate({
      path: "restaurant",
      populate: { path: "restaurant", model: "restaurant" },
    })
    .execPopulate();
  const populatedUserPost = await populatedRestaurantPost
    .populate({
      path: "user",
    })
    .execPopulate();
  return populatedUserPost;
};
