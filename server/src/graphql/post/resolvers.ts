import { restaurants } from "../restaurant/resolvers";
import { PostN, UserN, RestaurantN } from "../../@types";
import PostModel from "../../models/Post";
import RestaurantModel from "../../models/Restaurant";
import { ApolloError } from "apollo-server";
import { ObjectID } from "bson";
import { addPost } from "./mutations";
import { addRestaurant } from "../restaurant/mutations";
export const posts: PostN.PostsT = [
  {
    _id: "1",
    date: new Date(),
    images: ["img1", "img1", "img1"],
    restaurant: restaurants[0],
    mainPicture: "mainPic1",
    author: {
      _id: "1",
      username: "TheVeganmeister",
      name: "Shmulik",
      surname: "Goldfein",
      email: "test@test.com",
      password: "test123",
      avatar: "",
      rank: {
        name: "Vegan Meister" as UserN.RankNames.VeganMeister,
        points: 100 as UserN.RankPoints.VeganMeister,
        logo: "" as UserN.RankLogo.VeganMeister,
      },
      isAdmin: true,
    },
    likes: 0,
    title: "title1",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true,
      },
    ],
    hashtags: ["hashtags1", "hashtags1", "hashtags1"],
    comments: [
      {
        _id: "1",
        date: new Date(),
        user: {
          _id: "2",
          username: "User2",
          name: "User",
          surname: "2",
          email: "test2@test.com",
          password: "test123",
          avatar: "",
          rank: {
            name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
            points: 0 as UserN.RankPoints.VeganVirgin,
            logo: "" as UserN.RankLogo.VeganVirgin,
          },
          isAdmin: false,
        },
        body: "body",
        likes: 2,
        likedBy: [
          {
            _id: "1",
            username: "TheVeganmeister",
            name: "Shmulik",
            surname: "Goldfein",
            email: "test@test.com",
            password: "test123",
            avatar: "",
            rank: {
              name: "Vegan Meister" as UserN.RankNames.VeganMeister,
              points: 100 as UserN.RankPoints.VeganMeister,
              logo: "" as UserN.RankLogo.VeganMeister,
            },
            isAdmin: true,
          },
        ],
      },
    ],
    published: true,
    archived: false,
    rating: 2,
  },
  {
    _id: "2",
    date: new Date(),
    images: ["img2", "img2", "img2"],
    restaurant: restaurants[1],
    mainPicture: "mainPic2",
    author: {
      _id: "1",
      username: "TheVeganmeister",
      name: "Shmulik",
      surname: "Goldfein",
      email: "test@test.com",
      password: "test123",
      avatar: "",
      rank: {
        name: "Vegan Meister" as UserN.RankNames.VeganMeister,
        points: 100 as UserN.RankPoints.VeganMeister,
        logo: "" as UserN.RankLogo.VeganMeister,
      },
      isAdmin: true,
    },
    likes: 1,
    title: "title2",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true,
      },
    ],
    hashtags: ["hashtags2", "hashtags2", "hashtags2"],
    comments: [
      {
        _id: "2",
        date: new Date(),
        user: {
          _id: "2",
          username: "User2",
          name: "User",
          surname: "2",
          email: "test2@test.com",
          password: "test123",
          avatar: "",
          rank: {
            name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
            points: 0 as UserN.RankPoints.VeganVirgin,
            logo: "" as UserN.RankLogo.VeganVirgin,
          },
          isAdmin: false,
        },
        body: "body",
        likes: 2,
        likedBy: [
          {
            _id: "1",
            username: "TheVeganmeister",
            name: "Shmulik",
            surname: "Goldfein",
            email: "test@test.com",
            password: "test123",
            avatar: "",
            rank: {
              name: "Vegan Meister" as UserN.RankNames.VeganMeister,
              points: 100 as UserN.RankPoints.VeganMeister,
              logo: "" as UserN.RankLogo.VeganMeister,
            },
            isAdmin: true,
          },
        ],
      },
    ],
    published: true,
    archived: false,
    rating: 1,
  },
  {
    _id: "3",
    date: new Date(),
    images: ["img3", "img3", "img3"],
    restaurant: restaurants[2],
    mainPicture: "mainPic3",
    author: {
      _id: "1",
      username: "TheVeganmeister",
      name: "Shmulik",
      surname: "Goldfein",
      email: "test@test.com",
      password: "test123",
      avatar: "",
      rank: {
        name: "Vegan Meister" as UserN.RankNames.VeganMeister,
        points: 100 as UserN.RankPoints.VeganMeister,
        logo: "" as UserN.RankLogo.VeganMeister,
      },
      isAdmin: true,
    },
    likes: 0,
    title: "title3",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true,
      },
    ],
    hashtags: ["hashtags3", "hashtags3", "hashtags3"],
    comments: [
      {
        _id: "3",
        date: new Date(),
        user: {
          _id: "2",
          username: "User2",
          name: "User",
          surname: "2",
          email: "test2@test.com",
          password: "test123",
          avatar: "",
          rank: {
            name: "Vegan Virgin" as UserN.RankNames.VeganVirgin,
            points: 0 as UserN.RankPoints.VeganVirgin,
            logo: "" as UserN.RankLogo.VeganVirgin,
          },
          isAdmin: false,
        },
        body: "body",
        likes: 2,
        likedBy: [
          {
            _id: "1",
            username: "TheVeganmeister",
            name: "Shmulik",
            surname: "Goldfein",
            email: "test@test.com",
            password: "test123",
            avatar: "",
            rank: {
              name: "Vegan Meister" as UserN.RankNames.VeganMeister,
              points: 100 as UserN.RankPoints.VeganMeister,
              logo: "" as UserN.RankLogo.VeganMeister,
            },
            isAdmin: true,
          },
        ],
      },
    ],
    published: false,
    archived: true,
    rating: 5,
  },
];
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
        const existingPost = await PostModel.findOne({
          author,
          title,
        });
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
          const { id } = existingRestaurant;
          console.log(typeof id);
          if (published !== archived) {
            const newPost = await addPost(id, input);
            return newPost;
          } else {
            return new ApolloError(
              "archived and published cannot have the same value",
              "409"
            );
          }
        } else {
          const newRestaurant = await addRestaurant(restaurant);
          const { id } = newRestaurant;
          console.log("id", id);
          const newPost = await addPost(id, input);
          return newPost;
        }
      } catch (err) {
        console.log(err);
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};
