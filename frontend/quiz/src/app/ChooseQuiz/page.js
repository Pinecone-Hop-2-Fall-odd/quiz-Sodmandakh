// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function ChooseQuiz() {
//   const router = useRouter();
//   const [categories, setCategories] = useState([]);
//   const [hoveredCategory, setHoveredCategory] = useState();
//   // camelCase
//   // skever-case
//   // lower_case
//   // UPPERCASE

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

//   const deleteCategoryAndQuizzes = async (categoryId) => {
//     try {
//       await axios.delete(`http://localhost:8000/categories/${categoryId}`);

//       const response = await axios.get(
//         `http://localhost:8000/quizzes?categoryId=${categoryId}`
//       );
//       const quizzes = response.data.quizzes;

//       for (const quiz of quizzes) {
//         await axios.delete(`http://localhost:8000/quizzes/${quiz._id}`);
//       }

//       const updatedCategories = categories.filter(
//         (category) => category._id !== categoryId
//       );
//       setCategories(updatedCategories);
//     } catch (error) {
//       console.error("Error deleting category and quizzes:", error);
//     }
//   };

//   return (
//     <div className="bg-blue-400 h-screen flex flex-col items-center justify-center text-white">
//       <div className="mb-12">
//         <h1 className="text-6xl font-bold">Choose a Quiz</h1>
//       </div>
//       <div className="flex flex-wrap gap-12">
//         {categories.map((category) => (
//           <div
//             key={category._id}
//             className="relative group"
//             onMouseEnter={() => setHoveredCategory(category._id)}
//             onMouseLeave={() => setHoveredCategory(null)}
//           >
//             <div
//               className="p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center"
//               onClick={() => {
//                 router.push(
//                   `http://localhost:3000/playQuiz?lesson=${category.category}`
//                 );
//               }}
//             >
//               <span className="text-lg">{category.category}</span>
//             </div>
//             {hoveredCategory === category._id && (
//               <button
//                 className="absolute top-2 right-2 p-2 rounded-full bg-white"
//                 onClick={() => deleteCategoryAndQuizzes(category._id)}
//               >
//                 <Image
//                   src="/trashcan.svg"
//                   alt="Trash Can"
//                   width={24}
//                   height={24}
//                 />
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ChooseQuiz() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.BACK_END_URL}/categories`
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deleteCategoryAndQuizzes = async (categoryId) => {
    try {
      await axios.delete(
        `${process.env.BACK_END_URL}/categories/${categoryId}`
      );

      const updatedCategories = categories.filter(
        (category) => category._id !== categoryId
      );
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error deleting category and quizzes:", error);
    }
    fetchCategories();
  };
  
useEffect(() => {
    const fetchData = async () => {
      if (window) {
        const token = localStorage.getItem("token");
  
        if (token === null) {
          router.push("/login");
          return;
        }
      } 
    };

    fetchData();
    fetchCategories();
  },[]);
  return (
    <div className="bg-[#e1d7c3] h-screen flex flex-col items-center justify-center text-white relative">
      <button
        className="bg-[#bfaa8a] text-white py-4 px-10 rounded-lg absolute top-4 left-4 hover:bg-[#a58d6f]  "
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <div className="mb-12">
        <h1 className="text-6xl font-bold">Choose a Quiz</h1>
      </div>
      <div className="flex flex-wrap gap-12">
        {categories.map((category) => (
          <div
            key={category._id}
            className="relative group"
            onMouseEnter={() => setHoveredCategory(category._id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <Link
              href={`/playQuiz?lesson=${category.category}`}
              className="p-20 h-40 flex items-center justify-center rounded-lg bg-[#bfaa8a] hover:bg-[#a58d6f] cursor-pointer text-center"
              // onClick={sendQuiz(category)}
            >
              <span className="text-lg">{category.category}</span>
            </Link>
            {hoveredCategory === category._id && (
              <button
                className="absolute top-2 right-2 p-2 rounded-full bg-white"
                onClick={() => deleteCategoryAndQuizzes(category._id)}
              >
                <Image
                  src="/trashcan.svg"
                  alt="Trash Can"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
