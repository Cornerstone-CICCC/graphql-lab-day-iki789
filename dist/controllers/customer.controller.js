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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerById = exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomers = void 0;
const customer_model_1 = __importDefault(require("../models/customer.model"));
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.default.find();
});
exports.getCustomers = getCustomers;
const createCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    const newCustomer = new customer_model_1.default(customer);
    return yield newCustomer.save();
});
exports.createCustomer = createCustomer;
const updateCustomer = (id, customer) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.default.findByIdAndUpdate(id, customer);
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.default.findByIdAndDelete(id);
});
exports.deleteCustomer = deleteCustomer;
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield customer_model_1.default.findById(id);
});
exports.getCustomerById = getCustomerById;
