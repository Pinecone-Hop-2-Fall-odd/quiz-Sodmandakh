import { CategoryModel } from "../models/category-model.js";
import { QuizModel } from "../models/quiz-model.js";

export const getQuiz = async (req, res) => {
  try {
    const quizs = await QuizModel.find();

    res.status(200).json({ quizs: quizs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    res.status(200).json({ categories });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createQuiz = async (req, res) => {
  console.log(req.body);
  try {
    const { questions } = req.body;

    const quiz = await QuizModel.create({
      questions: questions.map((question) => ({
        question: question.question,
        answers: question.options,
        correctAnswer: question.correctOption,
      })),
      // [
      //   {
      //     question: questions[0].question,
      //     answers:questions[0].options,
      //     correctAnswer: questions[0].correctOption,
      //   },
      // ],
      category: req.body.category,
    });

    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const quizzes = async (req, res) => {
  const params = req.params;

  try {
    const quizzes = await QuizModel.find({ category: params.lesson });
    res.status(200).json({ quizzes: quizzes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteQuiz = async (req, res) => {
  const { id } = req.params;
  const quiz = await QuizModel.findById(id);
  console.log(quiz);
  try {
    const deletedQuiz = await QuizModel.findOneAndDelete(id);
    if (deletedQuiz) {
      res
        .status(200)
        .json({ message: "Quiz deleted successfully", quiz: deletedQuiz });
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
