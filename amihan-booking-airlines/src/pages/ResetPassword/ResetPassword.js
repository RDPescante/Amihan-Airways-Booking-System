import React from 'react';
import Swal from 'sweetalert2';
import './ResetPassword.css';
import logo from '../../images/logo.png';

const ResetPassword = ({ isOpen, onClose, onBackToLogin }) => {
  if (!isOpen) return null;

  const handleReset = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Reset Email Sent!',
      text: 'Please check your inbox to reset your password.',
      confirmButtonColor: '#0a0a59',
    }).then(() => {
      onClose();
      onBackToLogin();
    });
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-page">
        <div className="login-container animate-pop">
          <button className="modal-close" onClick={onClose}>×</button>

          <img src={logo} alt="Amihan Airline Logo" className="login-logo" />

          <h2 className="modal-title">CHANGE PASSWORD</h2>
          <p className="modal-subtitle">Enter Your Email To Receive Reset Instructions</p>

          <form className="login-form" onSubmit={handleReset}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <button type="submit" className="login-button">RESET PASSWORD</button>
          </form>

          <div className="signup-text" style={{ marginTop: '16px' }}>
            <span className="signup-link" onClick={onBackToLogin}>BACK TO LOGIN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
