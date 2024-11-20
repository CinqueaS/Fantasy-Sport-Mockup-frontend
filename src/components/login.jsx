import React from 'react'
import '../app.css' 

const Login = (props) => {
  const handleLogin = () => {
    
    alert('Login successful')
  }

  return (
    <div className="auth-container">
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
