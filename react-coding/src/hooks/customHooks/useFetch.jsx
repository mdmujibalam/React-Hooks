//useFetch hook simplifies data fetching from APIs and manages loading and error states efficiently

import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const result = await res.json();
      setData(result.products);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
