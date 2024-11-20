import React from 'react'
import '../app.css'

const Signup = (props) => {
  const handleSignup = () => {
    alert('Signup successful')
  }

  return (
    <div className="auth-container">
      <a href="/" className="home-link">Home</a>
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Enter your name" className="auth-input" />
          <input type="email" placeholder="Enter your email" className="auth-input" />
          <input type="password" placeholder="Enter your password" className="auth-input" />
          <button type="button" onClick={handleSignup} className="auth-button">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <a href="/login" className="auth-link">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup

