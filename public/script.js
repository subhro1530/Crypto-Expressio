// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNg2-Xv1s5HHTZ3RZZnmzWJwgj09154yE",
  authDomain: "crypto-expressio.firebaseapp.com",
  projectId: "crypto-expressio",
  storageBucket: "crypto-expressio.appspot.com",
  messagingSenderId: "628973610351",
  appId: "1:628973610351:web:5bfa823ca5bc679529349a",
  measurementId: "G-8Y0PFJHFV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
