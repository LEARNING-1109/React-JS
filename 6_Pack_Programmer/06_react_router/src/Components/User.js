import React from 'react'

import { useParams, useNavigate } from 'react-router-dom' // ⭐⭐

export default function User() {

    const params = useParams();
    console.log(params.id);

    const navigate = useNavigate();

    return (
        <div id='user-page' >
            User Page
            {/* <button type="button" onClick={()=>{ navigate("/about") }} >Click Me to Navigate </button> */}
            
        </div>
    )
}
