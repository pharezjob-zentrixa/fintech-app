const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  wallet: {
    USD: { type: Number, default: 0 },
    NGN: { type: Number, default: 0 },
    EUR: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model("User", UserSchema);
