// hooks/useUserProfile.js
import { useEffect, useState } from "react";
import { getUserDetails } from "../firebase/authService";

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