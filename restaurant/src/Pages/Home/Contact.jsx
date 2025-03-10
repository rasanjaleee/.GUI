import React from 'react'
import './Contact.css'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn  } from 'react-icons/fa'
import { IoCallOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";


const Contact = () => {
  return (
    <div className='contact'>
      <h1><strong>Contact Us</strong></h1>
      
      
      <div className='contact-details'>
        <div className='pra'><p>We would love to hear from you! Please reach out using the form or via our contact details.</p></div>
                 
      </div>
      <h2>Get in Touch</h2> 
      <div className='column02'>
        <div className='box01'>
        <p><strong>Our Address</strong> </p>
        <FiMapPin className='=icon'/>
        <p>1234 , Main street, Maharagama</p>
        </div>
        <div className='box01'>
        <p><strong>Call Us</strong> </p>
        <IoCallOutline className='icon'/>
        <p>+94123456789</p>
        </div>
        <div className='box01'>
        <p><strong>Email Us</strong> </p>
        <HiOutlineMailOpen className='icon'/>
        <p>delishdelight@email.com</p>
        </div>

      </div>

      <h1>Send a Message</h1>
      <div className='message'>
        
        <form className='form'>
        <label>Name<input type='text'/></label>
        <label>Email<input type='email'/></label>
        <label>Subject<input type='text'/></label>
        <label>Message<input type='text'/></label>
        <button>Submit</button>
      </form>

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

export default Contact
