"use client";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useRouter } from "next/navigation";

export default function DropDownProfile() {
  const [menuItem, setMenuItem] = useState();
  const router = useRouter();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    fetch(`http://localhost:8000/user` , {headers : {"token" : getToken}})
      .then((response) => response.json())
      .then((res) => setMenuItem(res.user))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function deleteItem() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div className="flex flex-col dropDownProfile absolute">
      <div className="flex flex-col gap-4 text-black">
        <div className="text-lg font-bold">User Profile</div>
        <div>
          <span className="font-semibold">Username:</span> {menuItem?.username}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {menuItem?.email}
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
          onClick={deleteItem}>
          Log Out
        </button>
      </div>
    </div>
  );
}
