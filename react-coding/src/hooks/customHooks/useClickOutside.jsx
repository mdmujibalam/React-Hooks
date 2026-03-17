import React, { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = (e) => {
      //if inside then return
      if (!ref.current || ref.current.contains(e.target)) return;
      
      //otherwise call callback
      callback(e);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
