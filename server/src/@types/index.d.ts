import { ObjectID } from "bson";
interface RestaurantI {
  id: string | number | ObjectID;
  name: string;
  location: any; // create LocationI
  description: string;
  images: Array<string>;
}
type RestaurantsT = Array<RestaurantI>;
interface PostI {
  id: string;
  date: Date;
  restaurant: RestaurantI;
  mainPicture: string;
  images: Array<string>;
  author: any; //create UserI or UserN
  likes: number;
  title: string;
  body: string;
  hashtags: Array<string>;
  comments: CommentsT; // Comment type
  published: boolean;
  archived: boolean;
}
type PostsT = Array<PostI>;
interface CommentI {
  id: string;
  date: Date;
  author: string; //User definition
  body: string;
}
type CommentsT = Array<CommentI>;
