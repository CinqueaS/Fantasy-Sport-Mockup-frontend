import { useState } from 'react';
import * as authService from '../services/authService';
import { useNavigate, Link } from 'react-router-dom'
import '../app.css'

const Signup = (props) => {


  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState([''])

  const updateMessage = (msg) => {
    setMessage(msg);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { username, password };
    try {
      const newUser = await authService.signup(formData);
      props.setUser(newUser.user);
      navigate('/login');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="auth-input"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </div>
          <button type="submit" className='auth-button'>Create Account</button>
          <Link to={'/login'} className='auth-link'>Login</Link>
        </form>
      </div>

    </div>

  );
};
export default Signup

