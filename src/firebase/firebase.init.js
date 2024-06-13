// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIZe5Eg5KmKq7jPUGavu9qRrjmRgiCocg",
  authDomain: "real-state-firebase-12fd8.firebaseapp.com",
  projectId: "real-state-firebase-12fd8",
  storageBucket: "real-state-firebase-12fd8.appspot.com",
  messagingSenderId: "343704792109",
  appId: "1:343704792109:web:9514774380b5bb3bbb9ca4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
