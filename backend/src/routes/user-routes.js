import express from "express";
import { createUser, getAllUsers, getUser } from "../controllers/users-controller.js";
import { login } from "../controllers/login-controller.js";
import { verifyToken } from "../middleware/auth.js";
    
export const userRouter = express.Router();

// post => createUser
// get => getAllUser, getUser
// put => updateUser
// delete => deleteUser

userRouter.get('/users', verifyToken, getAllUsers);
userRouter.get('/user',verifyToken,  getUser);
userRouter.post('/user', createUser);
userRouter.post('/login', login)
// userRouter.put('/user/:id', getAllUsers);
// userRouter.delete('/user/:id', getAllUsers); 