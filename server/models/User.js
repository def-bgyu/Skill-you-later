const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // from Firebase
  email: { type: String, required: true },
  displayName: { type: String },
  canTeach: [String],
  wantToLearn: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
