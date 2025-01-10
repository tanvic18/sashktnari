import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';


function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="gradient-text">Welcome Back</h1>
        <p>Continue your journey with The Sashakt Nari</p>
        <form className="login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn">Log In</button>
        </form>
        <p>
          New to our community? <Link to="/signup" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

