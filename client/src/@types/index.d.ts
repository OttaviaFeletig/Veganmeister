interface PostI {
  _id: string;
  date: Date;
  restaurant: RestaurantI;
  mainPicture: string;
  images: Array<string>;
  author: UserN.UserI;
  likes: number;
  title: string;
  body: string;
  hashtags: Array<string>;
  comments: Array<Comment>;
  published: boolean;
  archived: boolean;
}
//PostT?
type PostsI = Array<Post>;

interface RestaurantI {
  name: string;
  location: LocationI;
  description: string;
  images: Array<string>;
}

interface LocationI {
  coordinates: GeoJSON.Point;
  district: string;
  city: string;
  country: string;
}

export namespace UserN {
  export interface UserI {
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    avatar: string;
    posts: Array<PostI>;
    rank: RankI;
  }

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
}

/**
 * USER
 */
interface User {
  uid: string | null;
  name: string | null;
  surname?: string;
  avatar: string | null;
  isAdmin: Boolean;
}

/**
 * CONTEXT
 */

interface AuthContextInterface {
  isAuthenticated: Boolean;
  user: User;
  logIn: any;
}
interface ThemeContextInterface {
  theme: any;
  setColors: any;
}
