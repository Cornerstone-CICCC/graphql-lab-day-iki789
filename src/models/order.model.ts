import { Schema, model, Types } from "mongoose";
import { ref } from "process";

const orderSchema = new Schema({
  _id: {
    type: Types.ObjectId,
    auto: true,
  },
  productId: {
    type: Types.ObjectId,
    ref: "Product",
    required: true,
  },
  customerId: {
    type: String,
    ref: "Customer",
    required: true,
  },
});

export type Order = {
  _id: string;
  productId: string;
  customerId: string;
};

export default model<Order | null>("Order", orderSchema);
