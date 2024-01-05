import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt"
export const users = [];

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find({});
  res.status(200).json({ users: users_data })
}

export const getUser = async (req, res) => {
  const reqUser = req.user
  try {
    const user = await UserModel.findById({_id: reqUser.user_id});
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(50).json({ error: error.message });
  }
}

export const createUser = async (req, res) => {
  try {
    const body = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = await UserModel.create({
      username: body.username,
      email: body.email,  
      password: hashedPassword,
    }); 

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

