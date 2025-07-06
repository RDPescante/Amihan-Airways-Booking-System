import React from 'react';
import './Register.css';
import logo from '../../images/logo.png';
import Swal from 'sweetalert2';

const Register = ({ isOpen, onClose, onSwitchToLogin }) => {
  if (!isOpen) return null;

  const handleRegister = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'You can now log in to your account.',
      confirmButtonColor: '#0a0a59',
    }).then(() => {
      onClose();
      onSwitchToLogin(); // optionally trigger login modal
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper animate-pop">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={logo} alt="Amihan Airline Logo" className="modal-logo" />
        <h2 className="modal-title">REGISTRATION</h2>
        <p className="modal-subtitle">Sign Up To Get Started</p>

        <form className="modal-form" onSubmit={handleRegister}>
          <input type="email" placeholder="EMAIL" required />
          <input type="text" placeholder="FIRST NAME" required />
          <input type="text" placeholder="LAST NAME" required />
          <input type="tel" placeholder="MOBILE NUMBER" required />
          <input type="password" placeholder="PASSWORD" required />
          <input type="password" placeholder="CONFIRM PASSWORD" required />

          <div className="modal-switch">
            ALREADY HAVE AN ACCOUNT? <span onClick={onSwitchToLogin}>LOGIN</span>
          </div>

          <button type="submit" className="modal-submit">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
