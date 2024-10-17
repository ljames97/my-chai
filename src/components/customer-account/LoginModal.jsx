// LoginModal.jsx

import { useState } from "react";
import styles from './customerAccount.module.scss';
import { loginUser, registerUser } from "../../firebase/authService";

const LoginModal = ({ toggleAccountModalManager }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(false);
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
      const user = await loginUser(formData.emailLogin, formData.password)
      console.log(user, 'log in success')
    } catch {
      setError('ERROR login');
    }
  }

  const handleRegisterUser = async () => {
    try {
      const newUser = await registerUser(formData.emailLogin, formData.password)
      console.log(newUser);
    } catch {
      setError('ERROR registering');
    }
  }

  return (
    <div className="modal login-modal">
      <div className={styles['login-modal-header']}>
        <h3>Your Account</h3>
        <p onClick={toggleAccountModalManager}>← Back to menu</p>
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
        <button id={styles['sign-in']} className="btn-primary">SIGN IN</button>
      </form>
      <div className={styles['login-modal-options']}>
        <button onClick={handleRegisterUser}>Create Account</button>
        <button>Forgot Password</button>
      </div>
    </div>
  )
}

export default LoginModal;