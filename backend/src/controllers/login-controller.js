import { users } from "./users-controller.js";
import { UserModel } from "../models/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  // password, email
  const body = req.body;
  console.log(body);
  if (body.email === undefined) {
    res.status(403).json({ message: "Email required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ message: "Password required" });
    return;
  }

  const oneUser = await UserModel.findOne({ email: body.email });
  if (!oneUser) {
    res.status(405).json({ message: "User not found" });
  } else {
    if (await bcrypt.compare(body.password, oneUser.password)) {
      const token = jwt.sign(
        { user_id: oneUser._id, email: oneUser.email },
        "MySuperDuperPrivateKey",
        {
          expiresIn: "24h",
        }
      );

      res.status(200).json({ token: token});
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};
