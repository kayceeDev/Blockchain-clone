import React from "react";
import logo from "../../assets/img/logo.png";
import {Link} from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div id="login">
      {/* <div className="login-header"> */}
      <div className="login-logo">
        <img class="logo" src={logo} alt="" />
        <p class="title">
          Blockchain<span>.com</span>
        </p>
        {/* </div> */}
      </div>
      <div id="form-div">
        <h1>Welcome Back!</h1>
        <form type="buttom">
          <label htmlFor="wallet">Wallet ID</label>
          <input
            type="text"
            name="wallet"
            id="wallet"
            placeholder="Enter Your Wallet ID"
          />
          <div className="recover-id">
            Your Wallet ID can be found at the bottom of any email we've ever
            sent you, Need a reminder?
            <span>
              <a href="#"> Send my Wallet ID</a>
            </span>
          </div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <Link to='/home'><button type="submit">Click here to View Site without ID and Password</button></Link>
        </form>
        <div className="extra">
          <p>
            <a href="#">Login via Mobile </a>
          </p>
          <p>
            <a href="#">Need some help? </a>
          </p>
        </div>
      </div>

      <div className="sign-up">
        <span>
          <a href="">Don't have a wallet?</a>
        </span>{" "}
        <span>
          <a href="#"> Sign Up</a>
        </span>
      </div>
      <footer id='footer'>
        <div>
      <select>
    <option value="0">English</option>
    <option value="1">French</option>
    <option value="2">Spanish</option>
    <option value="3">Russian</option>
    <option value="4">Turkish</option>
  
  </select>
  </div>
  <div className='footer-span'>
  <span><a href="#">Version 4.46.41 </a></span>
  <span><a href="#"> Need help?</a></span>
  </div>
      </footer>
    </div>
  );
};

export default Login;
