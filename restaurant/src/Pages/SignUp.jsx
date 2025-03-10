import React, { useState } from 'react'; // Import useState
import './SignUp.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
    // Initialize form data state
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email:"",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);  // Use the correct 'register' function
            alert("Signup successful! Please login.");
        } catch (error) {
            alert(error.response?.data?.error || "Signup failed");
        }
    };

    return (
        <div className="form-box">
            <div className="register-container" id="register">
                <div className="top">
                    <h4>
                        <span>
                            Do you have an account?{" "}
                            <Link to="/SignIn">Login</Link>
                        </span>
                    </h4>
                    <header>SignUp</header>
                    <form onSubmit={handleSubmit}>  {/* Added form submission */}
                        <div className="input-box">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Name"
                                name="name"  // Added name attribute
                                value={formData.name}  // Set form value
                                onChange={handleChange}  // Handle form change
                            />
                            <i className="bx bx-user"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Username"
                                name="username"  // Added name attribute
                                value={formData.username}  // Set form value
                                onChange={handleChange}  // Handle form change
                            />
                            <i className="bx bx-user"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="email"
                                className="input-field"
                                placeholder="Email"
                                name="email"  // Added name attribute
                                value={formData.email}  // Set form value
                                onChange={handleChange}  // Handle form change
                            />
                            <i className="bx bx-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Password"
                                name="password"  // Added name attribute
                                value={formData.password}  // Set form value
                                onChange={handleChange}  // Handle form change
                            />
                            <i className="bx bx-lock-alt"></i>
                        </div>

                        <div className="input-box">
                            <button type="submit">Register</button> {/* Changed to submit */}
                        </div>

                        <div className="one-col">
                            <div>
                                <input type="checkbox" id="register-check" />
                                <label htmlFor="register-check">Remember Me</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
