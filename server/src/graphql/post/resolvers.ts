import { find, filter } from "lodash";
import { restaurants } from "../restaurant/resolvers";
import { PostN } from "../../@types";
const posts: PostN.PostsT = [
  {
    _id: "1",
    date: new Date(),
    images: ["img1", "img1", "img1"],
    restaurant: restaurants[0],
    mainPicture: "mainPic1",
    author: "user1",
    likes: 0,
    title: "title1",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true
      }
    ],
    hashtags: ["hashtags1", "hashtags1", "hashtags1"],
    comments: [
      {
        _id: "1",
        date: new Date(),
        user: "user4", //User definition
        body: "body",
        likes: 2,
        likedBy: ["user1"]
      }
    ],
    published: true,
    archived: false,
    rating: 2
  },
  {
    _id: "2",
    date: new Date(),
    images: ["img2", "img2", "img2"],
    restaurant: restaurants[1],
    mainPicture: "mainPic2",
    author: "user1",
    likes: 1,
    title: "title2",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true
      }
    ],
    hashtags: ["hashtags2", "hashtags2", "hashtags2"],
    comments: [
      {
        _id: "2",
        date: new Date(),
        user: "user4", //User definition
        body: "body",
        likes: 2,
        likedBy: ["user1"]
      }
    ],
    published: true,
    archived: false,
    rating: 1
  },
  {
    _id: "3",
    date: new Date(),
    images: ["img3", "img3", "img3"],
    restaurant: restaurants[2],
    mainPicture: "mainPic3",
    author: "user2",
    likes: 0,
    title: "title3",
    postSections: [
      {
        index: 1,
        header: "header1",
        body: "body1",
        img: "img1",
        sideImg: true
      }
    ],
    hashtags: ["hashtags3", "hashtags3", "hashtags3"],
    comments: [
      {
        _id: "3",
        date: new Date(),
        user: "user4", //User definition
        body: "body",
        likes: 2,
        likedBy: ["user1"]
      }
    ],
    published: false,
    archived: true,
    rating: 5
  }
];

export const resolvers = {
  Query: {
    posts: (): PostN.PostsT => posts,
    post: (_: any, _id: string): PostN.PostI | undefined => find(posts, _id)
  }
};
