import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'
import { CgProfile } from "react-icons/cg"
import { BiSearch } from 'react-icons/bi'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-top'>

        <div className='profile'>
          <CgProfile size={'1.5rem'} />
          <h2>Profile</h2>
        </div>
        
       
        <div className='logo-text'>
          <p className='logo'>Lorach<span>á</span></p>
          <p className='logo-under'>DESIGNS</p>
        </div>
        

        <div className='search'>
          <BiSearch/>
          <h2>Search</h2>
        </div>


      </div>

      


      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/">Garments</Link>
        <Link to="/">Bags</Link>
        <Link to="/">Models</Link>
        <Link to="/">Local Store</Link>
        <Link to="/">Contact Us</Link>
      </div>

   
       
    </div>
  )
}

export default Header