const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
      minlength: [5, "Product name must be atleast 5 character"],
      trim: true,
    },
    description: {
      type: String,
      ninlength: [5, "Product description must be atleast 5 character"],
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      enum: ["veg", "non-veg", "drinks", "sides"],
      default: "veg",
    },
    inStock: {
      type: Boolean,
      required: [true, "In stock is required"],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.Schema("Product", productSchema);

module.exports = Product;
