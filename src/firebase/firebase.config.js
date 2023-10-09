// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNqV5z3O9CF1adlzrVOoYIqzMFZ4Nn4s",
  authDomain: "programming-hero-assignment-9.firebaseapp.com",
  projectId: "programming-hero-assignment-9",
  storageBucket: "programming-hero-assignment-9.appspot.com",
  messagingSenderId: "186705334685",
  appId: "1:186705334685:web:c3385369a0c1bb43705f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;