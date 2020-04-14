import { PostN, UserN, RestaurantN } from "../../@types";
import PostModel from "../../models/Post";
import RestaurantModel from "../../models/Restaurant";
import UserModel from "../../models/User";
import { ApolloError } from "apollo-server";
import { ObjectID } from "bson";
import { addPost } from "./mutations";
import { addRestaurant } from "../restaurant/mutations";

export const resolvers = {
  Query: {
    posts: async () => {
      try {
        return await PostModel.find().populate({
          path: "restaurant",
          populate: { path: "restaurant", model: "restaurant" },
        });
      } catch (err) {
        console.error("posts error", err);
        throw new ApolloError("Error retrieving all posts", "400");
      }
    },
    post: async (
      parent: PostN.PostI,
      { id }: { id: string | number | ObjectID }
    ) => {
      try {
        return await PostModel.findById(id).populate({
          path: "restaurant",
          populate: { path: "restaurant", model: "restaurant" },
        });
      } catch (err) {
        console.error("restaurants error", err);
        throw new ApolloError("Error retrieving one restaurant", "400");
      }
    },
  },
  Mutation: {
    addPost: async (parent: PostN.PostI, args: PostN.PostI) => {
      try {
        const { input } = JSON.parse(JSON.stringify(args));
        const { author, title, restaurant, published, archived } = input;
        const { name, location } = restaurant;
        const authorEmail = author.email;
        const existingUser = await UserModel.findOne({ email: authorEmail });
        if (!existingUser) return new ApolloError("User not found", "400");
        const authorId = existingUser.id;
        const existingPost = await PostModel.findOne({
          author: authorId,
          title,
        });
        console.log("existingPost", existingPost);
        const existingRestaurant = await RestaurantModel.findOne({
          name,
          location,
        });
        //check if user exists

        if (existingPost)
          return new ApolloError(
            "Post with same title already existing for this author in DB",
            "409"
          );
        if (existingRestaurant) {
          const existingRestaurantId = existingRestaurant.id;
          if (published !== archived) {
            const newPost = await addPost(
              existingRestaurantId,
              input,
              authorId
            );
            return newPost;
          } else {
            return new ApolloError(
              "archived and published cannot have the same value",
              "409"
            );
          }
        } else {
          const newRestaurant = await addRestaurant(restaurant);
          const newRestaurantId = newRestaurant.id;
          const newPost = await addPost(newRestaurantId, input, authorId);
          return newPost;
        }
      } catch (err) {
        console.log(err);
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};
