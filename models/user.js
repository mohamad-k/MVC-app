const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  age: Number,
  country: String,
  email: String,
  password: String,
  created_at: Date
});
const User = mongoose.model("User", userSchema);
module.exports = User;
