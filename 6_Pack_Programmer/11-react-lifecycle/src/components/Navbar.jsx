import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
        <nav className='bg-teal-200 my-4 text-blue-700 underline font-bold text-2xl space-x-10'>
            <span className='text-black'>Navbar: </span>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
        </nav>
    )
  }
}
