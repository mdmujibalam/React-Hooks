import React, { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" onChange={() => {}} ref={inputRef} />
    </div>
  );
};

export default UseRef;
