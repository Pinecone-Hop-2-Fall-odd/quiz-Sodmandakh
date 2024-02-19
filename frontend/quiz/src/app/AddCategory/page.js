"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddCategory() {
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleAddCategory = async () => {
    try {
      const response = await axios.post(`${process.env.BACK_END_URL}/category`, {
        category,
      });
      console.log(response.data.category);
    } catch (error) {
      console.error(error.response.data.error); 
    }
    alert("Added category successfully!");
    window.location.reload(false);
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
  },[]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e1d7c3]">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Add a New Category
        </h1>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-black">
            Category Name
          </label>
          <input
            type="text"
            placeholder="Enter category name"
            className="w-full p-2 border rounded text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-[#bfaa8a] text-white py-2 px-4 rounded hover:bg-[#a58d6f] mr-4"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
          <button className="bg-[#bfaa8a] text-white py-2 px-4 rounded hover:bg-[#a58d6f]"
          onClick={() => {
            router.push(
              "/"
            );  
          }}>
            back
          </button>
        </div>
      </div>
    </div>
  );
}
