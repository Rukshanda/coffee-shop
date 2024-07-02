import React, { useState } from 'react';
import { signup } from '../services/apiAuth';
import Logo from '../components/Logo';

const SignUp = ({ onSignUpSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
       await signup({ fullName, email, password });
       onSignUpSuccess();
    } catch (error) {
      console.error('Signup error:', error);  
     }
  };

  return (
    <>
      <div className="bg"></div> {/* Ensure this div has appropriate styling */}
      <div className='form-sec'>
        <div className="form">
        <div className="form-box">
          <Logo width='100px' />
          <form onSubmit={handleSignup} className='form-styles'>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
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
            <button type="submit" className='button'>Signup</button>
          </form>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default SignUp;

