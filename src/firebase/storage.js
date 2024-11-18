import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { auth, db } from "./firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const storage = getStorage();

/**
 * Uploads a new profile photo to Firebase Storage and updates the user's Firestore document with the photo's URL.
 * @param {File} file - The file object to upload.
 * @returns {Promise<string>} - The URL of the uploaded photo.
 * @throws {Error} - Throws an error if the user is not authenticated or if the upload fails.
 */
export const uploadProfilePhoto = async (file) => {
  const user = auth.currentUser;
  if (!user) throw new Error("No authenticated user");

  // Define the file reference in Firebase Storage
  const fileRef = ref(storage, `profilePhotos/${user.uid}/${file.name}`);
  
  // Upload the new file
  await uploadBytes(fileRef, file);

  // Get the URL of the uploaded file
  const photoURL = await getDownloadURL(fileRef);

  // Update the user's document in Firestore with the new photo URL
  const userDocRef = doc(db, "users", user.uid);
  await updateDoc(userDocRef, { photoURL });

  return photoURL;
};

/**
 * Deletes a previous profile photo from Firebase Storage.
 * @param {string} photoURL - The URL of the photo to delete.
 * @returns {Promise<void>} - Resolves when the photo has been deleted.
 */
export const deletePreviousPhoto = async (photoURL) => {
  const photoRef = ref(storage, photoURL);
  await deleteObject(photoRef);
};

