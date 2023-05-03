// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB715GSTVJn3TNIC34AsIxY8ZN7-eeiib4",
  authDomain: "gustoso-recipes.firebaseapp.com",
  projectId: "gustoso-recipes",
  storageBucket: "gustoso-recipes.appspot.com",
  messagingSenderId: "889849046618",
  appId: "1:889849046618:web:8b19fb425335beb8ee5a63"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);