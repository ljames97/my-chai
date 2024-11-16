// AccountDetails.jsx
import { useEffect, useState } from "react";
import { reauthenticateUser, updateUserDetails } from "../../firebase/authService";
import useForm from "../../hooks/useForm";
import styles from './customerAccount.module.scss';
import { defaultProfilePhoto, plusIcon } from "../../assets/images";
import { deletePreviousPhoto, uploadProfilePhoto } from "../../firebase/storage";
import { useUserProfile } from "../../hooks/useUserProfile";

/**
 * Renders form for updating user account details, including:
 * name, email, password, and profile photo. 
 * Utilizes Firebase authentication for reauthentication and profile updates.
 *
 * @component
 * @returns {JSX.Element} AccountDetails component.
 */
const AccountDetails = () => {
  const { userDetails, setUserDetails, photoURL, setPhotoURL } = useUserProfile();
  const [isUpdated, setIsUpdated] = useState(false);
  const { formData, handleChange, handleSubmit, setFormData, isError, setIsError } = useForm({
    name: userDetails?.name || '', 
    email: '',
    currentPassword: ''
  });

  /**
   * Synchronizes form data with the retrieved user details on component mount.
   */
  useEffect(() => {
    if (userDetails) {
      setFormData((prevData) => ({
        ...prevData,
        name: userDetails.name || '',
        email: userDetails.email || '',
      }));
    }
  }, [userDetails, setFormData]);

  /**
   * Initiates file input when profile image container is clicked.
   */
  const handleProfileClick = () => {
    document.getElementById('fileInput').click();
  };

  /**
   * Triggers on file selection to upload a new profile photo.
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadNewPhoto(file);
    }
  };

  /**
   * Uploads new profile photo to Firebase Storage, deletes previous photo if it exists,
   * and updates the user's profile photo URL.
   *
   * @param {File} file - Selected file for profile photo.
   */
  const uploadNewPhoto = async (file) => {
    try {
      if (photoURL) {
        await deletePreviousPhoto(photoURL);
      }
      const newPhotoURL = await uploadProfilePhoto(file);
      setPhotoURL(newPhotoURL);
    } catch (error) {
      console.error("Error uploading photo:", error);
    }
  };

  /**
   * Submits the form, reauthenticates the user, and updates user details
   * including name and email. Clears the password field after submission.
   */
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
      <form className={`${styles['account-details-form']} main-form`} onSubmit={(e) => handleSubmit(e, submitForm)}>
        <h3>Account Details</h3>
        {isUpdated && <p className={styles['submit-message']}>Details updated!</p>}
        {isError && <p className={styles['error-message']}>Invalid email/password</p>}

        <div onClick={handleProfileClick} className={styles['update-profile-image-container']}>
          <img src={photoURL || defaultProfilePhoto} />
          <div className={styles['overlay-icon']}>
            <img src={plusIcon} alt="Add" className={styles['plus-icon']} />
          </div>
          <input 
            id="fileInput" 
            type="file" 
            style={{ display: 'none' }} 
            onChange={handleFileChange} 
            accept="image/*"
          />
        </div>

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
  );
};

export default AccountDetails;