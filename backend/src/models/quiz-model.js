import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questions: [{ question: String, answers: [String], correctAnswer: Number }],
  category: String,
  ownerId: mongoose.SchemaTypes.ObjectId,
});

// Example usage:
// const exampleQuiz = new QuizModel({
//   questions: [
//     {
//       question: "What country",
//       answers: ["Germany", "China"],
//       correctAnswer: 1,
//     },
//   ],
//   category: "History",
// });

export const QuizModel = mongoose.model("Quiz", quizSchema);
