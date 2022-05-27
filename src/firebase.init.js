// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyASRaXkM6PnF9ICJ72-r-wN_qkC1Ir0JHQ",
  authDomain: "warehouse-management-27680.firebaseapp.com",
  projectId: "warehouse-management-27680",
  storageBucket: "warehouse-management-27680.appspot.com",
  messagingSenderId: "88670452526",
  appId: "1:88670452526:web:e46956f67b59fc79e318bf",
  measurementId: "G-C6883837S5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
