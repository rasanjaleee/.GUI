import React, { useState } from 'react';
import './SignIn.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // For handling error messages
  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (formData) => {
    console.log(formData); 
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save token in localStorage
      localStorage.setItem("user", JSON.stringify(data.user)); // Save user data in localStorage
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages
    try {
      const data = await login(formData); // Call the login function
      localStorage.setItem("token", data.token); // Save token in localStorage
      alert("Login successful!");
      navigate('/'); // Redirect user after login
    } catch (error) {
      setError(error.message || "Login failed"); // Set error message for display
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

          <button type='submit'>Login</button>

          <div className='register-link'>
            <p>Don't have an account? <Link to='/SignUp'>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
