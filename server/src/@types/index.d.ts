import { ObjectID } from "bson";
export namespace RestaurantN {
  interface RestaurantI {
    _id: string | number | ObjectID;
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
}
export namespace PostN {
  interface PostI {
    _id: string | number | ObjectID;
    date: Date;
    restaurant: RestaurantN.RestaurantI;
    mainPicture: string;
    images: Array<string>;
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
    index: number;
    header: string;
    body: string;
    img: string;
    sideImg: boolean;
  }
  type PostsT = Array<PostI>;
  interface CommentI {
    _id: string | number | ObjectID;
    user: UserN.UserI;
    date: Date;
    body: string;
    likes: number;
    likedBy: UserN.UsersT;
  }
  type CommentsT = Array<CommentI>;
}
export namespace UserN {
  interface UserI {
    _id: string | number | ObjectID;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    avatar: string;
    posts?: PostN.PostsT;
    rank?: RankI;
    isAdmin: Boolean;
  }
  type UsersT = Array<UserI>;
  interface RankI {
    name: RankNames;
    points: RankPoints;
    logo: RankLogo;
  }
  enum RankNames {
    VeganMeister = "Vegan Meister",
    VeganApprentice = "Vegan Apprentice",
    VeganStudent = "Vegan Student",
    VeganCurious = "Vegan Curious",
    VeganVirgin = "Vegan Virgin"
  }
  enum RankPoints {
    VeganMeister = 100,
    VeganApprentice = 70,
    VeganStudent = 40,
    VeganCurious = 10,
    VeganVirgin = 0
  }
  enum RankLogo {
    VeganMeister = "",
    VeganApprentice = "",
    VeganStudent = "",
    VeganCurious = "",
    VeganVirgin = ""
  }
  type RankNamesT =
    | "Vegan Meister"
    | "Vegan Apprentice"
    | "Vegan Student"
    | "Vegan Curious"
    | "VeganVirgin";
}
