import RestaurantModel from "../../models/Restaurant";

export const addRestaurant = async (
  name,
  location,
  description,
  geometry,
  type,
  coordinates,
  district,
  city,
  country,
  images
) => {
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
