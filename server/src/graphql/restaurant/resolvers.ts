import { ApolloError } from "apollo-server";
import { RestaurantN } from "../../@types";
import RestaurantModel from "../../models/Restaurant";
import { ObjectID } from "bson";

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
      { id }: { id: string | number | ObjectID }
    ) => {
      try {
        return await RestaurantModel.findById(id);
      } catch (err) {
        console.error("restaurants error", err);
        throw new ApolloError("Error retrieving one restaurant", "400");
      }
    },
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
          location,
        });
        if (existingRestaurant)
          return new ApolloError("Restaurant already existing in DB", "409");
        const newRestaurant: RestaurantN.RestaurantSchemaData = new RestaurantModel(
          {
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
          }
        );
        await newRestaurant.save();
        return newRestaurant;
      } catch (err) {
        return new ApolloError("Couldn't save entry in DB", "500");
      }
    },
  },
};
