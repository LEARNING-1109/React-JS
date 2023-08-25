// abb: rfc
import React from 'react'

// react router dom ------------------
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <p>Anchor Tag : </p>
                <a href="/home" >Home</a>
                <a href="/about" >About</a>
                <a href="/contact" >Contact</a>                
            </div>
            
            <div className='navbar'>
                <p>Link of React Router : </p>
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>                
                <Link to="/user" >User</Link>                
            </div>
        </>
    )
}
