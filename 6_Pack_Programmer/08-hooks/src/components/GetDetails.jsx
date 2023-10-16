import React from 'react'
import { useContext } from 'react'; // 📄

import { MyContext } from '../index'

const GetDetails = () => {
    const contextValue = useContext(MyContext);
    console.log(contextValue);

    return (
        <div>GetDetails: Welcome- {contextValue} </div>
    )
}

export default GetDetails