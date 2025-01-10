import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';


function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="gradient-text">Join The Sashakt Nari</h1>
        <p>Empower yourself and others through our community</p>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="link">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

