"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SignUp() {
  const [SignupData, setSignupData] = useState({});
  const router = useRouter();

  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:8000/user", {
      username: SignupData.username,
      email: SignupData.email,
      password: SignupData.password,
    });
    router.push("/login");
    console.log(data);
  };

  return (
    <div className="bg-blue-400 h-screen w-screen flex items-center justify-center">
      <div className="flex">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>

          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                onChange={(e) =>
                  setSignupData({
                    ...SignupData,
                    username: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setSignupData({
                    ...SignupData,
                    email: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setSignupData({
                    ...SignupData,
                    password: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            <button
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 flex justify-center"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// const router = useRouter();
// const BE_URL = "http://localhost:8000/user";
// const [newUser, setNewUser] = useState({ username: "", password: "", email: "" });

// useEffect(() => {
//   fetchData();
// }, []);

// async function fetchData() {
//   try {
//     const response = await fetch(BE_URL);
//     const data = await response.json();
//     setUsers(data.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// async function handleSubmit(e) {
//   e.preventDefault();
//   try {
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     };

//     await fetch(BE_URL, options);

//     router.push('/login');
//   } catch (error) {
//     console.error("Error submitting data:", error);
//   }
// }
