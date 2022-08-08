import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDhJz5UPJegaXJjbsn3n7KHoZyMEVp2-1k",
  authDomain: "holiday-helper1.firebaseapp.com",
  projectId: "holiday-helper1",
  storageBucket: "holiday-helper1.appspot.com",
  messagingSenderId: "73772116500",
  appId: "1:73772116500:web:14f5a1e877a4e2349dd501",
  measurementId: "G-DCTBHJV3ZG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

