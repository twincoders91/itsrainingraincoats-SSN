const mongoose = require("mongoose");

const DonateItemsSchema = new mongoose.Schema({
  account_id: { type: Number, unique: true },
  area_select: {
    type: String,
    required: true,
    enum: [
      "WEST areas",
      "NORTH areas",
      "CENTRAL areas",
      "EAST areas",
      "InspIRRe Warehouse",
    ],
  },
  dropoff: { type: String }, //did not input enum warehouse address. limit on front end
  donate_quantity: {
    type: String,
    required: true,
    enum: ["Small (1-10)", "Bulk(10+)"],
  },
  item_condition: {
    type: String,
    required: true,
    enum: ["Brand New", "Lightly Used", "Heavily Used"],
  },
  item_photo: { data: Buffer, contentType: String },
  item_comment: { type: String },
  status: {
    type: String,
    required: true,
    enum: ["Pending Review", "Pending Drop-Off"],
  },
});

const DonateItems = mongoose.model("DonateItems", DonateItemsSchema);

module.exports = DonateItems;
