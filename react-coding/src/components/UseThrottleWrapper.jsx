import React, { useEffect, useState } from "react";
import useThrottle from "../hooks/customHooks/useThrottle";

const UseThrottleWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const throttledValue = useThrottle(searchTerm, 3000);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div style={{textAlign:"center", margin:"10px 20px"}}>
      <input type="text" onChange={handleChange} />

      <div>Throttled Search : {throttledValue}</div>
    </div>
  );
};

export default UseThrottleWrapper;
