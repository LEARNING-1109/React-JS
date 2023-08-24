import React, {useState} from "react";

export default function Increment() {
    
    const [count, setCount] = useState(10);
    let incrementBy = 5;
  const Increment = () => {
  };

  return (
    <>
    <div>
        {count}
    </div>
      <div>
        <button onClick={ () => {setCount(count+ incrementBy)} }>Increment</button>
        <button onClick={ () => {setCount(0)} }>Reset</button>
        <button onClick={ () => {setCount(count - incrementBy)} } >Decrement</button>
      </div>
    </>
  );
}
