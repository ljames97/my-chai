// LoginModal.jsx

import { useState } from "react";
import styles from './customerAccount.module.scss';

const LoginModal = ({ toggleLoginModal }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('LOGGING IN')
  }

  return (
    <div className="modal login-modal">
      <div className={styles['account-header']}>
        <h3>MyChai Account</h3>
        <p onClick={toggleLoginModal}>← Back to menu</p>
      </div>
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          placeholder="Email"
          id="login-email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          placeholder="Password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button id={styles['sign-in']} className="btn-primary">SIGN IN</button>
      </form>
      <div className={styles['login-modal-options']}>
        <button>Create Account</button>
        <button>Forgot Password</button>
      </div>
    </div>
  )
}

export default LoginModal;