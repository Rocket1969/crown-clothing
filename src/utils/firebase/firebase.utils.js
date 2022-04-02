import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUIUbf2kG1LgwYPQw2kPU2SJaJ8HrrIwg",

  authDomain: "crown-clothing-db-a113f.firebaseapp.com",

  projectId: "crown-clothing-db-a113f",

  storageBucket: "crown-clothing-db-a113f.appspot.com",

  messagingSenderId: "1036529793314",

  appId: "1:1036529793314:web:f0ad47bdc91b5b831c4d7b",

  measurementId: "G-VVVBXRKXSM",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      })
    } catch (error) {
      console.log("Error creating user.", error.message)
    }
  }
  return userDocRef;
}