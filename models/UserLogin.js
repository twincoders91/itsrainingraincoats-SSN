const mongoose = require("mongoose");
const UserLoginSchema = new mongoose.Schema({
  account_id: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_type: { type: String, enum: ["Donor", "Worker", "Volunteer"] },
});

const UserLogin = mongoose.model("UserLogin", UserLoginSchema);
module.exports = UserLogin;
