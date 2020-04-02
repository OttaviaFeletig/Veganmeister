import { find, filter } from "lodash";
import { restaurants } from "../restaurant/resolvers";
import { PostN } from "../../@types";
import { UserN } from "../../@types";

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
        logo: "" as UserN.RankLogo.VeganMeister
      },
      isAdmin: true
    },
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
            logo: "" as UserN.RankLogo.VeganVirgin
          },
          isAdmin: false
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
              logo: "" as UserN.RankLogo.VeganMeister
            },
            isAdmin: true
          }
        ]
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
        logo: "" as UserN.RankLogo.VeganMeister
      },
      isAdmin: true
    },
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
            logo: "" as UserN.RankLogo.VeganVirgin
          },
          isAdmin: false
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
              logo: "" as UserN.RankLogo.VeganMeister
            },
            isAdmin: true
          }
        ]
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
        logo: "" as UserN.RankLogo.VeganMeister
      },
      isAdmin: true
    },
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
            logo: "" as UserN.RankLogo.VeganVirgin
          },
          isAdmin: false
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
              logo: "" as UserN.RankLogo.VeganMeister
            },
            isAdmin: true
          }
        ]
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
