import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CreateTrip = () => {
  const [tripName, setTripName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [traveller, setTraveller] = useState("")
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();








  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const tripcode = Math.floor(100000 + Math.random() * 900000);

      const payload = {
        title: tripName,
        destination,
        startDate,
        endDate,
        budget,
        travelers: traveller,
        tripcode
      };

      const res = await axios.post(
        "http://localhost:5000/api/createtrips/createtrip",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);
      alert(`Trip code for this trip is:${tripcode}`)

      navigate("/join-trip");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-primary-bg flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Plan Your Trip ✈️
          </h1>
          <p className="text-gray-500 mt-2">
            Tell us a few details and we'll help you create the perfect
            itinerary.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={onSubmitHandler} >

          {/* Trip Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2" >
              Trip Name
            </label>
            <input
              type="text"
              placeholder="Enter trip name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={tripName} onChange={(e) => setTripName(e.target.value)}
            />
          </div>

          {/* Grid Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Start Date
              </label>
              <input
                type="date"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={startDate} onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                End Date
              </label>
              <input
                type="date"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={endDate} onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Travelers
              </label>
              <input
                type="number"
                min="1"
                placeholder="1"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={traveller} onChange={(e) => setTraveller(e.target.value)}
              />
            </div>

          </div>

          {/* Destination */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Destination
            </label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" value={destination} onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Budget (₹)
            </label>
            <input
              type="number"
              placeholder="Enter budget"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={budget} onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Create Trip
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateTrip;