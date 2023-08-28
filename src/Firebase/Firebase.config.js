// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIxUsBE6uArrqVMwVL4NwjyKlIOr9GP4",
  authDomain: "car-store-fb90e.firebaseapp.com",
  projectId: "car-store-fb90e",
  storageBucket: "car-store-fb90e.appspot.com",
  messagingSenderId: "260145265337",
  appId: "1:260145265337:web:4cdce76773d4b762d0b968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app