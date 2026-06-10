import React from "react";

const Intro = () => {
  return (
    <div className="w-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      
      {/* Left Section */}
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Welcome to <span className="text-blue-500">TripPlanner</span>
        </h1>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Here's what's happening with your trips!
        </p>
      </div>

      {/* Right Section */}
      <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer shadow-md">
        + Create New Trip
      </button>
    </div>
  );
};

export default Intro;