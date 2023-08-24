import React, { useState, useReducer } from "react";

export default function ComplexStateAction() {
  let initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return (state = state + 1);

      default:
        return "errorOccured";
    }
  };

  const [count, dispatch] = useReducer[(reducer, initialState)];

  return (
    <>
      <div>Count : {count}</div>
      <button type="button" onClick={dispatch("increment")}></button>
    </>
  );
}
