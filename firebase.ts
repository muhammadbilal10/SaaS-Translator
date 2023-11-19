// Import the functions you need from the SDKs you need
import exp from "constants";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn7-0BC35LL3NDrgSPlx8HDUyDRnkU-Js",
  authDomain: "saas-translator-app-f50ff.firebaseapp.com",
  projectId: "saas-translator-app-f50ff",
  storageBucket: "saas-translator-app-f50ff.appspot.com",
  messagingSenderId: "563929655233",
  appId: "1:563929655233:web:29e4662ed56497f440f140",
};

// Initialize Firebase
const app = getApp.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, auth, db, functions };
