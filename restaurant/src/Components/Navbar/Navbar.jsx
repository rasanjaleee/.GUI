import React, { useState } from 'react'
import './Navbar.css'
import icon_01 from '../../assets/icon_01.jpg'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";



const Navbar = () => {

  return (
    <div className='navbar'>
        <img src={icon_01} alt='restaurant logo' className='logo'></img>
    <div>
        <nav>
        <ul className='menu'>
            <li className='menuitem'><Link to='/'>Home</Link></li>
            <li className='menuitem'><Link to='/Menu'>Menu</Link></li>
            <li className='menuitem'><Link to='/Order'>Online Order</Link></li>
            <li className='menuitem'><Link to='/Reservation'>Table Reservation</Link></li>
            <li className='menuitem'><Link to='/About'>About Us</Link></li>
            <li className='menuitem'><Link to='/Contact'>Contact</Link></li>
            <li className='menuitem'><Link to='/Profile'>Profile</Link></li>
           
        </ul>
        </nav>
       
    </div>
       

        <div className='searchbar'>
            <CiSearch className='search'/>
        </div>

        <div className='signinup'>
            <Link to='/SignIn'><button className='btn white-btn' id='loginbtn' >SignIn</button></Link>
            <Link to='/SignUp'><button className='btn' id='registerbtn' >SignUp</button></Link>


        </div>

       
       


    </div>

    

    
  )
}

export default Navbar
