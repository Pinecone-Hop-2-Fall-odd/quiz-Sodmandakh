import express from "express";
import {
  getQuiz,
  createQuiz,
  getCategories,
  quizzes,
  // deleteQuiz
} from "../controllers/quiz-controller.js";
export const quizRouter = express.Router();

quizRouter.get("/quiz", getQuiz);
quizRouter.get("/categories", getCategories);
quizRouter.get("/quiz/:lesson", quizzes);
quizRouter.post("/quiz", createQuiz);
// quizRouter.delete("/quizzes/:_id", deleteQuiz);