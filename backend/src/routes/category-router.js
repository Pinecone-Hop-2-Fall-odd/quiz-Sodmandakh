import  express  from "express";
import {createCategory, deleteCategoryAndQuizzes, getCategory} from "../controllers/category-controller.js"


export const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/category", createCategory);
categoryRouter.delete("/categories/:id", deleteCategoryAndQuizzes);