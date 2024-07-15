// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGnZ-8LhA6uRta0bhS0Bl3m-xCLovDe4Q",
  authDomain: "vite-contact-5f640.firebaseapp.com",
  projectId: "vite-contact-5f640",
  storageBucket: "vite-contact-5f640.appspot.com",
  messagingSenderId: "271959257292",
  appId: "1:271959257292:web:e0291bda4dd4e429f9d269"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);