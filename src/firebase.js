// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqxHUSXON5Ydg72CO6qvGHyTWpfy4d93k",
  authDomain: "react-ammar.firebaseapp.com",
  databaseURL: "https://react-ammar-default-rtdb.firebaseio.com",
  projectId: "react-ammar",
  storageBucket: "react-ammar.appspot.com",
  messagingSenderId: "1085678200439",
  appId: "1:1085678200439:web:63584526ba966023828872",
  measurementId: "G-L2J939LGCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
