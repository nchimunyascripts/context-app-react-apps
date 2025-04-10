import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Count() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-2xl">{count}</h2>
      <div className="flex justify-around items-center gap-5">
        <button
          className="bg-green-600 cursor-pointer border-green-600 p-2 rounded-sm text-white"
          onClick={() => dispatch("increment")}
        >
          Increment
        </button>
        <button
          className="bg-red-600 cursor-pointer p-2 border-red-600 rounded-sm text-white"
          onClick={() => dispatch("decrement")}
        >
          Decrement
        </button>
      </div>
      <button
        className="bg-amber-600 cursor-pointer p-2 border-2 border-amber-600 rounded-sm text-white"
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default Count;
