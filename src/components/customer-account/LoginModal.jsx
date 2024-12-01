// LoginModal.jsx

import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import styles from './customerAccount.module.scss';
import { loginUser, registerUser } from "../../firebase/authService";
import { useTheme } from "../../store/ThemeContext";

/**
 * Handles user login and registration.
 * 
 * @param {Object} props - Component props.
 * @param {function} props.toggleAccountModalManager - Function to close the modal.
 * @returns {JSX.Element} LoginModal component.
 */
const LoginModal = ({ toggleAccountModalManager }) => {
  const [error, setError] = useState(false);
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    emailLogin: '',
    password: '', 
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsOpen(false); 
    setTimeout(() => toggleAccountModalManager(), 200);
  };

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  /**
   * Handles changes to form inputs and updates formData state.
   * @param {Event} event - Input change event.
   */
  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  }

  /**
   * Handles form submission for user login.
   * @param {Event} event - Form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await loginUser(formData.emailLogin, formData.password);
      setError(false);
    } catch (error) {
      handleAuthError(error);
    }
  }

  /**
   * Registers a new user with the provided email and password.
   */
  const handleRegisterUser = async () => {
    try {
      const newUser = await registerUser(formData.emailLogin, formData.password);
      setError('');
    } catch (error) {
      handleAuthError(error);
    }
  }

  /**
   * Maps Firebase authentication errors to user-friendly messages.
   * @param {Error} error - Error object from Firebase.
   */
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

  return ReactDOM.createPortal (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal login-modal ${isOpen ? 'open' : 'close'}`}>
        <div className={styles['login-modal-header']}>
          <div className={styles['login-modal-title']}>
            <h3>Your Account</h3>
            <button onClick={closeModal} id={styles['exit-account-modal']} className='exit-modal-btn'>X</button>
          </div>
          {/* <p className={styles['back-btn']} onClick={toggleAccountModalManager}>← Back to menu</p> */}
          <p className={styles['login-info']}>Login or create account to save your cart and view order history</p>
        </div>
        <form className="main-form" onSubmit={handleSubmit}>
          <label htmlFor="emailLogin">Email</label>
          <input 
            type="email"
            placeholder="Email"
            id="emailLogin"
            value={formData.email}
            onChange={handleChange}
            required
            aria-describedby={error && "error-message"}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-describedby={error && "error-message"}
          />
          {error && <p className={styles['error-message']} role="alert">{error}</p>}
          <button id={styles['sign-in']} className="btn-primary" aria-label="Sign in">SIGN IN</button>
        </form>
        <div className={`${styles['login-modal-options']} ${isDarkMode ? styles['dark'] : ''}`}>
          <button onClick={handleRegisterUser} aria-label="Create account">Create Account</button>
          <button aria-label="Reset your password">Forgot Password</button>
        </div>
      </div>,
    </div>,
    document.getElementById("modal-root")

  )
}

export default LoginModal;