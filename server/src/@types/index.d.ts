import { ObjectID } from "bson";
import { Document, Model } from "mongoose";
export namespace RestaurantN {
  interface RestaurantI {
    // id: string | number | ObjectID;
    name: string;
    location: LocationI;
    description: string;
    images: Array<string>;
  }
  type RestaurantsT = Array<RestaurantI>;
  interface LocationI {
    geometry: GeoJSON.Point;
    district: string;
    city: string;
    country: string;
  }
  interface RestaurantSchemaData extends Document, RestaurantI {
    // id: string | number | ObjectID;
    // name: string;
    // location: LocationI;
    // description: string;
    // images: Array<string>;
  }
}
export namespace PostN {
  interface PostI {
    // _id: string | number | ObjectID;
    date: Date;
    restaurant: RestaurantN.RestaurantI;
    mainPicture: string;
    pictures: Array<string>;
    author: UserN.UserI;
    likes: number;
    title: string;
    postSections: PostSectionsT;
    hashtags: Array<string>;
    comments: CommentsT;
    published: boolean;
    archived: boolean;
    rating: number;
  }
  type PostSectionsT = Array<PostSectionI>;
  interface PostSectionI {
    indexSection: number;
    header: string;
    body: string;
    img: string;
    sideImg: boolean;
  }
  type PostsT = Array<PostI> | [];
  interface CommentI {
    id: string | number | ObjectID;
    user: UserN.UserI;
    date: Date;
    body: string;
    likes: number;
    likedBy: UserN.UsersT;
  }
  type CommentsT = Array<CommentI>;
  interface PostSchemaData extends Document, PostI {}
  type PostModelT = Model<PostSchemaData>;
}
export namespace UserN {
  interface UserI {
    // _id: string | number | ObjectID;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    avatar: string;
    posts: PostN.PostsT;
    rank: RankI;
    isAdmin: boolean;
    isLoggedIn: boolean;
  }
  type UsersT = Array<UserI>;
  interface RankI {
    name: RankNames;
    points: RankPoints;
    logo: RankLogo;
  }
  type RanksT = Array<RankI>;
  enum RankNames {
    VeganMeister = "Vegan Meister",
    VeganApprentice = "Vegan Apprentice",
    VeganStudent = "Vegan Student",
    VeganCurious = "Vegan Curious",
    VeganVirgin = "Vegan Virgin",
  }
  enum RankPoints {
    VeganMeister = 100,
    VeganApprentice = 70,
    VeganStudent = 40,
    VeganCurious = 10,
    VeganVirgin = 0,
  }
  enum RankLogo {
    VeganMeister = "",
    VeganApprentice = "",
    VeganStudent = "",
    VeganCurious = "",
    VeganVirgin = "",
  }
  interface UserSchemaData extends Document, UserI {}
  type UserModelT = Model<UserSchemaData>;
}
