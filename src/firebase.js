// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe0W9YJSyMVSxLUJeXRwGtfeRr0NrWhXI",
  authDomain: "cafeland-29955.firebaseapp.com",
  projectId: "cafeland-29955",
  storageBucket: "cafeland-29955.firebasestorage.app",
  messagingSenderId: "1076741158383",
  appId: "1:1076741158383:web:c46feb12412f47921df21a",
  measurementId: "G-9RECWG3DQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);