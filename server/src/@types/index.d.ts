interface RestaurantI {
  id: String;
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
  comments: Array<string>; // Comment type
  published: boolean;
  archived: boolean;
}
type PostsT = Array<PostI>;
