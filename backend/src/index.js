import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user-routes.js";
import mongoose from "mongoose";
import { quizRouter } from "./routes/quiz-routes.js";
import { categoryRouter } from "./routes/category-router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(categoryRouter)
app.use(quizRouter);

const connectUserDb = async () => {
  await mongoose.connect(
    "mongodb+srv://project-1:sodoo1209@sodmandakh.jhs5zz8.mongodb.net/"
  );
  console.log("database 1 connected");
};
const connectQuizDb = async () => {
  await mongoose.connect(
    "mongodb+srv://project-1:sodoo1209@sodmandakh.jhs5zz8.mongodb.net/"
  );
  console.log("database 2 connected");
};

connectUserDb();
connectQuizDb();

app.listen(8000, () => {
  console.log(`Your server running on: http://localhost:8000`); 
});

// import express from "express";
// import fs from "fs";
// import cors from "cors";

// const PORT = 8080;
// const app = express();

// app.use(cors());

// app.use(express.json());

// //post
// app.post("/user", (request, response) => {
//   const body = request.body;
//   console.log(body);
//   fs.readFile("./data/user.json", (readError, data) => {
//     if (readError) {
//       response.json({
//         status: "read file error",
//       });
//     }

//     let savedData = JSON.parse(data);
//     const newUser = {
//       id: Date.now().toString(),
//       username: body.username,
//       email: body.email,
//       password: body.password

//     };

//     savedData.push(newUser);

//     fs.writeFile(
//       "./data/user.json",
//       JSON.stringify(savedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "error",
//           });
//         } else {
//           response.json({
//             status: "success",
//             data: savedData,
//           });
//         }
//       }
//     );
//   });
// });

// //get

// app.get("/Alluser", (request, response) => {
//   fs.readFile("./data/user.json", (readError, data) => {
//     if (readError) {
//       response.json({
//         status: "error",
//       });
//     } else {
//       const user = JSON.parse(data);

//       response.json({
//         status: "success",
//         data: user,
//       });
//     }
//   });
// });

// app.get("/user/:mail", (request, response) => {
//   const mail = request.params.mail;

//   fs.readFile("./data/user.json", (readError, data) => {
//     if (readError) {
//       response.json({
//         status: "error",
//         message: "Error reading user data",
//       });
//     } else {
//       const users = JSON.parse(data);
//       const user = users.find((u) => u.mail === mail);

//       if (user) {
//         response.json({
//           status: "success",
//           data: user,
//         });
//       } else {
//         response.json({
//           status: "error",
//           message: "User not found",
//         });
//       }
//     }
//   });
// });

// app.post("/login", (request, response) => {
//     const body = request.body

//     // body.username
//     // body.password

//     fs.readFile("./data/user.json", (readError, data) => {
//         if (readError) {
//           response.json({
//             status: "error",
//             message: "Error reading user data",
//           });
//         } else {
//           const users = JSON.parse(data);
//         //   const user = users.find((u) => u.email === email);
//         // if (password)

//         }
//       });
// });

// //delete

// app.delete("/user/:id", (request, response) => {
//   const body = request.params;
//   fs.readFile("./data/user.json", "utf-8", (readError, data) => {
//     let savedData = JSON.parse(data);
//     if (readError) {
//       response.json({
//         status: "read file error",
//       });
//     }
//     const deletedData = savedData.filter((d) => d.id !== body.id);
//     fs.writeFile(
//       "./data/user.json",
//       JSON.stringify(deletedData),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "error",
//           });
//         }
//         response.json({
//           status: "success",
//           data: deletedData,
//         });
//       }
//     );
//   });
// });

// //put

// app.put("/user/:id", (request, response) => {
//   const userId = request.params.id;
//   const body = request.body;

//   fs.readFile("./data/user.json", "utf-8", (readError, data) => {
//     if (readError) {
//       return response.status(500).json({
//         status: "read file error",
//       });
//     }

//     let savedData = JSON.parse(data);

//     const updatedData = savedData.map((user) => {
//       if (user.id === userId) {
//         user.username = body.username;
//         user.password = body.password;
//       }
//       return user;
//     });

//     fs.writeFile(
//       "./data/user.json",
//       JSON.stringify(updatedData),
//       (writeError) => {
//         if (writeError) {
//           return response.status(400).json({
//             status: "write file error",
//           });
//         }

//         response.json({
//           status: "success",
//           data: updatedData,
//         });
//       }
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
