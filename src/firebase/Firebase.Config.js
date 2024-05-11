// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACYTwrb8ND2k3pawfSWDXwdvYzp70ddLE",
  authDomain: "librarymanagement-eed8e.firebaseapp.com",
  projectId: "librarymanagement-eed8e",
  storageBucket: "librarymanagement-eed8e.appspot.com",
  messagingSenderId: "488681716459",
  appId: "1:488681716459:web:9b8f46329003b781eddcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;