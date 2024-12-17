// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsbwlVqJUQsl3EgsWaZVpF-Z4tezIqCqY",
    authDomain: "shopco-59503.firebaseapp.com",
    projectId: "shopco-59503",
    storageBucket: "shopco-59503.appspot.com",
    messagingSenderId: "982710249475",
    appId: "1:982710249475:web:86455838abb70a58244636",
    measurementId: "G-Q7QKPJQTZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);