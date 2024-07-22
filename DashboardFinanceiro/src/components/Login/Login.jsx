// src/components/Login/Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="dashboard-section">
        <img src="/logo.png" alt="Dashboard Logo" className="dashboard-logo" />
        <h1>DASHBOARD</h1>
      </div>
      <div className="login-section">
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
