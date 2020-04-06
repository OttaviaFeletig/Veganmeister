import mongoose, { Schema, Model } from "mongoose";
import { RestaurantN } from "../@types";
const RestaurantSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: {
    type: {
      geometry: {
        type: { type: String, required: true, enum: ["Point"] },
        coordinates: { type: [Number], required: true }
      },
      district: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true }
    },
    required: true
  },
  description: { type: String, required: true },
  images: { type: [String], required: true }
});
RestaurantSchema.index({ geometry: "2dsphere" });

const RestaurantModel: Model<RestaurantN.RestaurantSchemaData> = mongoose.model(
  "restaurant",
  RestaurantSchema
);
export default RestaurantModel;
