import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "../models";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const database = getFirestore();

export const createUserDocumentFromAuth = async (user: User) => {
  const userDocRef = doc(database, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) return userDocRef;

  const { displayName, email, photoURL } = user;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      email,
      photoURL,
      createdAt,
      displayName,
    });
  } catch (error: any) {
    console.log(`error creating the user ${error?.message}`);
  }
};

export const createAccountWithEmailAndPassword = async (email: string, password: string): Promise<User> => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error: any) {
    throw error;
  }
}

export const signInWithEmailAndPassword = async (email: string, password: string): Promise<User> => {
  try {
    const response = await signInWithEmailAndPasswordFirebase(auth, email, password);
    return response.user;
  } catch (error: any) {
    throw error;
  }
}
