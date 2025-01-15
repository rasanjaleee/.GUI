import React from 'react'
import './SignIn.css'
import { FaUser,FaLock  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required/>
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='password' required/>
          <FaLock className='icon' />
        </div>

        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>forgot password</a>
        </div>

        <Link to='/Home'><button type='submit'>Login</button></Link>

        <div className='register-link'>
          <Link to='/SignUp'><p>Don't have an account? <a href='#'>Register</a></p></Link>
        </div>

      </form>
      
    </div>
  )
}

export default SignIn
