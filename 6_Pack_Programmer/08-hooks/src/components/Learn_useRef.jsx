import React, { useEffect } from 'react'

import { useRef } from 'react'

const Learn_useRef = () => {

    const myRef = useRef();
    console.log(myRef); // ❌

    // useEffect se Pehle component mount hoga uska baad reference ki value mil jaayegi.
    useEffect(() => {
        console.log(myRef)
        console.log(myRef.current)
    }, [])

    return (
        <>
            <div>Learn_useRef</div>

            <p ref={myRef} ></p>
        </>

    )
}

export default Learn_useRef