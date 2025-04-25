import productModel, { Product } from "../models/product.model";

export const getProducts = async () => {
  return await productModel.find();
};

export const createProduct = async (product: Omit<Product, "_id">) => {
  const newProduct = new productModel(product);
  return await newProduct.save();
};

export const updateProduct = async (id: string, product: Partial<Product>) => {
  return await productModel.findByIdAndUpdate(id, product);
};

export const deleteProduct = async (id: string) => {
  return await productModel.findByIdAndDelete(id);
};

export const getProductById = async (id: string) => {
  return await productModel.findById(id);
};
