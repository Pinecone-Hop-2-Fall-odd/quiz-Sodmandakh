"use client"

import React, { useState } from 'react';
import axios from 'axios';

export default function AddCategory() {
  const [category, setCategory] = useState('');

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('http://localhost:8000/category', { category });
      console.log(response.data.category);
    } catch (error) {
      console.error(error.response.data.error);
    }
    window.location.reload(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-black"> Add a New Category </h1>
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-black"> Category Name </label>
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
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddCategory}
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

