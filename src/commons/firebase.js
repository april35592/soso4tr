// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPgQBFAj1vPwzjY0zslqzNy3uUobVgGKg",
  authDomain: "soso4tr-9b143.firebaseapp.com",
  projectId: "soso4tr-9b143",
  storageBucket: "soso4tr-9b143.appspot.com",
  messagingSenderId: "702880441889",
  appId: "1:702880441889:web:ac6009e23eabf1e7f9a560",
  measurementId: "G-SK165VZRXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export default app;
export const db = getFirestore(app);
