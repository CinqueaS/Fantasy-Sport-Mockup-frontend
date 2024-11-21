import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';
import '../App.css'

const Login = ({ setUser }) => {
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
      navigate('/landing')
    } catch (err) {
      updateMessage(err.message)
    }
  }


  return (
    <main className="auth-container">
      <div className="auth-box">

        <h2>Log In</h2>
        <p>{message}</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              autoComplete="off"
              id="username"
              value={formData.username}
              name="username"
              onChange={handleChange}
              className="auth-input"
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
              className="auth-input"
            />
          </div>
          <div>
            <button className="auth-button" >Log In</button>
            <Link to={'/signup'} className="auth-link" >Create an Account</Link>
          </div>
        </form>
      </div>


    </main>
  )
}

export default Login
