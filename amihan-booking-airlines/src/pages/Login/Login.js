import React from 'react';
import Swal from 'sweetalert2';
import './Login.css';
import logo from '../../images/logo.png';

const Login = ({ isOpen, onClose, onSwitchToRegister, onForgotPassword  }) => {
  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Welcome back to Amihan Airlines.',
      confirmButtonColor: '#0a0a59',
    }).then(() => {
      onClose();
    });
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-page">
        <div className="login-container animate-pop">

          <button className="modal-close" onClick={onClose}>×</button>


          <img src={logo} alt="Amihan Airline Logo" className="login-logo" />


          <form className="login-form" onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <div className="forgot-password" onClick={onForgotPassword}>
              Forgot Password
            </div>  

            <button type="submit" className="login-button">LOGIN</button>
          </form>

          <div className="signup-text">
            Don’t Have An Account?{' '}
            <span className="signup-link" onClick={onSwitchToRegister}>
              SIGN UP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
