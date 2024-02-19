"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import DropDownProfile from "./DropDownProfie/DropDownProfile";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [OpenProfile, setOpenProfile] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          setIsLogin(true);
          const data = await axios.get(`${process.env.BACK_END_URL}/user/`, {
            headers: {
              token: token,
            },
          });
          console.log(data);
        } else {
          setIsLogin(false);
        }
        if (token === null) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [userData.email, userData.password]);

  const handlePlayClick = () => {
    if (isLogin) {
      router.push("/ChooseQuiz");
    } else {
      alert("You need to log in to play.");
    }
  };

  const handleAddCategoryClick = () => {
    if (isLogin) {
      router.push("/AddCategory");
    } else {
      alert("You need to log in to add a Category.");
    }
  };

  const handleAddQuizClick = () => {
    if (isLogin) {
      router.push("/AddQuiz");
    } else {
      alert("You need to log in to add a quiz.");
    }
  };

  const handleQuestionMarkClick = () => {
    setShowTutorial(true);
  };

  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <div className="bg-[#e1d7c3] w-[100vw] h-[100vh]">
      <div className="bg-[#8e735b] text-white p-4">
        <div className="mx-auto flex justify-between items-center p-3">
          <div className="text-2xl font-semibold">SodooQuiz</div>
          <div className="flex items-center">
            <Image
            src="/questionmark.svg"
            width={40}
            height={40}
            alt="Tutorial"
              className="mr-5 text-2xl cursor-pointer m"
              onClick={handleQuestionMarkClick}
            />
            <Image
              src="/account.svg"
              width={40}
              height={40}
              alt="User Account"
              onClick={() => setOpenProfile((prev) => !prev)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {OpenProfile && <DropDownProfile />}
      <div className="items-center justify-center flex flex-col mt-[300px]">
        <button
          className="bg-[#bfaa8a] text-white w-[410px] h-[60px] py-2 rounded-2xl hover:bg-[#a58d6f] items-center justify-center flex"
          onClick={handlePlayClick}
        >
          Play
        </button>
        <div className="flex row">
          <button
            className="bg-[#bfaa8a] text-white w-[200px] h-[60px] py-2 rounded-2xl hover:bg-[#a58d6f] items-center justify-center flex mt-[30px] mr-[5px]"
            onClick={handleAddCategoryClick}
          >
            Add Category
          </button>
          <button
            className="bg-[#bfaa8a] text-white w-[200px] h-[60px] py-2 rounded-2xl hover:bg-[#a58d6f] items-center justify-center flex mt-[30px] ml-[5px]"
            onClick={handleAddQuizClick}
          >
            Add Quiz
          </button>
        </div>
      </div>

      {showTutorial && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-[400px]">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              How to Use SodooQuiz
            </h2>
            <p className="text-black">1. You need to go to <Link href={`/AddCategory`}>ADD CATEGORY</Link> and make ur category.</p>
            <p className="text-black">2. After u add your category go to <Link href={`/AddQuiz`}>ADD QUIZ</Link> and select ur category and 'select category button' once u select ur category u can make ur quiz.</p>
            <p className="text-black">3. Lastly after u finish creating the quiz u can go to <Link href={`/ChooseQuiz`}>CHOOSE QUIZ</Link> to select ur category and play</p>
            <h1 className="text-black flex justify-center">ENJOY!</h1>
            <button
              className="mt-4 bg-[#bfaa8a] text-white px-4 py-2 rounded-md hover:bg-[#a58d6f]"
              onClick={handleCloseTutorial}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
