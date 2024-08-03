// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9tuNs2f81WeE4jcsH4S_xCVg8qamCX_U",
  authDomain: "landing-page-51184.firebaseapp.com",
  projectId: "landing-page-51184",
  storageBucket: "landing-page-51184.appspot.com",
  messagingSenderId: "569446150582",
  appId: "1:569446150582:web:0bbecc0c78827ffda1d117",
  measurementId: "G-TYGJ23YMYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);