import { Schema, model, Types } from "mongoose";

const customerSchema = new Schema({
  _id: {
    type: Types.ObjectId,
    auto: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export type Customer = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export default model<Customer | null>("Customer", customerSchema);
