import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex justify-around items-center gap-5">
        <button
          className="bg-green-600 shadow-[1px_4px_0px_rgba(0,0,0,0.8)] cursor-pointer border-green-600 p-2 rounded-sm text-white"
          onClick={() => countContext.countDispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="bg-red-600 cursor-pointer shadow-[1px_4px_0px_rgba(0,0,0,0.8)] p-2 border-red-600 rounded-sm text-white"
          onClick={() => countContext.countDispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
      <button
        className="bg-amber-600 cursor-pointer shadow-[1px_4px_0px_rgba(0,0,0,0.8)]  p-2 border-2 border-amber-600 rounded-sm text-white"
        onClick={() => countContext.countDispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
