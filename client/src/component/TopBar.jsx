import React from "react";
import { useNavigate } from "react-router-dom";
import NotificationBell from "./NotificationBell";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-primary-bg border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-[10vh] min-h-[70px] px-4 md:px-6 flex items-center justify-between">
        
        <h1
          className="text-xl md:text-2xl font-bold text-primary-text cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-blue-500">Trip</span>Planner
        </h1>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => navigate("/")}
          >
            Dashboard
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => navigate("/trips")}
          >
            Trips
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => navigate("/tasks")}
          >
            Tasks
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => navigate("/expenses")}
          >
            Expenses
          </p>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Notification Bell */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/notifications")}
          >
            <NotificationBell />

            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Auth Buttons */}
          
          <button
            className="text-sm md:text-base text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="hidden sm:block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Register
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around text-sm">
          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/")}
          >
            Dashboard
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/trips")}
          >
            Trips
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/tasks")}
          >
            Tasks
          </p>

          <p
            className="text-gray-600 cursor-pointer hover:text-blue-500"
            onClick={() => navigate("/expenses")}
          >
            Expenses
          </p>
        </div>
      </div>
    </header>
  );
};

export default TopBar;