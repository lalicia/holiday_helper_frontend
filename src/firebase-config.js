import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

//Firebase SDK cridential variables

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
  databaseURL: process.env.REACT_APP_DATABASEURL,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//construct and export auth assign to getAuth
export const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
//construct signup fucntion and get users email and password to creat auth
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
//construct login fuction collect email/passwrd from the user to authenticate them.
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
//logout function
export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  //useEffect that check every time someone unsubs and then updates the state.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
