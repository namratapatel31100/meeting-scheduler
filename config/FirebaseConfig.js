// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-df228.firebaseapp.com",
  
  projectId: "meeting-scheduler-df228",
  storageBucket: "meeting-scheduler-df228.appspot.com",
  messagingSenderId: "1093506553261",
  appId: "1:1093506553261:web:773d1f8c4030e6af14bd24",
  measurementId: "G-06S8DHETHP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


