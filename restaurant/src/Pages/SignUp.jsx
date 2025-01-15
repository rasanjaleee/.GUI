import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div>
         <div class="form-box">
           <div class="register-container" id="register">
                <div class="top">
                    <span>Have an account?  <a href="#" onClick="login()">Login</a></span>
                    <header>SignUp</header>
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="First Name"></input>
                        <i class="bx bx-user"></i>
                    </div>

                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Last Name"></input>
                        <i class="bx bx-user"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Email"></input>
                        <i class="bx bx-envelope"></i>
                    </div>
                    <div class="input-box">
                        <input type="password" class="input-field" placeholder="Password"></input>
                        <i class="bx bx-lock-alt"></i>
                    </div>
                    <div class="input-box">
                        <input type="submit" class="submit" value="Register"></input>
                    </div>
                    <div class='one-col'>
                        <div>
                            <input type="checkbox" id="register-check"></input>
                            <label for="register-check">
                                Remember Me
                            </label>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    </div>
  )
}

export default SignUp
