// authService.js

import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import useAuth from '../hooks/useAuth';

// Register a new user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid),{
      email: user.email,
      createdAt: new Date(),
      cart: []
    });

    console.log("User registered and Firestore document created!");
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUserAccount = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await deleteDoc(userRef);
      await deleteUser(user);
      
      console.log("User and their data have been deleted.");
    } else {
      console.log("No authenticated user found.");
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw new Error(error.message);
  }
};


// Login user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};