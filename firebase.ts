

// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnY6eWeANhxml5dlInbyGM_XAipVRT33I",
  authDomain: "gptclone-ab040.firebaseapp.com",
  projectId: "gptclone-ab040",
  storageBucket: "gptclone-ab040.appspot.com",
  messagingSenderId: "941152934740",
  appId: "1:941152934740:web:3bdf474c69e3e243fc06c1",
 };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore (app)

export {db}