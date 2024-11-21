import { useState } from 'react';
import * as authService from '../services/authService';
import { useNavigate }  from 'react-router-dom'
import '../app.css'

const Signup = (props) => {


  const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState([''])

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Create Account</button>
        </form>
    );
};
//   const handleSignup = () => {
//     alert('Signup successful')
//   }

//   return (
//     <div className="auth-container">
//       <Link to="/" className="home-link">
//         <button className="auth-button">Home</button>
//       </Link>
//       <div className="auth-box">
//         <h2>Sign Up</h2>
//         <form>
//           <input type="text" placeholder="Enter your name" className="auth-input" />
//           <input type="email" placeholder="Enter your email" className="auth-input" />
//           <input type="password" placeholder="Enter your password" className="auth-input" />
//           <button type="button" onClick={handleSignup} className="auth-button">
//             Sign Up
//           </button>
//         </form>
//         <p>
//           Already have an account?{' '}
//           <a href="/login" className="auth-link">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }

export default Signup

