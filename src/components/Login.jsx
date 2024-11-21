import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Login = (props) => {
  const handleLogin = () => {
    alert('Login successful')
  }

  return (
    <div className="auth-container">
      <Link to="/" className="home-link">
        <button className="auth-button">Home</button>
      </Link>
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter your email" className="auth-input" />
          <input type="password" placeholder="Enter your password" className="auth-input" />
          <button type="button" onClick={handleLogin} className="auth-button">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <a href="/signup" className="auth-link">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
