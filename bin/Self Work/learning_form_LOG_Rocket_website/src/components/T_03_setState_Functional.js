import React, { useState } from 'react';

const T_03_setState_Functional = () => {

    const [count, setCount] = useState(0);

    return (

        <>
        <p>Count Value is : {count}</p>

        &nbsp;&nbsp;
        <button onClick={ () => setCount(prevCount => prevCount - 1 ) } > - </button> &nbsp; &nbsp;

        <button onClick={ () => setCount(0) }>RESET</button> &nbsp;&nbsp;

        <button onClick={ () => setCount(prevCount => prevCount + 1 ) } > + </button>
        </>

    );
}

export default T_03_setState_Functional;