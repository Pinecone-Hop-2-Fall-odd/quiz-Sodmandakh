// "use client";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";

// export default function PlayQuiz() {
//   const [quizs, setQuizs] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [incorrectAnswers, setIncorrectAnswers] = useState(0);
//   const [index, setIndex] = useState(0);

//   const searchParams = useSearchParams();
//   const lesson = searchParams.get("lesson");

//   useEffect(() => {
//     const fetchQuizs = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8000/quiz/${lesson}`
//         );
//         setQuizs(response.data.quizzes);
//       } catch (error) {
//         console.error("Error fetching quizs:", error);
//       }
//     };

//     fetchQuizs();
//   }, [lesson]);

//   function CheckAnswer(isCorrect) {

//     if (isCorrect == quizs[0].questions[index].correctAnswer) {
//       setCorrectAnswers((prevCorrect) => prevCorrect + 1);
//     } else {
//       setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
//     }
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   }
//   const totalQuestions = quizs[0]?.questions?.length;
//   console.log("quizs", quizs);

//   if (currentQuestionIndex === totalQuestions) {
//     return (
//       <div className="bg-blue-400 h-screen flex items-center justify-center text-white">
//         <div className="bg-gray-800 p-8 rounded-lg">
//           <h1 className="text-3xl font-bold mb-4">Quiz Completed</h1>
//           <p>
//             Score: {correctAnswers}/{totalQuestions}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (quizs.length === 0) {
//     return (
//       <div className="bg-blue-400 h-screen flex items-center justify-center text-white">
//         <div className="bg-gray-800 p-8 rounded-lg">
//           <h1 className="text-3xl font-bold mb-4">Loading...</h1>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-blue-400 h-screen flex items-center justify-center text-white">
//       <div className="bg-gray-800 p-8 rounded-lg">
//         <h1 className="text-3xl font-bold mb-4">
//           Question {currentQuestionIndex + 1} of {totalQuestions}
//         </h1>
//         <h2 className="text-xl">
//           {quizs[0]?.questions?.[index]?.question}
//         </h2>
//         <div>
//           {quizs[0]?.questions?.[index]?.answers.map(
//             (answer, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   CheckAnswer(
//                     quizs[0]?.questions?.[index]
//                       ?.correctAnswer
//                   );
//                   setIndex((prev) => (prev += 1));
//                 }}
//                 className="flex flex-col mb-2 bg-blue-400 p-2 rounded-md hover:bg-blue-500 w-1/3"
//               >
//                 {answer}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PlayQuiz() {
  const [quizs, setQuizs] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const searchParams = useSearchParams();
  const lesson = searchParams.get("lesson");

  useEffect(() => {
    if (window) {
      const token = localStorage.getItem("token");

      if (token === null) {
        router.push("/login");
        return;
      }
    }

    const fetchQuizs = async () => {
      try {
        const response = await axios.get(
          `${process.env.BACK_END_URL}/quiz/${lesson}`
        );
        setQuizs(response.data.quizzes);
      } catch (error) {
        console.error("Error fetching quizs:", error);
      }
    };

    const fetchData = async () => {
      try {
        const data = await axios.get(`${process.env.BACK_END_URL}/user/`, {
          headers: {
            token: token,
          },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchQuizs();
    fetchData();
  }, [lesson][(userData.email, userData.password)]);

  function CheckAnswer(selectedAnswer) {
    const correctAnswer =
      quizs[currentQuestionIndex]?.questions?.[0]?.correctAnswer;
    // console.log(quizs[currentQuestionIndex]);
    // console.log(selectedAnswer, correctAnswer);

    if (selectedAnswer === correctAnswer) {
      setCorrectAnswers((prevCorrect) => prevCorrect + 1);
    } else {
      setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  // console.log(correctAnswers)

  const totalQuestions = quizs?.length;

  if (currentQuestionIndex === totalQuestions) {
    return (
      <div className="bg-[#e1d7c3] h-screen flex items-center justify-center text-white">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Quiz Completed</h1>
          <div>
            <p>
              Score: {correctAnswers}/{totalQuestions}
            </p>
            <button
              className="bg-[#bfaa8a] text-white py-2 px-4 rounded hover:bg-[#a58d6f] mt-4"
              onClick={() => {
                router.push("/ChooseQuiz");
              }}
            >
              back
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizs.length === 0) {
    return (
      <div className="bg-[#e1d7c3] h-screen flex items-center justify-center text-white">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#e1d7c3] h-screen flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </h1>
        <h2 className="text-xl mb-[10px]">
          {quizs[currentQuestionIndex]?.questions?.[0]?.question}
        </h2>
        <div>
          {quizs[currentQuestionIndex]?.questions?.[0]?.answers.map(
            (answer, index) => (
              <button
                key={index}
                onClick={() => CheckAnswer(index)}
                className="flex flex-col mb-2 bg-[#bfaa8a] p-2 rounded-md hover:bg-[#a58d6f] w-full"
              >
                <p className="flex justify-center">{answer}</p>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
