import React from 'react';
import { useHistory } from "react-router-dom";



function Index () {
    let history = useHistory();

    function handleSubmit() {
        console.log("Working");
        history.goBack();
    }

    return (
        <>
            <button type='btn' onClick={handleSubmit} >Submit Details </button>
        </>
    )

}

export default Index;