import { find, filter } from "lodash";
import { ApolloError } from "apollo-server";
import { RestaurantN } from "../../@types";
import RestaurantModel from "../../models/Restaurant";
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
    restaurants: async () => {
      try {
        return await RestaurantModel.find();
      } catch (err) {
        console.error("restaurants error", err);
        throw new ApolloError("Error retrieving all restaurants", "400");
      }
    },
    restaurant: async (
      parent: RestaurantN.RestaurantI,
      { id }: { id: RestaurantN.RestaurantI["id"] }
    ) => {
      try {
        return await RestaurantModel.findById(id);
      } catch (err) {
        console.error("restaurants error", err);
        throw new ApolloError("Error retrieving one restaurant", "400");
      }
    }
  },
  Mutation: {
    addRestaurant: async (
      parent: RestaurantN.RestaurantI,
      args: RestaurantN.RestaurantI
    ) => {
      try {
        const { input } = JSON.parse(JSON.stringify(args));
        const { name, description, location, images } = input;
        const { geometry, district, city, country } = location;
        const { type, coordinates } = geometry;
        const existingRestaurant = await RestaurantModel.findOne({
          name,
          location
        });
        console.log(existingRestaurant);
        if (existingRestaurant)
          throw new ApolloError("Restaurant already existing in DB", "409");
        const newRestaurant: RestaurantN.RestaurantSchemaData = new RestaurantModel(
          {
            name,
            description,
            location: {
              geometry: {
                type,
                coordinates
              },
              district,
              city,
              country
            },
            images
          }
        );

        await newRestaurant.save();
        return newRestaurant;
      } catch (err) {
        throw new ApolloError("Couldn't save entry in DB", "500");
      }
    }
  }
};
