import React, { useRef, useEffect } from "react";
import UseImperativeChild from "./UseImperativeChild";

const UseImperativeParent = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.addFocus();
  };

  const handleRemoveFocus = () => {
    inputRef.current.removeFocus();
  };

  const handleChangetextColor = () => {
    inputRef.current.changeTextColor();
  };

  return (
    <div>
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleRemoveFocus}>Remove Focus</button>
      <button onClick={handleChangetextColor}>Change text Color</button>
      <UseImperativeChild ref={inputRef} />
    </div>
  );
};

export default UseImperativeParent;
