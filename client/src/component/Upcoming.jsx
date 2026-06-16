import React from "react";

const Upcoming = ({ trips }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mt-6 px-4 md:px-8">
      {/* Upcoming Trips */}
      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Upcoming <span className="text-blue-500">Trips</span>
        </h1>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
            {trips.map((trip) => (
              <div
                key={trip._id}
                className="bg-gray-50 p-4 rounded-lg shadow-lg border border-white"
              >
                <h3 className="text-lg font-semibold">{trip.title}</h3>

                <p className="text-gray-600">{trip.destination}</p>

                <p className="text-sm text-gray-500">
                  {new Date(trip.startDate).toLocaleDateString()}
                </p>

                <p className="font-semibold text-green-600">₹{trip.budget}</p>
              </div>
            ))}

            {trips.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">
                No upcoming trips found.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Quick Overview
        </h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary-bg p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-sm text-gray-600">Active Trips</h2>
            <p className="text-2xl font-bold text-indigo-600">3</p>
          </div>

          <div className="bg-primary-bg p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-sm text-gray-600">Pending Tasks</h2>
            <p className="text-2xl font-bold text-orange-500">3</p>
          </div>

          <div className="bg-primary-bg p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-sm text-gray-600">Expenses</h2>
            <p className="text-2xl font-bold text-green-600">₹3,000</p>
          </div>

          <div className="bg-primary-bg p-4 rounded-lg flex flex-col items-center">
            <h2 className="text-sm text-gray-600">Members</h2>
            <p className="text-2xl font-bold text-purple-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;