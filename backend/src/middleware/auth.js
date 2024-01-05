import jwt from "jsonwebtoken";
import { getAllUsers } from "../controllers/users-controller.js";


export const verifyToken = ( req, res, next) => {
    const token = 
    req.body.token || req.query.token || req.headers["token"];

    if (!token) {
        return res.status(403).json({ success: false, message: "user token oruulah shaardlagtai"})
    }
    try {
        const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
        req.user = decoded;
    }
        catch (err) {
            return res.status(401).json({ success: getAllUsers, message: "user token buruu"})
        }
        return next();
    }
