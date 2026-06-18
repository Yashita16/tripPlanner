import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TripsContext = createContext();

export const useTripContext = () => {
  return useContext(TripsContext);
};

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const fetchTrips = async (type = "all") => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        `http://localhost:5000/api/trips/${type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTrips(data.trips);
      setFilter(type);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips("all");
  }, []);

  return (
    <TripsContext.Provider
      value={{
        trips,
        setTrips,
        loading,
        filter,
        setFilter,
        fetchTrips,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};