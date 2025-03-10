import React, { useState } from 'react';
import './SignIn.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      localStorage.setItem("token", data.token); // Save token
      alert("Login successful!");
      navigate('/Home'); // Redirect user after login
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className='wrapper-container'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type='text'
              name="username"
              placeholder='Username'
              required
              value={formData.username}
              onChange={handleChange}
            />
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input
              type='password'
              name="password"
              placeholder='Password'
              required
              value={formData.password}
              onChange={handleChange}
            />
            <FaLock className='icon' />
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/> Remember me</label>
            <a href='#'>Forgot password?</a>
          </div>

          <button type='submit'>Login</button> {/* Corrected login button */}

          <div className='register-link'>
            <p>Don't have an account? <Link to='/SignUp'>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
