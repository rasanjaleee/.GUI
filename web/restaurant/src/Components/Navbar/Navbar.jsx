import React, { useState, useEffect } from 'react';
import './Navbar.css';
import icon_01 from '../../assets/icon_01.jpg';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData && userData !== "undefined") {
      try {
        setUser(JSON.parse(userData));
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to parse userData:", error);
        localStorage.removeItem('user');  
      }
    }
  }, []);
  

  return (
    <div className='navbar'>
      <img src={icon_01} alt='restaurant logo' className='logo' />

      <nav>
        <ul className='menu'>
          <li className='menuitem'>
            <NavLink to='/' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li className='menuitem'>
            <NavLink to='/Menu' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Menu
            </NavLink>
          </li>
          <li className='menuitem'>
            <NavLink to='/Reservation' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Table Reservation
            </NavLink>
          </li>
          <li className='menuitem'>
            <NavLink to='/About' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
          </li>
          <li className='menuitem'>
            <NavLink to='/Contact' className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className='searchbar'>
        <CiSearch className='search' />
      </div>

      {/* Show SignIn button if not logged in */}
      {!isLoggedIn && (
        <div className='signinup'>
          <Link to='/SignIn'>
            <button className='btn' id='loginbtn'>Sign In</button>
          </Link>
        </div>
      )}

      {/* Show Profile icon only if logged in */}
      {isLoggedIn && user &&(
        <div className='profileicon'>
          <NavLink to='/Profile'>
            <CgProfile className='profile' />
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
