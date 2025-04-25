"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const customer_controller_1 = require("../controllers/customer.controller");
const product_controller_1 = require("../controllers/product.controller");
const order_controller_1 = require("../controllers/order.controller");
// Finish the resolvers
exports.resolvers = {
    Query: {
        products: () => (0, product_controller_1.getProducts)(),
        customers: () => (0, customer_controller_1.getCustomers)(),
        orders: () => (0, order_controller_1.getOrders)(),
        getProductById: (_, { id }) => (0, product_controller_1.getProductById)(id),
        getCustomerById: (_, { id }) => (0, customer_controller_1.getCustomerById)(id),
    },
    Product: {
        customers: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            const customers = yield (0, customer_controller_1.getCustomers)();
            const orders = yield (0, order_controller_1.getOrders)();
            const customerOrders = orders.filter((order) => String(order.productId) === id);
            const productCustomers = customerOrders.map((order) => {
                return customers.find((customer) => customer.id === order.customerId);
            });
            return productCustomers;
        }),
    },
    Customer: {
        products: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            const products = yield (0, product_controller_1.getProducts)();
            const orders = yield (0, order_controller_1.getOrders)();
            const customerOrders = orders.filter((order) => {
                return String(order.customerId) === id;
            });
            const customerProducts = customerOrders.map((order) => {
                return products.find((product) => {
                    console.log({
                        productId: product.id,
                        orderCustomerId: order.customerId,
                    });
                    return String(product.id) === String(order.productId);
                });
            });
            return customerProducts;
        }),
    },
    Order: {
        product: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            const orders = yield (0, order_controller_1.getOrders)();
            const order = orders.find((order) => order.id === id);
            if (!order) {
                return null;
            }
            const products = yield (0, product_controller_1.getProducts)();
            const product = products.find((product) => String(product.id) === String(order.productId));
            return product;
        }),
        customer: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            const orders = yield (0, order_controller_1.getOrders)();
            const order = orders.find((order) => order.id === id);
            if (!order) {
                return;
            }
            const customers = yield (0, customer_controller_1.getCustomers)();
            const customer = customers.find((customer) => customer.id === order.customerId);
            return customer;
        }),
    },
    Mutation: {
        addProduct: (_, { productName, productPrice }) => {
            return (0, product_controller_1.createProduct)({ productName, productPrice });
        },
        editProduct: (_, { _id, productName, productPrice }) => {
            return (0, product_controller_1.updateProduct)(_id, { productPrice, productName });
        },
        removeProduct: (_, id) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, product_controller_1.deleteProduct)(id);
        }),
        addCustomer: (_, customer) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, customer_controller_1.createCustomer)(customer);
        }),
        editCustomer: (_, customer) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, customer_controller_1.updateCustomer)(customer._id, customer);
        }),
        removeCustomer: (_, id) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, customer_controller_1.deleteCustomer)(id);
        }),
        addOrder: (_, order) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, order_controller_1.createOrder)(order);
        }),
        editOrder: (_, order) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, order_controller_1.updateOrder)(order._id, order);
        }),
        removeOrder: (_, id) => __awaiter(void 0, void 0, void 0, function* () {
            return yield (0, order_controller_1.deleteOrder)(id);
        }),
    },
};
