// authService.js

import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { EmailAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, reauthenticateWithCredential, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail, updateProfile } from 'firebase/auth';

/**
 * Registers a new user with email and password, and creates a Firestore document for them.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {object} - The newly registered user object.
 * @throws {Error} - Throws an error if registration or Firestore document creation fails.
 */
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid),{
      email: user.email,
      createdAt: new Date(),
      cart: []
    });

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Updates current user's details, such as name and email.
 * Reauthentication is required for security purposes.
 *
 * @param {string} name - The updated name of the user.
 * @param {string} newEmail - The updated email address of the user.
 * @param {string} currentPassword - The user's current password for reauthentication.
 * @throws {Error} - Throws an error if the update process fails.
 */
export const updateUserDetails = async (name, newEmail, currentPassword) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      if (newEmail !== user.email) {
        await updateEmail(user, newEmail);

        await sendEmailVerification(user);
      }

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { name });

    } catch (error) {
      throw new Error(`Error updating user details: ${error.message}`);
    }
  } else {
    throw new Error("No authenticated user found.");
  }
};

/**
 * Retrieves the current authenticated user's details from Firestore.
 *
 * @returns {object|null} - The user's Firestore data if available, otherwise `null`.
 * @throws {Error} - Throws an error if the retrieval process fails.
 */
export const getUserDetails = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        return userData;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Deletes the authenticated user's account and their associated Firestore data.
 *
 * @throws {Error} - Throws an error if the deletion process fails.
 */
export const deleteUserAccount = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await deleteDoc(userRef);
      await deleteUser(user);
      
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


/**
 * Logs in a user with their email and password.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {object} - The logged-in user's data.
 * @throws {Error} - Throws an error if login fails.
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Logs out the currently authenticated user.
 *
 * @throws {Error} - Throws an error if logout fails.
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Reauthenticates the user using their email and password.
 * This is often required for sensitive operations like updating email or deleting an account.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's current password.
 * @throws {Error} - Throws an error if reauthentication fails.
 */
export const reauthenticateUser = async (email, password) => {
  const user = getAuth().currentUser;
  if (user) {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      await reauthenticateWithCredential(user, credential);
    } catch (error) {
      throw new Error(`Error reauthenticating user: ${error.message}`);
    }
  } else {
    throw new Error("No authenticated user found.");
  }
};

