"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
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
exports.default = (0, mongoose_1.model)("Product", productSchema);
