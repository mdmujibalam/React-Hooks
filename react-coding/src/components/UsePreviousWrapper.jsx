import React, { useState, useEffect } from "react";
import usePrevious from "../hooks/customHooks/usePrevious";

const UsePreviousWrapper = () => {
  const [count, setCount] = useState(0);
  const prevVal = usePrevious(count);

  const handleIncrease=()=>{
    setCount((prev)=>prev+1);
  }

  const handleDecrease=()=>{
    setCount((prev)=>prev-1);
  }

  return (
    <div>
      <div>Previous:{prevVal !== undefined ? prevVal : 'N/A'} </div>
      <div>Count: {count}</div>
      <div >
      <button style={{cursor:"pointer"}} onClick={handleIncrease}>+1</button>
      <button style={{cursor:"pointer"}} onClick={handleDecrease}>-1</button>
      </div>
    </div>
  );
};

export default UsePreviousWrapper;
