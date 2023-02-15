import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center align-items-center bg-dark'>
      <Link to='/' className='text-decoration-none p-3 text-white'>
        Home
      </Link>
      <Link to='/' className='text-decoration-none p-3 text-white'>
        Cart
      </Link>
      <Link to='/' className='text-decoration-none p-3 text-white'>
        Social
      </Link>
    </footer>
  )
}

export default Footer
