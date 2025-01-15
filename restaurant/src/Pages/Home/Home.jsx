import React from 'react'
import './Home.css'
import homepage_04 from '../../assets/homepage_04.jpg'
import homepage_02 from '../../assets/homepage_02.jpg'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Home = () => {
  return (
    <div className='homepage'>
        <div className='image_container'>
        <img src={homepage_02} alt='homepage_04' className='hompage_02'></img>
       
    </div>
    <h1>"Welcome to <span>Delish Delight</span> - Where Every Meal Feels like Home!"</h1>
        
        <Link to='/Menu'><button className='btn'>View Menu</button></Link>
        <Link to='/Order'><button className='btn'>Order Now</button></Link>
        <Link to='Reservation'><button className='btn'>Make a Reservation</button></Link>
        <Link to='About'><button className='btn' >Learn More</button></Link>  

    <footer className='footer'>
      <div className='footer-content'>
        <h2>Contact Us</h2>
        <p>1234 ,Main Street ,Maharagama</p>
        <p>phone: <a href='tele:+94123456789'>+94123456789</a></p>
        <p>Email: <a href='delishselight@email.com'>delishselight@email.com</a></p>
      </div>
      <div className='social-media'>
        <h2>Follow Us</h2>
        <div className='social-icons'>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
      </div>
      <div className='footer-bottom'>
          <p>@ 2025 [Delish Delight].All right reserved.</p>
      </div>
    </footer> 
    </div>
  )
}

export default Home
