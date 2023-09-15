// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1m_vUd4w7QGQ-ULexCTLubulU2SSBTg",
  authDomain: "netflixgpt-6fe03.firebaseapp.com",
  projectId: "netflixgpt-6fe03",
  storageBucket: "netflixgpt-6fe03.appspot.com",
  messagingSenderId: "511960697984",
  appId: "1:511960697984:web:8550bc4c22643550e6ea65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();