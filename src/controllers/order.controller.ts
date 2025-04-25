import orderModel, { Order } from "../models/order.model";

export const getOrders = async () => {
  return await orderModel.find();
};

export const createOrder = async (customer: Order) => {
  const newCustomer = new orderModel(customer);
  return await newCustomer.save();
};

export const updateOrder = async (id: string, order: Partial<Order>) => {
  return await orderModel.findByIdAndUpdate(id, order);
};

export const deleteOrder = async (id: string) => {
  return await orderModel.findByIdAndDelete(id);
};
