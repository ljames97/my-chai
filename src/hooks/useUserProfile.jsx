// hooks/useUserProfile.js
import { useEffect, useState } from "react";
import { getUserDetails } from "../firebase/authService";

/**
 * Manages and fetches authenticated user profile details.
 *
 * @returns {Object} An object containing:
 *   - `userDetails` (Object|null): The user's profile data from Firestore.
 *   - `setUserDetails` (Function): Function to manually update the `userDetails` state.
 *   - `photoURL` (string): The URL of the user's profile photo.
 *   - `setPhotoURL` (Function): Function to manually update the `photoURL` state.
 */
export const useUserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setUserDetails(userDetails);

        if (userDetails?.photoURL) {
          setPhotoURL(userDetails.photoURL);
        }
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return { userDetails, setUserDetails, photoURL, setPhotoURL };
};