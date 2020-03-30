import { find, filter } from "lodash";
export const restaurants: RestaurantsT = [
  {
    id: "1",
    name: "name1",
    location: "location1",
    description: "description1",
    images: ["img1", "img1", "img1"]
  },
  {
    id: "2",
    name: "name2",
    location: "location2",
    description: "description2",
    images: ["img2", "img2", "img2"]
  },
  {
    id: "3",
    name: "name3",
    location: "location3",
    description: "description3",
    images: ["img3", "img3", "img3"]
  }
];

export const resolvers = {
  Query: {
    restaurants: (): RestaurantsT => restaurants,
    restaurant: (_: any, id: string): RestaurantI | undefined =>
      find(restaurants, id)
  }
};
