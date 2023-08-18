import React from 'react';

import List from './List.json'; // 🔑

export default function HandleData () 
{

    return (
        <>
            <h2>Fetch List Data from JSON to JS file </h2>    

            {/* <ListX /> */}

            {
                List.map( item => { // 🔑🔑
                    return (
                        <div className="box" key={item.id} >
                            { item.name } &nbsp;&nbsp;&nbsp;
                            Booking Status :  {item.booked }
                        </div>
                    )
                } )
            }
        </>
    )
}