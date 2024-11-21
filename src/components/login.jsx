import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../services/authService'; 
import '../app.css'

const Login = ({setUser}) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState([''])
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const updateMessage = (msg) => {
    setMessage(msg)
  }

  const handleChange = (e) => {
    updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = await authService.signin(formData)
      setUser(user)
      navigate('/')
    } catch (err) {
      updateMessage(err.message)
    }
  }


  return (
  //   <div className="auth-container">
  //     <Link to="/" className="home-link">
  //       <button className="auth-button">Home</button>
  //     </Link>
  //     <div className="auth-box">
  //       <h2>Login</h2>
  //       <form>
  //         <input type="email" placeholder="Enter your email" className="auth-input" />
  //         <input type="password" placeholder="Enter your password" className="auth-input" />
  //         <button type="button" onClick={handleLogin} className="auth-button">
  //           Login
  //         </button>
  //       </form>
  //       <p>
  //         Don't have an account?{' '}
  //         <a href="/signup" className="auth-link">
  //           Sign Up
  //         </a>
  //       </p>
  //     </div>
  //   </div>
  // )
  <main className="auth-container">
  <h1>Log In</h1>
  <p>{message}</p>
  <form autoComplete="off" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Username:</label>
      <input
        type="text"
        autoComplete="off"
        id="username"
        value={formData.username}
        name="username"
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        autoComplete="off"
        id="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
      />
    </div>
    <div>
      <button>Log In</button>
      <Link to="">
        <button>Cancel</button>
      </Link>
      <Link to={'/signup'}>Create an Account</Link>
    </div>
  </form>
  
</main>
)
}

export default Login
