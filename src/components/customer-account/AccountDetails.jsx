// AccountDetails.jsx

import { useEffect, useState } from "react";
import { getUserDetails, reauthenticateUser, updateUserDetails } from "../../firebase/authService";
import useForm from "../../hooks/useForm";
import styles from './customerAccount.module.scss';

const AccountDetails = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { formData, handleChange, handleSubmit, setFormData, isError, setIsError } = useForm({
    name: userDetails?.name || '', 
    email: '',
    currentPassword: ''
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setUserDetails(userDetails);

        if (userDetails) {
          setFormData({
            name: userDetails.name || '',
            email: '',
            currentPassword: ''
          });
        }
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [setFormData]);

  const submitForm = async () => {
    if (formData.currentPassword === '') {
      setIsError(true);
      console.log('NO PASSWORD');
      return;
    }
  
    try {
      await reauthenticateUser(formData.email, formData.currentPassword);
  
      await updateUserDetails(formData.name, formData.email, formData.currentPassword);
      console.log('Details updated');
      setIsUpdated(true);
  
      setFormData((prevData) => ({
        ...prevData,
        name: formData.name,
        currentPassword: ''
      }));
  
      setUserDetails({
        ...userDetails,
        name: formData.name,
        email: formData.email,
      });
    } catch (error) {
      console.log('Could not update details', error);
      setIsError(true);
    }
  }

  return (
    <div className={styles['account-details']}>
      <form className="main-form" onSubmit={(e) => handleSubmit(e, submitForm)}>
        <h3>Account Details</h3>
        {isUpdated ? <p className={styles['submit-message']}>Details updated!</p> : ''}
        {isError ? <p className={styles['error-message']}>Invalid email/password</p> : ''}

        <label htmlFor="name">Name</label>
          <input 
            type="text"
            placeholder={userDetails?.name || 'Add your name'}
            id="name"
            value={formData.name}
            onChange={handleChange}
          />

        <label htmlFor="email">Email</label>
          <input 
            type="email"
            placeholder='Confirm email address'
            id="email"
            value={formData.email}
            onChange={handleChange}
          />

        <label htmlFor="currentPassword">Current Password</label>
          <input 
            type="password"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Enter your current password"
          />

          <button className="btn-primary">Update Details</button>
      </form>
    </div>
  )
}

export default AccountDetails;