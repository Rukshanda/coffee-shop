import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './Logo';
import { login } from '../services/apiAuth'; // Import the login function

const Login = ({ handleLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      toast.success('Login successful!');
      handleLoginSuccess(); // Call this to hide the login form
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='form-sec'>
      <div className="form">
        <div className='form-box'>
          <Logo width='100px'/>
          <form onSubmit={handleSignIn} className='form-styles'>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className='button'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
