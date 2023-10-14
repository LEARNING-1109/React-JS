import React from 'react'
import Product from './Product'

export default function Home() {
  const arr = [11,12,13,14]
  
  return (
    <>
      <h3>Showing List of Products: </h3>
      
      {/* <Product value="1" />
      <Product value="2" />
      <Product value="3" /> */}

      {arr.map((i) => (
        <Product value={i} key={i} />
      ))}


    <div id='home-page'>Home</div>
    </>
  )
}
