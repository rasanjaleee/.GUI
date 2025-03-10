import React, { useState, useEffect } from 'react';
import './Navbar.css';
import icon_01 from '../../assets/icon_01.jpg';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user); // Convert to boolean (true if user exists)
  }, []);

  return (
    <div className='navbar'>
      <img src={icon_01} alt='restaurant logo' className='logo' />

      <nav>
        <ul className='menu'>
          <li className='menuitem'><NavLink to='/' className='nav-link' activeClassName='active'>Home</NavLink></li>
          <li className='menuitem'><NavLink to='/Menu' className='nav-link' activeClassName='active'>Menu</NavLink></li>
          <li className='menuitem'><NavLink to='/Reservation' className='nav-link' activeClassName='active'>Table Reservation</NavLink></li>
          <li className='menuitem'><NavLink to='/About' className='nav-link' activeClassName='active'>About Us</NavLink></li>
          <li className='menuitem'><NavLink to='/Contact' className='nav-link' activeClassName='active'>Contact</NavLink></li>
        </ul>
      </nav>

      <div className='searchbar'>
        <CiSearch className='search' />
      </div>

      {/* Show SignIn button if not logged in */}
      {!isLoggedIn && (
        <div className='signinup'>
          <Link to='/SignIn'><button className='btn' id='loginbtn'>Sign In</button></Link>
        </div>
      )}

      {/* Show Profile icon only if logged in */}
      {isLoggedIn && (
        <div className='profileicon'>
          <NavLink to='/Profile'><CgProfile className='profile' activeClassName='active' /></NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
