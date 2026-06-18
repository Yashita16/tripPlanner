import React from "react";
import TopBar from "../component/TopBar";
import { useTripContext } from "../context/TripsContext";

const Trips = () => {
  const { trips, loading, filter, setFilter, fetchTrips } =
    useTripContext();

  const filters = [
    "all",
    "upcoming",
    "ongoing",
    "past",
    "cancelled",
  ];

  const getStatus = (trip) => {
    if (trip.status === "cancelled") return "Cancelled";

    const today = new Date();
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);

    if (end < today) return "Past";
    if (start > today) return "Upcoming";

    return "Ongoing";
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-green-100 text-green-700";
      case "Ongoing":
        return "bg-yellow-100 text-yellow-700";
      case "Past":
        return "bg-gray-200 text-gray-700";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <TopBar />
        <div className="flex items-center justify-center h-[70vh]">
          <h1 className="text-2xl font-semibold text-gray-600">
            Loading Trips...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />

      <div className="max-w-7xl mx-auto px-5 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            My Trips
          </h1>

          <p className="text-gray-500 mt-2">
            All your upcoming, ongoing, past and cancelled trips in
            one place.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => {
                setFilter(item);
                fetchTrips(item);
              }}
              className={`px-5 py-2 rounded-full font-medium transition capitalize cursor-pointer ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow hover:bg-blue-50 text-gray-700"
              }`}
            >
              {item} Trips
            </button>
          ))}
        </div>

        {/* Empty State */}
        {trips.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No {filter} trips found.
            </h2>

            <p className="text-gray-500 mt-2">
              Create a new trip or join an existing one.
            </p>
          </div>
        ) : (
          /* Trip Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {trips.map((trip) => {
              const status = getStatus(trip);

              return (
                <div
                  key={trip._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-5">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {trip.title}
                      </h2>

                      <p className="text-gray-500 text-sm">
                        {trip.destination}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(
                        status
                      )}`}
                    >
                      {status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="space-y-3 text-gray-700">

                    <div className="flex justify-between">
                      <span>📅 Start</span>
                      <span>
                        {new Date(
                          trip.startDate
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>🏁 End</span>
                      <span>
                        {new Date(
                          trip.endDate
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>👥 Travelers</span>
                      <span>{trip.travelers}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>💰 Budget</span>
                      <span>₹{trip.budget}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>🔑 Trip Code</span>
                      <span className="font-semibold">
                        {trip.tripcode}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">
                    <button className="flex-1 py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                      View Details
                    </button>

                    {status !== "Cancelled" && (
                      <button className="px-4 py-3 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;