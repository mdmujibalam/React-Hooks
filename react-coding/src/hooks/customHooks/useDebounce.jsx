import React, { useState, useEffect } from "react";

const useDebounce = (value, delay=1000) => {
  const [query, setQuery] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value,delay]);

  return query;
};

export default useDebounce;
