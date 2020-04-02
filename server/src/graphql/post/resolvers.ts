import { find, filter } from "lodash";
import { restaurants } from "../restaurant/resolvers";

const posts: PostsT = [
  {
    id: "1",
    date: new Date(),
    images: ["img1", "img1", "img1"],
    restaurant: restaurants[0],
    mainPicture: "mainPic1",
    author: "user1",
    likes: 0,
    title: "title1",
    body: "body1",
    hashtags: ["hashtags1", "hashtags1", "hashtags1"],
    comments: [
      {id: "1",
        date: new Date(),
        author: "user4", //User definition
        body: "body"
      }
    ],
    published: true,
    archived: false
  },
  {
    id: "2",
    date: new Date(),
    images: ["img2", "img2", "img2"],
    restaurant: restaurants[1],
    mainPicture: "mainPic2",
    author: "user1",
    likes: 1,
    title: "title2",
    body: "body2",
    hashtags: ["hashtags2", "hashtags2", "hashtags2"],
    comments: [
      {
          id: "2",
        date: new Date(),
        author: "user4", //User definition
        body: "body"
      }
    ],
    published: true,
    archived: false
  },
  {
    id: "3",
    date: new Date(),
    images: ["img3", "img3", "img3"],
    restaurant: restaurants[2],
    mainPicture: "mainPic3",
    author: "user2",
    likes: 0,
    title: "title3",
    body: "body3",
    hashtags: ["hashtags3", "hashtags3", "hashtags3"],
    comments: [
      {
          id: "3",
        date: new Date(),
        author: "user4", //User definition
        body: "body"
      }
    ],
    published: false,
    archived: true
  }
];

export const resolvers = {
  Query: {
    posts: (): Array<PostI> => posts,
    post: (_: any, id: string): PostI | undefined => find(posts, id)
  }
};
