import { find, filter } from "lodash";
import { RestaurantN } from "../../@types";
export const restaurants: RestaurantN.RestaurantsT = [
  {
    _id: "1",
    name: "name1",
    location: {
      geometry: { type: "Point", coordinates: [45, 9] }, // [logitude, latitude]
      district: "Neukolln",
      city: "Berlin",
      country: "Germany"
    },
    description: "description1",
    images: ["img1", "img1", "img1"]
  },
  {
    _id: "2",
    name: "name2",
    location: {
      geometry: { type: "Point", coordinates: [45, 9] }, // [logitude, latitude]
      district: "Neukolln",
      city: "Berlin",
      country: "Germany"
    },
    description: "description2",
    images: ["img2", "img2", "img2"]
  },
  {
    _id: "3",
    name: "name3",
    location: {
      geometry: { type: "Point", coordinates: [45, 9] }, // [logitude, latitude]
      district: "Neukolln",
      city: "Berlin",
      country: "Germany"
    },
    description: "description3",
    images: ["img3", "img3", "img3"]
  }
];

export const resolvers = {
  Query: {
    restaurants: (): RestaurantN.RestaurantsT => restaurants,
    restaurant: (_: any, _id: string): RestaurantN.RestaurantI | undefined =>
      find(restaurants, _id)
  }
};
