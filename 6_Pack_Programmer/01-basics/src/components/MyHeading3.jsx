// rafce : abb.
import React from 'react'

const MyHeading3 = () => {
  return (
    <>
      <h1>MyHeading 3 A</h1>
      <LittleHeading1/>
      <LittleHeading2/>
    </>
  )
}
// or ✨
// const MyHeading3 = () =><h2>MyHeading 3 B</h2>  

const LittleHeading1 = () => <h3>Little 1</h3>
const LittleHeading2 = () => <h3>Little 2</h3>
const LittleHeading3 = () => <h3>Little 3</h3>

export default MyHeading3;

export {LittleHeading1, LittleHeading2, LittleHeading3}