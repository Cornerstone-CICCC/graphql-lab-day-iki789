import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
} from "../controllers/customer.controller";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} from "../controllers/product.controller";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controller";
import { Customer } from "../models/customer.model";
import { Product } from "../models/product.model";
import { Order } from "../models/order.model";

// Finish the resolvers
export const resolvers = {
  Query: {
    products: () => getProducts(),
    customers: () => getCustomers(),
    orders: () => getOrders(),
    getProductById: (_: unknown, { id }: { id: string }) => getProductById(id),
    getCustomerById: (_: unknown, { id }: { id: string }) =>
      getCustomerById(id),
  },
  Product: {
    customers: async ({ id }: { id: string }) => {
      const customers = await getCustomers();
      const orders = await getOrders();
      const customerOrders = orders.filter(
        (order) => String(order.productId) === id
      );

      const productCustomers = customerOrders.map((order) => {
        return customers.find((customer) => customer.id === order.customerId);
      });

      return productCustomers;
    },
  },
  Customer: {
    products: async ({ id }: { id: string }) => {
      const products = await getProducts();
      const orders = await getOrders();

      const customerOrders = orders.filter((order) => {
        return String(order.customerId) === id;
      });

      const customerProducts = customerOrders.map((order) => {
        return products.find((product) => {
          return String(product.id) === String(order.productId);
        });
      });

      return customerProducts;
    },
  },
  Order: {
    product: async ({ id }: { id: string }) => {
      const orders = await getOrders();
      const order = orders.find((order) => order.id === id);
      if (!order) {
        return null;
      }
      const products = await getProducts();
      const product = products.find(
        (product) => String(product.id) === String(order.productId)
      );

      return product;
    },
    customer: async ({ id }: { id: string }) => {
      const orders = await getOrders();
      const order = orders.find((order) => order.id === id);
      if (!order) {
        return;
      }
      const customers = await getCustomers();
      const customer = customers.find(
        (customer) => customer.id === order.customerId
      );
      return customer;
    },
  },
  Mutation: {
    addProduct: (
      _: unknown,
      { productName, productPrice }: Omit<Product, "_id">
    ) => {
      return createProduct({ productName, productPrice });
    },
    editProduct: (_: unknown, { _id, productName, productPrice }: Product) => {
      return updateProduct(_id, { productPrice, productName });
    },
    removeProduct: async (_: unknown, id: string) => {
      return await deleteProduct(id);
    },

    addCustomer: async (_: unknown, customer: Omit<Customer, "id">) => {
      return await createCustomer(customer);
    },
    editCustomer: async (_: unknown, customer: Customer) => {
      return await updateCustomer(customer._id, customer);
    },
    removeCustomer: async (_: unknown, id: string) => {
      return await deleteCustomer(id);
    },

    addOrder: async (_: unknown, order: Order) => {
      return await createOrder(order);
    },
    editOrder: async (_: unknown, order: Order) => {
      return await updateOrder(order._id, order);
    },
    removeOrder: async (_: unknown, id: string) => {
      return await deleteOrder(id);
    },
  },
};
