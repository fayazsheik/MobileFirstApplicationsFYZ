import React, { useState } from 'react';

import './login.css';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleLogin = (e) => {
    e.preventDefault();
 
    if (email === 'mobilefirst@gmail.com' && password === 'assignment') {
      setError('');
      onLogin();
 
      
      
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div className='input-box'>
      <input
          
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='input-box'>
        <input
          
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
        
        
        <button type="submit" className='btn'>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
      
    </div>
  );
};



export default Login