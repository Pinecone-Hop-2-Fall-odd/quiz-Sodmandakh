import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true, required: true},
  createdOn: Date,
  password: { type: String, required: true},
});


export const UserModel = mongoose.model("users", userSchema);