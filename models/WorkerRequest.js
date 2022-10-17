const mongoose = require("mongoose");
const WorkerRequestSchema = new mongoose.Schema(
  {
    account_id: { type: Number, unique: true },
    // ------------------------------------------------------------------------------------------------------------------
    // item_request_category & item_request_detail set to "true" in Phase 1. When text/image feature is launched, to deactivate to "false"
    // *** check with team whether want to limit to 3 items ***
    item_request_category: [
      {
        type: String,
        required: true,
        enum: [
          "Appliances",
          "Food & Drinks",
          "Personal Care",
          "Clothing",
          "Electronics",
          "Sports & Games",
          "Luggage",
        ],
      },
    ],
    item_request_details: [
      {
        type: String,
        stock: Number,
        waitingtime: String,
        required: true,
        enum: [
          "Fruit Blender",
          "Microwave",
          "Iron & Ironing board",
          "Fridge",
          "Water Heater",
          "Toaster Oven",
          "Kettle",
          "Fan",
          "Washing Machine",
          "Rice Cooker",
          "Rice/Noodles",
          "Hot Meals",
          "Soap Bar",
          "Toothbrush",
          "Spectacles",
          "Shaver",
          "Towel",
          "Water Bottle",
          "Blankets",
          "Shirts",
          "Suits",
          "Pants",
          "Caps",
          "Safety Boots",
          "Covered Shoes",
          "Sunglasses",
          "Raincoat",
          "Bluetooth Earpieces",
          "Smartphone",
          "Portable Power Bank",
          "Laptop",
          "Data Card",
          "Extension Cord",
          "Dumbbells",
          "Cricket Gear",
          "Board Games",
          "Bicycle",
          "Backpacks",
          "Duffel Bags",
          "Luggages",
        ],
      },
    ],
    item_text_request: { type: String },
    item_photo_request: { data: Buffer, contentType: String },
    item_delivery: {
      type: String,
      required: true,
      enum: ["Delivery", "Pick Up at InspIRRe"],
    },
    delivery_address: { type: String },
  },
  { timestamps: true }
);

const WorkerRequest = mongoose.model("WorkerRequest", WorkerRequestSchema);

module.exports = WorkerRequest;
