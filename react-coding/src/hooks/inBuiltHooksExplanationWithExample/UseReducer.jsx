import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

  function myReducer(state, action) {
    switch (action.type) {
      case "IncreaseByValue":
        return { ...state, count: state.count + action.val };

      case "IncreaseByOne":
        return { ...state, count: state.count + 1 };

      case "DecreaseByValue":
        return { ...state, count: state.count - action.val };

      case "DecreaseByOne":
        return { ...state, count: state.count - 1 };

      default:
        return state;
    }
  }

  const handleIncreaseByValue = () => {
    dispatch({ type: "IncreaseByValue", val: 10 });
  };

  const handleIncreaseByOne = () => {
    dispatch({ type: "IncreaseByOne" });
  };

  const handleDecreaseByValue = () => {
    dispatch({ type: "DecreaseByValue", val: 5 });
  };

  const handleDecreaseByOne = () => {
    dispatch({ type: "DecreaseByOne" });
  };

  return (
    <div>
      <div>Count: {state.count}</div>
      <div>
        <button style={{ cursor: "pointer" }} onClick={handleIncreaseByValue}>
          Increase By 10
        </button>
        <button style={{ cursor: "pointer" }} onClick={handleIncreaseByOne}>
          Increase +1
        </button>
        <button style={{ cursor: "pointer" }} onClick={handleDecreaseByValue}>
          Decrease By 5
        </button>
        <button style={{ cursor: "pointer" }} onClick={handleDecreaseByOne}>
          Decrease -1
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
