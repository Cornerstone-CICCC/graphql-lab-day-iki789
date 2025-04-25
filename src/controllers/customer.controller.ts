import customerModel, { Customer } from "../models/customer.model";

export const getCustomers = async () => {
  return await customerModel.find();
};

export const createCustomer = async (customer: Omit<Customer, "id">) => {
  const newCustomer = new customerModel(customer);
  return await newCustomer.save();
};

export const updateCustomer = async (
  id: string,
  customer: Partial<Customer>
) => {
  return await customerModel.findByIdAndUpdate(id, customer);
};

export const deleteCustomer = async (id: string) => {
  return await customerModel.findByIdAndDelete(id);
};

export const getCustomerById = async (id: string) => {
  return await customerModel.findById(id);
};
