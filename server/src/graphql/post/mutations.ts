import PostModel from "../../models/Post";
import UserModel from "../../models/User";
import { PostN, UserN, RestaurantN } from "../../@types";
import { ObjectID } from "bson";
import { ApolloError } from "apollo-server";

export const addPost = async (
  restaurantId: ObjectID,
  input: PostN.PostI,
  authorId: ObjectID
) => {
  try {
    const currentUser = await UserModel.findById(authorId);
    if (!currentUser) {
      return new ApolloError("400", "user not found");
    } else {
      const {
        mainPicture,
        pictures,
        title,
        postSections,
        hashtags,
        published,
        archived,
      } = input;
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

      currentUser.posts.push(savedPost.id);

      await currentUser.save();
      const populatedPost = await savedPost
        .populate([
          {
            path: "restaurant",
            populate: { path: "restaurant", model: "restaurant" },
          },
          {
            path: "author",
            populate: { path: "user", model: "user" },
          },
        ])
        .execPopulate();

      return populatedPost;
    }
  } catch (err) {
    console.log("err", err);
    return new ApolloError("400", "user not found");
  }
};
