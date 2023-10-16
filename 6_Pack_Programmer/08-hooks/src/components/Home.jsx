import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    /*
    let val = 5 

    ⚠️ Iss method se value update nhi ho rhi kyuki- React ek baar render ho chuka hai lekin re-render nhi hoga,
    iss tarike se value change karne pe
    const decrement = () => {
        val -= 1
        console.log(val);
    }
    const increment = () => {
        val += 1    
        console.log(val);
    }
    */
// --------------------------------------------
    const [val, setVal] = useState(5);  // state jaise hi change hoga then component re-render hoga

    // const decrement = () => {
    //     setVal(val-1);        
    // }
    // const increment = () => {        
    //     setVal(val+1);
    // }
// --------------------------------------------

    // 🎯 React ka strict mode ke kaaran 2 times execute hota hai initially.
    // 🎯 Agar 2nd parameter me array nhi denge to har changes pe execute hoga
    // 🎯 If some variables are passed in array(2nd param), then effect will only activate if the values in the list change.
    useEffect(() => {
        // console.log("useEffect is executed.");
    });
    useEffect(() => {
        console.log("useEffect is executed.");
    }, [val])
    
    return (
        <>
            <div className='text-2xl font-bold' >Home</div>

            <div className='inline-block justify-center flex'  >
                {/* <button onClick={decrement} type='button' className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' >Minus</button> */}
                <button onClick={() => setVal(val-1)} type='button' className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' >Minus</button>

                <p className='inline mx-2 px-2 w-16 text-2xl font-bold text-center' > {val} </p>

                <button onClick={() => setVal(val+1)} type='button' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' >Add</button>
            </div>

        </>
    )
}

export default Home