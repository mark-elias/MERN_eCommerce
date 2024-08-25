import { model, Schema } from "mongoose";

// first make an interface bc we are using TypeScript
// then make schema, add interface for type
// then make a model

export interface IProduct {
  productName: string;
  price: number;
  description: string;
  imageURL: string;
  stockQuantity: number;
}

const ProductSchema = new Schema<IProduct>({
  productName: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: [1, "Price should be atlease $1"],
  },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  stockQuantity: {
    type: Number,
    required: true,
    min: [0, "Stock cant be lower than 0"],
  },
});

// make a Model (Class), using Interface and Schema
// "product" will be name of Collection (Class)
export const ProductModel = model<IProduct>("product", ProductSchema);
