"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
        auto: true,
    },
    productId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    customerId: {
        type: String,
        ref: "Customer",
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Order", orderSchema);
