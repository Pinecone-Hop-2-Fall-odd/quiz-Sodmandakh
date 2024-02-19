"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const router = useRouter();

  const handleLogin = async () => {
    const response = await axios
      .post(`${process.env.BACK_END_URL}/login`, {
        email: loginData.email,
        password: loginData.password,
      })
      console.log(response, "RESPONSE")
    if (response?.data?.token) {
      localStorage.setItem("token", response.data.token);
      router.push("/");
    }
    else(alert("wrong "))
  };
  function Alert() {
    alert("This function is coming soon");
  }

  return (
    <div className="bg-[#e1d7c3] h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>

        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              email
            </label>
            <input
              type="text"
              name="login-username"
              className="w-full p-2 border rounded-md text-black"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded-md text-black"
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#bfaa8a] text-white p-2 rounded-md hover:bg-[#a58d6f]"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
        <div>
          <Link href="/signup" className="text-black flex justify-center mt-4">
            Dont have an account?
          </Link>
          <p className="text-black flex justify-center mt-1 cursor-pointer" onClick={Alert}>
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}
