// authService.js

import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { EmailAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, reauthenticateWithCredential, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail, updateProfile } from 'firebase/auth';

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

export const updateUserDetails = async (name, newEmail, currentPassword) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);

      if (newEmail !== user.email) {
        await updateEmail(user, newEmail);
        console.log("Email updated successfully");

        await sendEmailVerification(user);
        console.log("Verification email sent to the new email address");
      }

      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { name });
      console.log("User details updated successfully");

    } catch (error) {
      throw new Error(`Error updating user details: ${error.message}`);
    }
  } else {
    throw new Error("No authenticated user found.");
  }
};

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
        console.log("No user data found in Firestore.");
        return null;
      }
    } else {
      console.log("No authenticated user found.");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user details:", error.message);
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

export const reauthenticateUser = async (email, password) => {
  const user = getAuth().currentUser;
  if (user) {
    const credential = EmailAuthProvider.credential(email, password);
    try {
      await reauthenticateWithCredential(user, credential);
      console.log("Reauthentication successful");
    } catch (error) {
      throw new Error(`Error reauthenticating user: ${error.message}`);
    }
  } else {
    throw new Error("No authenticated user found.");
  }
};