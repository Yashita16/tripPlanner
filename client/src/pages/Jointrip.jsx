import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Jointrip = () => {
  const [tripCode, setTripCode] = useState("");
  const navigate=useNavigate();

   const handleJoin = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/jointrips/jointrip",
        {
          tripcode: tripCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      alert("Trip joined successfully!");
      navigate('/');
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Join a Trip
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Enter the trip code shared by your friend.
        </p>

        <div className="mt-8">
          <label className="block text-gray-700 font-medium mb-2">
            Trip Code
          </label>

          <input
            type="text"
            value={tripCode}
            onChange={(e) => setTripCode(e.target.value)}
            placeholder="Enter trip code"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleJoin}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
        >
          Join Trip
        </button>
      </div>
    </div>
  );
};

export default Jointrip;