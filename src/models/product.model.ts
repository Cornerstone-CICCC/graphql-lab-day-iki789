import { model, Schema, Types } from "mongoose";

const productSchema = new Schema({
  _id: {
    type: Types.ObjectId,
    auto: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
});

export type Product = {
  _id: string;
  productName: string;
  productPrice: string;
};

export default model<Product | null>("Product", productSchema);
