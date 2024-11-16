// useAuth.jsx

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

/**
 * Custom hook to track the current authenticated user in Firebase.
 * @returns {Object|null} - The currently authenticated user object, or `null` if no user is authenticated.
 */
const useAuth = () => {
  const [user, setUser] = useState(null);

  /**
   * Effect to set up a listener for Firebase Authentication state changes.
   * This listener automatically updates the `user` state whenever the authentication state changes.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;