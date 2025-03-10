import React from 'react'
import './About.css'
import about_01 from '../../assets/about_01.jpeg'
import about_02 from '../../assets/about_02.jpeg'
import about_03 from '../../assets/about_03.jpeg'
import about_04 from '../../assets/about_04.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const About = () => {
  return (
    <div className='container'>
      <h1 class='title'>About Us</h1>
      
        <div className='photogallery'>

        <div className='column01'>

            <div class='photo'>
                <img src={about_01} alt='about_01'></img>
            </div>
            <div class='photo'>
                <img src={about_02} alt='about_02'></img>
            </div>
        </div>
        <div className='column01'>
            <div class='photo'>
                <img src={about_03} alt='about_03'></img>
            </div>
            <div class='photo'>
                <img src={about_04} alt='about_04'></img>
            </div>

        </div>
        </div>
        <div className='welcome'>
          <bold><h2>Welcome to <span>Delish Delight</span></h2></bold>
          <h3>Where Every meal feels like home!</h3>

          
          <p>Delish Delight is committed to providing high-quality, delicious food, using the freshest ingredients available. Our team of chefs work diligently to craft each dish with care and precision. Whether you're here for a casual meal with friends or celebrating a special occasion, we promise to deliver an unforgettable dining experience.</p>
          <p>Our restaurant is located in the heart of the city, offering a welcoming atmosphere and excellent service. Join us today and indulge in a wide variety of delectable dishes!</p>
        </div>

        <div className="experience">
        <div className="experience-item">
          <h3>2+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className="experience-item">
           <h3>5</h3>
          <p>Master Chefs</p>
        </div>
        </div>

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

export default About
