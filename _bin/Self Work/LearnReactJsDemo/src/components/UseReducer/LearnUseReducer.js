import React, { useState , useReducer} from "react";


function method1() {
  const [count, setCount] = useState(1);
  return (
    <>
      Count: {count} <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((e) => e - 1)}>-</button>
      <button onClick={() => setCount((e) => e + 1)}>+</button>
    </>
  );
}

function method2() {
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

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <div>Count : {count}</div> <br />
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </>
  );
}

export default function LearnUseReducer() {
  return (
    <>
      {/* {method1()} */}

      {method2()}
    </>
  );
}
