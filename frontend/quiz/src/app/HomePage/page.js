"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import DropDownProfile from "../DropDownProfie/DropDownProfile";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [OpenProfile, setOpenProfile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          setIsLogin(true);
          const data = await axios.get(`http://localhost:8000/user/`, {
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

  return (
    <div className="bg-blue-400 w-[100vw] h-[100vh]">
      {/* <img src="Zurag.jpeg" className="z-0 position absolute "></img> */}
      <div className="bg-gray-800 text-white p-4">
        <div className=" mx-auto flex justify-between items-center p-3">
          <div className="text-2xl font-semibold">SodooQuiz.mn</div>
          <div>
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
          className="bg-red-500 text-white w-[800px] h-[60px] py-2 rounded-3xl hover:bg-red-600 items-center justify-center flex"
          onClick={handlePlayClick}
        >
          Play
        </button>

        <button
          className="bg-red-500 text-white w-[800px] h-[60px] py-2 rounded-3xl hover:bg-red-600 items-center justify-center flex mt-[30px]"
          onClick={handleAddCategoryClick}
        >
          Add Category
        </button>

        <button
          className="bg-red-500 text-white w-[800px] h-[60px] py-2 rounded-3xl hover:bg-red-600 items-center justify-center flex mt-[30px]"
          onClick={handleAddQuizClick}
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
}
