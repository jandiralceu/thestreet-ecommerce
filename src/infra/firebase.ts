import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as signOutFirebase,
  signInWithEmailAndPassword as signInWithEmailAndPasswordFirebase,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query as queryFirestore,
  getDocs,
} from "firebase/firestore";
import { Product, Category, User } from "../models";

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

export const addCollectionAndDocuments = async (
  collectionKey: string,
  products: any[],
  field: string
): Promise<void> => {
  try {
    const collectionReference = collection(database, collectionKey);
    const batch = writeBatch(database);

    products.forEach((item) => {
      const documentReference = doc(
        collectionReference,
        item[field].toLowerCase()
      );
      batch.set(documentReference, item);
    });

    await batch.commit();
  } catch (error) {
    throw error;
  }
};

export const getCategoriesAndDocuments = async (): Promise<Map<Category, Product[]>> => {
  try {
    const collectionReference = collection(database, "categories");
    const query = queryFirestore(collectionReference);

    const querySnapshot = await getDocs(query);

    const result: Map<Category, Product[]> = new Map();

    querySnapshot.docs.forEach((doc) => {
      const { title, items } = doc.data();

      result.set(title as Category, items as Product[]);
    })

    return result;
  } catch (error) {
    throw error;
  }
};

export const createAccountWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response.user;
  } catch (error: any) {
    throw error;
  }
};

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await signInWithEmailAndPasswordFirebase(
      auth,
      email,
      password
    );
    return response.user;
  } catch (error: any) {
    throw error;
  }
};

export const signOut = () => signOutFirebase(auth);

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}
export { updateProfile };
