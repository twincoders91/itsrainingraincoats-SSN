const mongoose = require("mongoose");
const CreateWorkerAccountSchema = new mongoose.Schema({
  name_salutation: { type: String, enum: ["Mr", "Ms", "Mrs"] },
  full_name: { type: String, required: true, minLength: 5 },
  nationality: { type: String, required: true, enum: [] },
  resident_status: {
    type: String,
    required: true,
    enum: [
      "Work Permit",
      "S Pass",
      "Employment Pass",
      "Permanent Resident",
      "Citizen",
    ],
  },
  address: { type: String, required: true },
  address_unitnumber: { type: String },
  address_postcode: { type: Number, required: true },
  address_dormitory: { type: String },
  contact_number: { type: Number, maxLength: 8 },
  tshirt_size: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  shoe_size: {
    type: Number,
    required: true,
    enum: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
  },
  diet: {
    type: String,
    required: true,
    enum: ["None", "Vegetarian", "Halal", "No Seafood", "No Nuts"],
  },
});

const CreateWorkerAccount = mongoose.model(
  "CreateWorkerAccount",
  CreateWorkerAccountSchema
);

module.exports = CreateWorkerAccount;
