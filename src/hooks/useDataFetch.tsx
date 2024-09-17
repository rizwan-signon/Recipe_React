import { useState, useEffect } from "react";

const useDataFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setData(result.recipes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array to run the effect once

  return { data, loading, error };
};

export default useDataFetch;
