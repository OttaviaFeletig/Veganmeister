import RestaurantModel from "../../models/Restaurant";
import { RestaurantN } from "../../@types";

export const addRestaurant = async (restaurant: RestaurantN.RestaurantI) => {
  const { name, description, location, images } = restaurant;
  const { geometry, district, city, country } = location;
  const { type, coordinates } = geometry;
  const newRestaurant = new RestaurantModel({
    name,
    description,
    location: {
      geometry: {
        type,
        coordinates,
      },
      district,
      city,
      country,
    },
    images,
  });
  await newRestaurant.save();
  console.log("newRestaurant", newRestaurant.id);
  return newRestaurant;
};
