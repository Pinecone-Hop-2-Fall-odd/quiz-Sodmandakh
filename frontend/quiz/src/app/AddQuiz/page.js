// "use client";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function AddQuiz() {
//   const [questions, setQuestions] = useState([
//     {
//       question: "",
//       options: ["", "", "", ""],
//       correctOption: 0,
//       category: "History",
//     },
//   ]);
//   const [saveQuestions, setSaveQuestions] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/categories");
//         setCategories(response.data.categories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const addQuestion = () => {
//     setIndex((prev) => prev + 1);
//     setQuestions((prevQuestions) => [
//       ...prevQuestions,
//       {
//         question: '',
//         options: ["", "", "", ""],
//         correctOption: 0,
//         category: '',
//       },
//     ]);
//   };

//   const saveQuiz = async () => {
//     try {
//       await axios.post("http://localhost:8000/quiz", { questions });

//       setSaveQuestions([...saveQuestions, questions]);
//       setQuestions([
//         {
//           question: '',
//           options: ["", "", "", ""],
//           correctOption: 0,
//           category: '',
//         },
//       ]);
//       setIndex(0);
//     } catch (error) {
//       console.error("Error saving quiz:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h1 className="text-2xl font-bold mb-4 text-black">
//           Create a New Quiz
//         </h1>

//         <select
//           className="p-2 border rounded text-black mb-2"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="index">Select a category</option>
//           {categories.map((category) => (
//             <option key={category.category} value={category.category}>
//               {category.category}
//             </option>
//           ))}
//         </select>

//         <div key={index} className="mb-4">
//           <label className="block font-semibold mb-2 text-black">{`Question ${
//             index + 1
//           }`}</label>
//           <input
//             type="text"
//             placeholder="Enter your question"
//             className="w-full p-2 border rounded text-black"
//             value={questions[index].question}
//             onChange={(e) => {
//               setQuestions((prevQuestions) => {
//                 const updatedQuestions = [...prevQuestions];
//                 updatedQuestions[index].question = e.target.value;
//                 return updatedQuestions;
//               });
//             }}
//           />

//           <div className="mt-2">
//             {questions[index].options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 placeholder={`Option ${optionIndex + 1}`}
//                 className="w-full p-2 mt-2 border rounded text-black"
//                 value={option.value}
//                 onChange={(e) => {
//                   setQuestions((prevQuestions) => {
//                     const updatedQuestions = [...prevQuestions];
//                     updatedQuestions[index].options[optionIndex] =
//                       e.target.value;
//                     return updatedQuestions;
//                   });
//                 }}
//               />
//             ))}
//           </div>

//           <label className="block mt-2 font-semibold text-black">
//             Correct Option:
//           </label>
//           <select
//             className="w-full p-2 border rounded mt-2 text-black"
//             value={questions[index].correctOption}
//             onChange={(e) => {
//               setQuestions((prevQuestions) => {

//                 const updatedQuestions = [...prevQuestions];
//                 updatedQuestions[index].correctOption = e.target.value;
//                 return updatedQuestions;
//               });
//             }}
//           >
//             {questions[index].options.map((_, optionIndex) => (
//               <option key={optionIndex} value={optionIndex}>
//                 {`Option ${optionIndex + 1}`}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             onClick={addQuestion}
//           >
//             Add Question
//           </button>
//           <button
//             className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600"
//             onClick={saveQuiz}
//           >
//             Save Quiz
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddQuiz() {
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
      category: "",
    },
  ]);
  const [saveQuestions, setSaveQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  console.log(questions);

  const saveQuiz = async () => {
    try {
      await axios.post("http://localhost:8000/quiz", {
        questions,
        category: selectedCategory,
      });

      setSaveQuestions([
        ...saveQuestions,
        { questions, category: selectedCategory },
      ]);
      setQuestions([
        {
          question: "",
          options: ["", "", "", ""],
          correctOption: 0,
        },
      ]);
      setIndex(0);
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Create a New Quiz
        </h1>

        <select
          className="p-2 border rounded text-black mb-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled={selectedCategory.length !== 0}
        >
          <option value="index">Select a category</option>
          {categories.map((category) => (
            <option key={category.category} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        <div key={index} className="mb-4">
          <label className="block font-semibold mb-2 text-black">{`Question ${
            index + 1
          }`}</label>
          <input
            type="text"
            placeholder="Enter your question"
            className="w-full p-2 border rounded text-black"
            value={questions[index].question}
            onChange={(e) => {
              setQuestions((prevQuestions) => {
                const updatedQuestions = [...prevQuestions];
                updatedQuestions[index].question = e.target.value;
                return updatedQuestions;
              });
            }}
          />

          <div className="mt-2">
            {questions[index].options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                placeholder={`Option ${optionIndex + 1}`}
                className="w-full p-2 mt-2 border rounded text-black"
                value={option.value}
                onChange={(e) => {
                  setQuestions((prevQuestions) => {
                    const updatedQuestions = [...prevQuestions];
                    updatedQuestions[index].options[optionIndex] =
                      e.target.value;
                    return updatedQuestions;
                  });
                }}
              />
            ))}
          </div>

          <label className="block mt-2 font-semibold text-black">
            Correct Option:
          </label>
          <select
            className="w-full p-2 border rounded mt-2 text-black"
            value={questions[index].correctOption}
            onChange={(e) => {
              setQuestions((prevQuestions) => {
                const updatedQuestions = [...prevQuestions];
                updatedQuestions[index].correctOption = e.target.value;
                return updatedQuestions;
              });
            }}
          >
            {questions[index].options.map((_, optionIndex) => (
              <option key={optionIndex} value={optionIndex}>
                {`Option ${optionIndex + 1}`}
              </option>
            ))}
          </select>
        </div>

        <div>

          <button
            className="bg-green-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600"
            onClick={saveQuiz}
          >
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
