// LoginModal.jsx

import { useState } from "react";
import styles from './customerAccount.module.scss';
import { loginUser, registerUser } from "../../firebase/authService";
import { useTheme } from "../../store/ThemeContext";

const LoginModal = ({ toggleAccountModalManager }) => {
  const [error, setError] = useState(false);
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    emailLogin: '',
    password: '', 
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await loginUser(formData.emailLogin, formData.password);
      console.log(user, 'log in success');
      setError(false);
    } catch (error) {
      handleAuthError(error);
      console.log(error);
    }
  }

  const handleRegisterUser = async () => {
    try {
      const newUser = await registerUser(formData.emailLogin, formData.password);
      console.log(newUser);
      setError('');
    } catch (error) {
      handleAuthError(error);
    }
  }

  const handleAuthError = (error) => {
    const errorMessage = error.message;
    const errorCode = errorMessage.match(/auth\/[a-z\-]+/i)?.[0];

    switch (errorCode) {
      case 'auth/user-not-found':
        setError('No account found for this email address.');
        break;
      case 'auth/invalid-credential':
        setError('Incorrect email or password.');
        break;
      case 'auth/missing-password':
        setError('Missing password.');
        break;
      case 'auth/invalid-email':
        setError('Invalid email address.');
        break;
      case 'auth/email-already-in-use':
        setError('This email is already in use. Please use a different email.');
        break;
      case 'auth/weak-password':
        setError('Password should be at least 6 characters.');
        break;
      default:
        setError('An unknown error occurred. Please try again.');
        break;
    }
  }

  return (
    <div className="modal login-modal">
      <div className={styles['login-modal-header']}>
        <h3>Your Account</h3>
        <p onClick={toggleAccountModalManager}>← Back to menu</p>
        <p className={styles['login-info']}>Login or create account to save your cart and view order history</p>
      </div>
      <form className="main-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          placeholder="Email"
          id="emailLogin"
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
        {error && <p className={styles['error-message']}>{error}</p>}
        <button id={styles['sign-in']} className="btn-primary">SIGN IN</button>
      </form>
      <div className={`${styles['login-modal-options']} ${isDarkMode ? styles['dark'] : ''}`}>
        <button onClick={handleRegisterUser}>Create Account</button>
        <button>Forgot Password</button>
      </div>
    </div>
  )
}

export default LoginModal;