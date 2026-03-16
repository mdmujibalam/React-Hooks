import React, { useState, useEffect, useRef } from "react";

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const flagRef = useRef(false);

  useEffect(() => {
    if (flagRef.current) return;

    flagRef.current = true;
    setThrottledValue(value);
    setTimeout(() => {
      flagRef.current = false;
    }, delay);
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
