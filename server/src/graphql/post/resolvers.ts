import { find, filter } from "lodash";
import { restaurants } from "../restaurant/resolvers";
import { PostN, UserN, RestaurantN } from "../../@types";
import PostModel from "../../models/Post";
import RestaurantModel from "../../models/Restaurant";
import { ApolloError } from "apollo-server";
import { ObjectID } from "bson";
import mongoose from "mongoose";
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
        const {
          // date,
          restaurant,
          mainPicture,
          pictures,
          author,
          // likes,
          title,
          postSections,
          hashtags,
          // comments,
          published,
          archived,
          // rating,
        } = input;
        const { name, description, location, images } = restaurant;
        const { geometry, district, city, country } = location;
        const { type, coordinates } = geometry;
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
          throw new ApolloError(
            "Post with same title already existing for this author in DB",
            "409"
          );
        if (existingRestaurant) {
          const { id } = restaurant;
          const newPost = await addPost(
            id,
            mainPicture,
            pictures,
            author,
            title,
            postSections,
            hashtags,
            published,
            archived
          );
          // const newPost = new PostModel({
          //   date: new Date(),
          //   restaurant: id,
          //   mainPicture,
          //   pictures,
          //   author,
          //   likes: 0,
          //   title,
          //   postSections,
          //   hashtags,
          //   comments: [],
          //   published,
          //   archived,
          //   rating: 0,
          // });

          // const savedPost = await newPost.save();
          // return savedPost;
          return newPost;
        } else {
          const newRestaurant = await addRestaurant(
            name,
            location,
            description,
            geometry,
            type,
            coordinates,
            district,
            city,
            country,
            images
          );

          const { id } = newRestaurant;
          console.log("id", id);
          const newPost = await addPost(
            id,
            mainPicture,
            pictures,
            author,
            title,
            postSections,
            hashtags,
            published,
            archived
          );
          return newPost;
        }
      } catch (err) {
        console.log(err);
        throw new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};

// const addRestaurant = async(restaurant: RestaurantN.RestaurantI) => {
//  const newRestaurant: RestaurantN.RestaurantSchemaData = new RestaurantModel({
//   restaurant
//  });
//  await newRestaurant.save();
//  return newRestaurant;
// }
const addRestaurant = async (
  name,
  location,
  description,
  geometry,
  type,
  coordinates,
  district,
  city,
  country,
  images
) => {
  const newRestaurant: RestaurantN.RestaurantSchemaData = new RestaurantModel({
    name,
    description,
    location: {
      geometry: {
        type,
        coordinates,
      },
      district,
      city,
      country,
    },
    images,
  });
  await newRestaurant.save();
  console.log("newRestaurant", newRestaurant.id);
  return newRestaurant;
};
const addPost = async (
  id,
  mainPicture,
  pictures,
  author,
  title,
  postSections,
  hashtags,
  published,
  archived
) => {
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
  return savedPost;
};
