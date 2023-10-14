import React from 'react'
import { useParams } from 'react-router-dom'

const Product = ({value}) => {
    const params = useParams();

    return (
        <>
            <h2>Product ID: {params.id}</h2>
            <span>{value}</span> 
        </>
    )
}

export default Product