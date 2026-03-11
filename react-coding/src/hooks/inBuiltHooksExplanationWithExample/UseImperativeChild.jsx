import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeChild = forwardRef((prop, ref) => {
  const inputChildRef = useRef();

  useImperativeHandle(ref, () => ({
    addFocus: () => {
      inputChildRef.current.focus();
    },
    removeFocus: () => {
      inputChildRef.current.blur();
    },
    changeTextColor: () => {
      inputChildRef.current.style.color = "green";
    },
  }),[]);

  return (
    <div>
      <p>Child Component</p>
      <input type="text" ref={inputChildRef} />
    </div>
  );
});

export default UseImperativeChild;
